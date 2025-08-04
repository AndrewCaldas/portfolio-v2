interface AnimatedBallProps {
  currentColor: string;
  top: string;
  left: string;
  animationDuration: string;
  animationDelay: string;
  transformOrigin: string;
  boxShadow: string;
}

export function AnimatedBall({
  currentColor,
  top,
  left,
  animationDuration,
  animationDelay,
  transformOrigin,
  boxShadow,
}: AnimatedBallProps) {
  return (
    <div
      className={`absolute rounded-full w-[10vmin] h-[10vmin] [backface-visibility:hidden] animate-move text-[${currentColor}]`}
      style={{
        top: `${top}`,
        left: `${left}`,
        animationDuration: `${animationDuration}`,
        animationDelay: `${animationDelay}`,
        transformOrigin: `${transformOrigin}`,
        boxShadow: `${boxShadow} ${currentColor}`,
        opacity: 0.3,
      }}
    ></div>
  );
}
