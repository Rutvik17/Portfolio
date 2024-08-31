import floemaLandingPage from "@/assets/images/floema.jpg";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import captionedCover from "@/assets/images/captioned-cover.png";
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRight from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "One 7 [Rutvik.dev]",
    year: "2024",
    title: "Floema - An interactive jewellery store",
    desc: "Made with 🧡",
    skills: ['PUG', 'SCSS', 'WEBGL'],
    link: "https://github.com/Rutvik17/Floema",
    image: floemaLandingPage,
  },
  {
    company: "One 7 [Rutvik.dev]",
    year: "2024",
    title: "Light Saas Landing Page",
    desc: "Made with 🩵",
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    link: "https://rutvik17.github.io/saas-landing-page/",
    image: lightSaasLandingPage,
  },
  {
    company: "One 7 [Rutvik.dev]",
    year: "2024",
    title: "Captioned - Generate media captions",
    desc: "Made with 💕",
    skills: ['React Native', 'Gemini', 'Reanimated'],
    link: "https://github.com/Rutvik17/Captioned",
    image: captionedCover,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title="My Personal Projects"
          eyebrow="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project) => {
            return (
              <Card key={project.title} className='px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20'>
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                    <div className="uppercase bg-gradient-to-r from-blue-300 to-emerald-400 text-transparent bg-clip-text inline-flex gap-2 font-bold tracking-widest text-sm">
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span className="italic font-serif">{project.year}</span>
                    </div>
                    <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                      {project.title}
                    </h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <span className="font-serif text-sm mt-2 italic">
                      {project.desc}
                    </span>
                    <ul className="flex gap-4 mt-4 md:mt-5 flex-wrap">
                      {project.skills.map((skill) => {
                        return (
                          <li key={skill} className="flex gap-2 bg-gradient-to-r from-blue-300 to-blue-400 p-2 rounded-xl items-center">
                            <CheckCircleIcon className='size-5 text-blue-400 md:size-6' />
                            <span className="text-sm md:text-base text-white/70">
                              {skill}
                            </span>
                          </li>
                        )
                      })}
                    </ul>
                    <a href={project.link}>
                      <button className="font-serif italic bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                        <span>
                          Visit
                        </span>
                        <ArrowUpRight className='size-4' />
                      </button>
                    </a>
                  </div>
                  <div className="relative">
                    <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-xl" />
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
};
