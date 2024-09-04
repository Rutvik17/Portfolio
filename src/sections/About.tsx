import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import bookCover from '@/assets/images/book-cover.png';
import JavascriptIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CSSIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import JavaIcon from '@/assets/icons/java.svg';
import NodeIcon from '@/assets/icons/node.svg';
import PythonIcon from '@/assets/icons/python.svg';
import SaasIcon from '@/assets/icons/saas.svg';
import TailwindIcon from '@/assets/icons/tailwind.svg';
import TypescriptIcon from '@/assets/icons/typescript.svg';
import GithubIcon from '@/assets/icons/github.svg';
import ChromeIcon from '@/assets/icons/chrome.svg';
import AWSIcon from '@/assets/icons/aws.svg';
import mapImage from '@/assets/images/map.png';
import smileMemoji from '@/assets/images/memoji-smile.png';
import CardHeader from "@/components/CardHeader";
import Skills from "@/components/Skills";

const skills = [
  { title: 'HTML5', iconType: HTMLIcon },
  { title: 'CSS3', iconType: CSSIcon },
  { title: 'Javascript', iconType: JavascriptIcon },
  { title: 'React', iconType: ReactIcon },
  { title: 'React Native', iconType: ReactIcon },
  { title: 'Typescript', iconType: TypescriptIcon },
  { title: 'Java', iconType: JavaIcon },
  { title: 'Node.js', iconType: NodeIcon },
  { title: 'Python', iconType: PythonIcon },
  { title: 'AWS', iconType: AWSIcon },
  { title: 'Saas', iconType: SaasIcon },
  { title: 'Tailwind Css', iconType: TailwindIcon },
  { title: 'Github', iconType: GithubIcon },
  { title: 'Chrome', iconType: ChromeIcon }
];

const hobbies = [
  { title: 'Foodie', emoji: '🍕', left: '5%', top: '5%' },
  { title: 'Photography', emoji: '📸', left: '40%', top: '5%' },
  { title: 'Movies', emoji: '🍿', left: '75%', top: '5%' },
  { title: 'Snowboarding', emoji: '🏂', left: '45%', top: '35%' },
  { title: 'Gaming', emoji: '🎮', left: '20%', top: '35%' },
  { title: 'Fitness', emoji: '🏋🏼', left: '5%', top: '65%' },
  { title: 'Music', emoji: '🎧', left: '70%', top: '65%' },
  { title: 'Hiking', emoji: '🏔️', left: '35%', top: '65%' },
];

export const AboutSection = () => {
  return (
    <section className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          title="A Glimpse Into My World"
          eyebrow="About Me"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader title="My Reads" description="Explore the books shaping my perspective." />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookCover} alt="The Intelligent Investor" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences."
                className=""
              />
              <Skills skills={skills} className="" />
              <Skills skills={skills}
                className="mt-6"
                skillsWrapperClassName="-translate-x-1/2"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the code"
                description="Explore my interests and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1">
                {hobbies.map((hobby) => {
                  return (
                    <div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-blue-300 to-sky-400 rounded-full py-1.5 absolute" style={{
                      left: hobby.left,
                      top: hobby.top
                    }}>
                      <span className="font-medium text-gray-950">
                        {hobby.title}
                      </span>
                      <span>
                        {hobby.emoji}
                      </span>
                    </div>
                  )
                })}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image src={mapImage} alt="Map" className="h-full w-full object-cover object-center" />
              <div className="absolute top-60 left-1/2 -translate-x-14 -translate-y-14 size-20 rounded-full bg-gradient-to-r from-blue-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <Image src={smileMemoji} alt="Smile memoji" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
};
