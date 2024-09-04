import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import { SectionHeader } from "@/components/SectionHeader";
import ArrorUpRight from '@/assets/icons/arrow-up-right.svg';
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Roy Loeffler",
    position: "Senior R&D Manager @ Mitel",
    text: "Rutvik was one the most promising Angular developers I had in my team. I had the pleasure of being Rutvik's manager for almost a year. Rutvik came fresh out of college to Mitel, in that short year he had to learn Angular, become proficient and contribute to an aggressive portal build out plan. Not only did Rutvik become a strong contributor, also his level of proficiency in Angular made him the 'go to' person for all questions or challenges related to our UI work. I would certainly be happy to work with Rutvik again.",
    avatar: memojiAvatar1,
  },
  {
    name: "James Kappen",
    position: "Commercial Real Estate Investor",
    text: "Rutvik is an exceptional developer with a great attitude and a hunger to continually learn more. Our mobile project benefitted greatly from having him on our team and he will be an asset on any team that he contributes to.",
    avatar: memojiAvatar2,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title="Happy Teams"
          eyebrow="What my co-workers say about me"
          description="Don't just take my word for it. See what my peers have to say about me."
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex flex-none gap-8 pr-8 animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) =>
              <Fragment key={index}>
                {testimonials.map((testimonial) => {
                  return (
                    <Card
                      key={testimonial.name}
                      className="max-w-xs md:max-w-md lg:max-w-lg p-6 md:p-8 hover:-rotate-3 transition duration-300"
                    >
                      <div className="flex gap-4 items-center">
                        <div className="size-14 bg-gray-700 inline-flex overflow-hidden items-center justify-center rounded-full flex-shrink-0">
                          <Image src={testimonial.avatar} alt={testimonial.name} className="max-h-full" />
                        </div>
                        <div>
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="text-sm text-white/40">{testimonial.position}</div>
                          <a href={'https://www.linkedin.com/in/rutvik1702/'}
                            key={testimonial.name}
                            target="_blank"
                            className="font-serif italic text-sm text-blue-400 underline items-center inline-flex gap-1"
                          >
                            <span>View</span>
                            <ArrorUpRight className='size-4' />
                          </a>
                        </div>
                      </div>
                      <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
                    </Card>
                  )
                })}
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
