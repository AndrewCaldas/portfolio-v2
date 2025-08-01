import { AnimatedBall } from "./animated-ball";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden bg-transparent">
      <AnimatedBall
        top="77%"
        left="88%"
        animationDuration="40s"
        animationDelay="-3s"
        transformOrigin="15vw -2vh"
        boxShadow="40vmin 0 5.703076368487546vmin"
        currentColor="#2C3E50"
      />
      <AnimatedBall
        top="42%"
        left="2%"
        animationDuration="53s"
        animationDelay="-29s"
        transformOrigin="-19vw 21vh"
        boxShadow="40vmin 0 5.17594621519026vmin"
        currentColor="#7F8C8D"
      />
      <AnimatedBall
        top="28%"
        left="18%"
        animationDuration="49s"
        animationDelay="-8s"
        transformOrigin="-22vw 3vh"
        boxShadow="40vmin 0 5.248179047256236vmin"
        currentColor="#C8D6E5"
      />
      <AnimatedBall
        top="50%"
        left="79%"
        animationDuration="26s"
        animationDelay="-21s"
        transformOrigin="-17vw -6vh"
        boxShadow="40vmin 0 5.279749632220298vmin"
        currentColor="#D6EFFF"
      />
      <AnimatedBall
        top="10%"
        left="15%"
        animationDuration="20s"
        animationDelay="-11s"
        transformOrigin="-17vw -6vh"
        boxShadow="40vmin 0 5.279749632220298vmin"
        currentColor="#A8E6CF"
      />
      <AnimatedBall
        top="10%"
        left="10%"
        animationDuration="40s"
        animationDelay="-3s"
        transformOrigin="15vw -2vh"
        boxShadow="40vmin 0 5.703076368487546vmin"
        currentColor="#2C3E50"
      />
      <AnimatedBall
        top="33%"
        left="88%"
        animationDuration="53s"
        animationDelay="-29s"
        transformOrigin="-19vw 21vh"
        boxShadow="40vmin 0 5.17594621519026vmin"
        currentColor="#7F8C8D"
      />
      <AnimatedBall
        top="58%"
        left="99%"
        animationDuration="49s"
        animationDelay="-8s"
        transformOrigin="-22vw 3vh"
        boxShadow="40vmin 0 5.248179047256236vmin"
        currentColor="#C8D6E5"
      />
    </div>
  );
}
