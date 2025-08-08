import { ProjectThumb } from "@/components/project-thumb";

export default function Projects() {
  return (
    <div className="flex flex-col mx-auto gap-10">
      <div>
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="mt-6 mb-4">frases</p>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold">Featured Projects</h2>
        <div className="grid grid-flow-col auto-cols-auto auto-rows-auto gap-4">
          <ProjectThumb title="Projecto 1" image="/images/profile.png" />
          <ProjectThumb title="Projecto 2" image="/images/profile.png" />
          <ProjectThumb title="Projecto 3" image="/images/profile.png" />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold">All Projects</h2>

        <div className="flex flex-col gap-4">
          <h3 className="text-md font-semibold">2025</h3>
          <div className="grid grid-flow-col auto-cols-auto auto-rows-auto gap-4">
            <ProjectThumb title="Projecto 1" image="/images/profile.png" />
            <ProjectThumb title="Projecto 2" image="/images/profile.png" />
            <ProjectThumb title="Projecto 3" image="/images/profile.png" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-md font-semibold">2024</h3>
          <div className="grid grid-flow-col auto-cols-auto auto-rows-auto gap-4">
            <ProjectThumb title="Projecto 1" image="/images/profile.png" />
            <ProjectThumb title="Projecto 2" image="/images/profile.png" />
            <ProjectThumb title="Projecto 3" image="/images/profile.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
