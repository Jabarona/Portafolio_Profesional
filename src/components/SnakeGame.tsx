import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiPython, SiReact, SiNodedotjs, SiDocker, SiPostgresql, SiHtml5, SiJavascript, SiBootstrap, SiDjango } from 'react-icons/si';
import { FaAws, FaChartBar } from 'react-icons/fa';
import { Play, RotateCcw } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const SKILLS = [
  { icon: SiPython, label: 'Python', color: '#3776AB' },
  { icon: FaAws, label: 'AWS', color: '#FF9900' },
  { icon: SiPostgresql, label: 'SQL', color: '#4169E1' },
  { icon: SiReact, label: 'React', color: '#61DAFB' },
  { icon: SiDocker, label: 'Docker', color: '#2496ED' },
  { icon: SiNodedotjs, label: 'Node.js', color: '#339933' },
  { icon: SiHtml5, label: 'HTML', color: '#E34F26' },
  { icon: SiJavascript, label: 'JavaScript', color: '#F7DF1E' },
  { icon: SiBootstrap, label: 'Bootstrap', color: '#7952B3' },
  { icon: FaChartBar, label: 'Power BI', color: '#F2C811' },
  { icon: SiDjango, label: 'Django', color: '#092E20' },
];

const GRID_SIZE = 15;
const INITIAL_SNAKE = [{ x: 7, y: 7 }];
const INITIAL_DIRECTION = { x: 0, y: -1 };
const BASE_SPEED = 180;

type Point = { x: number; y: number };
type Food = Point & { skillIndex: number };

