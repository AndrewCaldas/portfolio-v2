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
      className={`absolute rounded-full [backface-visibility:hidden] w-[20vmin] h-[20vmin] animate-move  text-[${currentColor}]`}
      style={{
        top: `${top}`,
        left: `${left}`,
        animationDuration: `${animationDuration}`,
        animationDelay: `${animationDelay}`,
        transformOrigin: `${transformOrigin}`,
        boxShadow: `${boxShadow} ${currentColor}`,
        opacity: 0.4,
      }}
    ></div>
  );
}
