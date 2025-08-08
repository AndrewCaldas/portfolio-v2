import Image from "next/image";
import BackgroundImage from "@/assets/images/profile.png";

interface ProjectThumbProps {
  title: string;
  image: string;
}

export function ProjectThumb({ title, image }: ProjectThumbProps) {
  return (
    <div className="relative w-52 h-38 rounded-lg overflow-hidden shadow-lg">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt="project image"
          fill
          className="object-cover blur-sm brightness-75" // blur + escurecer levemente para contraste
        />
      </div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <h4 className="text-lg text-muted-foreground font-semibold drop-shadow-lg">
          {title}
        </h4>
      </div>
    </div>
  );
}
