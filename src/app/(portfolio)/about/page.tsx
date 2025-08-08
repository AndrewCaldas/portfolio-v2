import Image from "next/image";
import { Download } from "lucide-react";
import ProfilePicture from "@/assets/images/profile.png";
import { Button } from "@/components/ui/button";
import { ExperienceCard } from "@/components/experience-card";

let careerList = [
  {
    position: "Software Development III",
    companyName: "Leroy Merlin",
    companyLocation: "Morumbi, SP",
    companyUrl: "/",
    startDate: "01/07/2021",
    endDate: "",
  },
  {
    position: "Software Development II",
    companyName: "IBM Brasil",
    companyLocation: "Paraiso, SP",
    companyUrl: "/",
    startDate: "02/01/2019",
    endDate: "01/06/2021",
  },
  {
    position: "Software Development I",
    companyName: "Red Fox Consulting",
    companyLocation: "Republica, SP",
    companyUrl: "/",
    startDate: "01/03/2018",
    endDate: "01/01/2019",
  },
];

export default function About() {
  return (
    <div className="flex flex-col mx-auto gap-10">
      <div className="text-4xl font-bold">about me</div>

      <div className="grid lg:grid-cols-[auto_1fr] gap-10">
        <div className="flex justify-center w-full">
          <Image
            className="rounded-lg shadow-2xl"
            alt="profile picture"
            src={ProfilePicture}
            width={300}
            height={300}
          />
        </div>

        <div className="flex flex-col justify-between items-center text-center lg:items-start lg:text-left gap-8">
          <div className="text-lg text-muted-foreground">
            It is a{" "}
            <span className="text-zinc-950 dark:text-zinc-200">
              long established
            </span>{" "}
            fact that a reader will be distracted by the readable content of a
            page when looking at its layout. The point of using Lorem Ipsum is
            that it has a more-or-less normal distribution of letters, as
            opposed to using 'Content here, content here', making it look like
            readable English. Many desktop publishing packages and web page
            editors now use Lorem Ipsum as their default model text, and a
            search for 'lorem ipsum' will uncover many web sites still in their
            infancy. Various versions have evolved over the years, sometimes by
            accident, sometimes on purpose (injected humour and the like).
          </div>

          <Button variant="secondary" className="h-8 w-fit cursor-pointer">
            <Download />
            Download CV
          </Button>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="text-2xl font-bold my-6">Career</div>

        {careerList?.map((exp, index) => (
          <div key={index} className="mb-10">
            <ExperienceCard key={index} {...exp} />
          </div>
        ))}
      </div>
    </div>
  );
}