export const SnakeGame = () => {
  const [snake, setSnake] = useState<Point[]>(INITIAL_SNAKE);
  const [direction, setDirection] = useState<Point>(INITIAL_DIRECTION);
  const [food, setFood] = useState<Food>({ x: 5, y: 5, skillIndex: 0 });
  const [status, setStatus] = useState<'idle' | 'playing' | 'game_over'>('idle');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [showGameOverSkills, setShowGameOverSkills] = useState(false);
  const { t } = useLanguage();
  
  // Usamos ref para la dirección actual para evitar bugs al presionar teclas muy rápido
  const directionRef = useRef(direction);

  const generateFood = useCallback((currentSnake: Point[]): Food => {
    let newFood: Food;
    while (true) {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
        skillIndex: Math.floor(Math.random() * SKILLS.length)
      };
      const onSnake = currentSnake.some(segment => segment.x === newFood.x && segment.y === newFood.y);
      if (!onSnake) break;
    }
    return newFood;
  }, []);

  const startGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    directionRef.current = INITIAL_DIRECTION;
    setScore(0);
    setStatus('playing');
    setFood(generateFood(INITIAL_SNAKE));
  };

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    // Evitar scroll en la página con las flechas si estamos jugando
    if (status === 'playing' && ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
      e.preventDefault();
    }

    if (status !== 'playing') return;

    const currentDir = directionRef.current;
    
    switch (e.key) {
      case 'ArrowUp':
      case 'w':
      case 'W':
        if (currentDir.y !== 1) directionRef.current = { x: 0, y: -1 };
        break;
      case 'ArrowDown':
      case 's':
      case 'S':
        if (currentDir.y !== -1) directionRef.current = { x: 0, y: 1 };
        break;
      case 'ArrowLeft':
      case 'a':
      case 'A':
        if (currentDir.x !== 1) directionRef.current = { x: -1, y: 0 };
        break;
      case 'ArrowRight':
      case 'd':
      case 'D':
        if (currentDir.x !== -1) directionRef.current = { x: 1, y: 0 };
        break;
    }
  }, [status]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress, { passive: false });
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  useEffect(() => {
    if (status !== 'playing') return;

    const moveSnake = () => {
      setSnake(prevSnake => {
        const head = prevSnake[0];
        const newHead = {
          x: head.x + directionRef.current.x,
          y: head.y + directionRef.current.y
        };

        // Choque con paredes
        if (
          newHead.x < 0 ||
          newHead.x >= GRID_SIZE ||
          newHead.y < 0 ||
          newHead.y >= GRID_SIZE
        ) {
          setStatus('game_over');
          return prevSnake;
        }

        // Choque consigo misma
        if (prevSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
          setStatus('game_over');
          return prevSnake;
        }

        const newSnake = [newHead, ...prevSnake];

        // Comer comida
        if (newHead.x === food.x && newHead.y === food.y) {
          setScore(s => {
            const newScore = s + 1;
            if (newScore > highScore) setHighScore(newScore);
            return newScore;
          });
          setFood(generateFood(newSnake));
        } else {
          newSnake.pop(); // Eliminar la cola si no comió
        }

        return newSnake;
      });
      setDirection(directionRef.current);
    };

    // Aumentar velocidad según el puntaje (máximo el doble de rápido)
    const speed = Math.max(BASE_SPEED - (score * 3), 70);
    const interval = setInterval(moveSnake, speed);
    return () => clearInterval(interval);
  }, [status, food, generateFood, score, highScore]);

  useEffect(() => {
    if (status === 'game_over') {
      const timer = setTimeout(() => {
        setShowGameOverSkills(true);
      }, 5000);
      return () => clearTimeout(timer);
    } else {
      setShowGameOverSkills(false);
    }
  }, [status]);

  // Controles móviles táctiles
  const handleMobileControl = (newDir: Point) => {
    if (status !== 'playing') return;
    const currentDir = directionRef.current;
    // Prevenir movimiento en sentido contrario directo
    if (newDir.x !== 0 && currentDir.x === -newDir.x) return;
    if (newDir.y !== 0 && currentDir.y === -newDir.y) return;
    
    directionRef.current = newDir;
  };

  // Referencias para el toque táctil (Swipe)
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (status !== 'playing') return;
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (status !== 'playing' || !touchStartRef.current) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    
    const deltaX = touchEndX - touchStartRef.current.x;
    const deltaY = touchEndY - touchStartRef.current.y;
    
    // Mínima distancia para considerar que fue un swipe (evita toques accidentales)
    const minSwipeDistance = 30;
    
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      // Movimiento horizontal
      if (Math.abs(deltaX) > minSwipeDistance) {
        if (deltaX > 0) {
          handleMobileControl({ x: 1, y: 0 }); // Derecha
        } else {
          handleMobileControl({ x: -1, y: 0 }); // Izquierda
        }
      }
    } else {
      // Movimiento vertical
      if (Math.abs(deltaY) > minSwipeDistance) {
        if (deltaY > 0) {
          handleMobileControl({ x: 0, y: 1 }); // Abajo
        } else {
          handleMobileControl({ x: 0, y: -1 }); // Arriba
        }
      }
    }
    touchStartRef.current = null;
  };

  const FoodIcon = SKILLS[food.skillIndex].icon;
  const foodColor = SKILLS[food.skillIndex].color;

  return (
    <section className="py-32 px-8 relative bg-surface-container-lowest" id="habilidades">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6 tracking-tight">
            {t('snake.section.title1')} <span className="text-primary-container">{t('snake.section.title2')}</span>
          </h2>
          <p className="text-on-surface-variant text-lg max-w-xl mx-auto">
            {t('snake.section.desc')}
          </p>
        </motion.div>

        <div className="w-full max-w-[500px] bg-surface-container-low rounded-3xl border border-outline-variant/10 overflow-hidden shadow-2xl flex flex-col items-center">
          
          {/* Header del juego */}
          <div className="w-full bg-surface-container-high px-6 py-4 flex justify-between items-center border-b border-outline-variant/10">
            <div className="flex flex-col">
              <span className="text-[10px] font-mono text-outline uppercase tracking-widest">{t('snake.score')}</span>
              <span className="text-2xl font-bold text-primary">{score}</span>
            </div>
            <div className="flex flex-col text-right">
              <span className="text-[10px] font-mono text-outline uppercase tracking-widest">{t('snake.highScore')}</span>
              <span className="text-xl font-bold text-on-surface-variant">{highScore}</span>
            </div>
          </div>

          {/* Área del tablero */}
          <div 
            className="relative w-full aspect-square bg-surface-container-lowest flex items-center justify-center p-4"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{ touchAction: status === 'playing' ? 'none' : 'auto' }}
          >
            
            {/* Tablero (Grid) */}
            <div 
              className="relative w-full h-full bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/5 shadow-inner"
              style={{ 
                display: 'grid', 
                gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
                gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`
              }}
            >
              {/* Renderizar Serpiente */}
              {snake.map((segment, i) => {
                const isHead = i === 0;
                return (
                  <motion.div
                    key={`${segment.x}-${segment.y}-${i}`}
                    initial={isHead ? { scale: 0.8, opacity: 0 } : false}
                    animate={{ scale: 1, opacity: 1 }}
                    className={`w-full h-full ${isHead ? 'bg-primary' : 'bg-primary/70'} rounded-sm`}
                    style={{
                      gridColumnStart: segment.x + 1,
                      gridRowStart: segment.y + 1,
                      zIndex: isHead ? 10 : 5,
                    }}
                  />
                );
              })}

              {/* Renderizar Comida */}
              <motion.div
                key={`food-${score}`}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                className="w-full h-full flex items-center justify-center"
                style={{
                  gridColumnStart: food.x + 1,
                  gridRowStart: food.y + 1,
                  zIndex: 8,
                }}
              >
                <div 
                  className="w-[85%] h-[85%] rounded bg-surface-container-high flex items-center justify-center shadow-lg border border-outline-variant/10 animate-pulse"
                  style={{ boxShadow: `0 0 10px ${foodColor}40` }}
                >
                  <FoodIcon className="w-[60%] h-[60%]" style={{ color: foodColor }} />
                </div>
              </motion.div>
            </div>

            {/* Overlays de Menú */}
            <AnimatePresence>
              {status !== 'playing' && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-background/90 backdrop-blur-sm flex flex-col items-center justify-center z-20 p-4"
                >
                  {status === 'game_over' && !showGameOverSkills && (
                    <motion.div 
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="flex flex-col items-center"
                    >
                      <h3 className="text-2xl font-bold text-error mb-2">
                        {t('snake.title')}
                      </h3>
                      <p className="text-on-surface-variant text-sm mb-6 text-center font-mono">
                        {t('snake.desc1')} {score} {t('snake.desc2')}
                      </p>
                      <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin mt-4 opacity-50"></div>
                    </motion.div>
                  )}

                  {status === 'game_over' && showGameOverSkills && (
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="flex flex-col items-center w-full"
                    >
                      <h3 className="text-lg font-bold text-primary mb-4 text-center">
                        {t('snake.skillsTitle')}
                      </h3>
                      <div className="flex flex-wrap justify-center gap-3 mb-6 max-h-[220px] overflow-y-auto w-full px-2 py-1 custom-scrollbar">
                        {SKILLS.map(skill => {
                          const SIcon = skill.icon;
                          return (
                            <div key={skill.label} className="flex items-center gap-1.5 md:gap-2 bg-surface-container-highest px-2 py-1.5 md:px-3 md:py-2 rounded-lg border border-outline-variant/10 shadow-sm hover:border-primary/30 transition-colors cursor-default">
                               <SIcon className="w-4 h-4 md:w-5 md:h-5 drop-shadow-sm" style={{ color: skill.color }} />
                               <span className="text-[10px] md:text-xs font-bold text-on-surface-variant uppercase tracking-wider">{skill.label}</span>
                            </div>
                          );
                        })}
                      </div>
                      <button
                        onClick={startGame}
                        className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-on-primary px-6 py-3 rounded-xl font-bold transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
                      >
                        <RotateCcw className="w-5 h-5" />
                        {t('snake.playAgain')}
                      </button>
                    </motion.div>
                  )}
                  
                  {status === 'idle' && (
                    <motion.div className="flex flex-col items-center">
                      <p className="text-on-surface-variant text-sm mb-6 max-w-[250px] text-center font-mono">
                        {t('snake.startDesc')}
                      </p>
                      <button
                        onClick={startGame}
                        className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-on-primary px-6 py-3 rounded-xl font-bold transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
                      >
                        <Play className="w-5 h-5" />
                        {t('snake.startBtn')}
                      </button>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Notificador visual para móviles de que deben deslizar */}
          <div className="w-full p-4 bg-surface-container-high border-t border-outline-variant/10 md:hidden flex justify-center items-center">
             <span className="text-xs font-mono text-outline uppercase tracking-wider animate-pulse">
               {t('snake.swipeHint') || 'Desliza para jugar'}
             </span>
          </div>
          {/* Indicador de controles en Escritorio */}
          <div className="hidden md:flex w-full py-3 bg-surface-container-high border-t border-outline-variant/10 justify-center items-center gap-4 text-xs font-mono text-outline">
            <span>{t('snake.desktopHint')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
