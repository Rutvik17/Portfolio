import { TechIcon } from "@/components/TechIcon";
import { Fragment } from "react";
import { twMerge } from "tailwind-merge";

const Skills = ({ skills, className, skillsWrapperClassName }:
  {
    skills: { title: string, iconType: React.ElementType }[];
    className?: string;
    skillsWrapperClassName?: string
  }) => {
  return (
    <div className={twMerge("flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]", className)}>
      <div className={twMerge("flex flex-none py-0.5 gap-6 pr-6", skillsWrapperClassName)}>
        {[...new Array(2)].fill(0).map((_, index) =>
          <Fragment key={index}>
            {skills.map((skill) => {
              return (
                <div key={skill.title} className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg">
                  <span>
                    <TechIcon component={skill.iconType} />
                  </span>
                  <span className="font-semibold">
                    {skill.title}
                  </span>
                </div>
              )
            })}
          </Fragment>
        )}
      </div>
    </div>
  )
}

export default Skills;