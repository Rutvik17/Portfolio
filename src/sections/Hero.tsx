import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import { HeroOrbit } from '@/components/HeroOrbit';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import { Memoji } from '@/components/Memoji';

const stars = [
  { size: 590, rotation: 20, className: 'size-12 text-blue-300', shouldOrbit: true, orbitDuration: '56s', shouldSpin: true, spinDuration: '12s' },
  { size: 690, rotation: 98, className: 'size-8 text-blue-300', shouldOrbit: true, orbitDuration: '56s', shouldSpin: true, spinDuration: '12s' },
  { size: 720, rotation: -140, className: 'size-16 text-blue-300', shouldOrbit: true, orbitDuration: '56s', shouldSpin: true, spinDuration: '12s' },
  { size: 800, rotation: -72, className: 'size-28 text-blue-300', shouldOrbit: true, orbitDuration: '56s', shouldSpin: true, spinDuration: '12s' },
]

const sparkles = [
  { size: 420, rotation: -14, className: 'size-8 text-blue-300/20', shouldOrbit: true, orbitDuration: '58s', shouldSpin: true, spinDuration: '12s' },
  { size: 550, rotation: 79, className: 'size-5 text-blue-300/20', shouldOrbit: true, orbitDuration: '58s', shouldSpin: true, spinDuration: '12s' },
  { size: 590, rotation: 178, className: 'size-10 text-blue-300/20', shouldOrbit: true, orbitDuration: '58s', shouldSpin: true, spinDuration: '12s' },
  { size: 710, rotation: 144, className: 'size-14 text-blue-300/20', shouldOrbit: true, orbitDuration: '58s', shouldSpin: true, spinDuration: '12s' },
  { size: 840, rotation: 60, className: 'size-14 text-blue-300/20', shouldOrbit: true, orbitDuration: '58s', shouldSpin: true, spinDuration: '12s' }
]

const dots = [
  { size: 520, rotation: -41, className: 'size-2 rounded-full bg-blue-300/20', shouldOrbit: true, orbitDuration: '60s', shouldSpin: false, spinDuration: '12s' },
  { size: 650, rotation: -165, className: 'size-2 rounded-full bg-blue-300/20', shouldOrbit: true, orbitDuration: '60s', shouldSpin: false, spinDuration: '12s' },
  { size: 720, rotation: 85, className: 'size-3 rounded-full bg-blue-300/20', shouldOrbit: true, orbitDuration: '60s', shouldSpin: false, spinDuration: '12s' },
  { size: 790, rotation: -5, className: 'size-2 rounded-full bg-blue-300/20', shouldOrbit: true, orbitDuration: '60s', shouldSpin: false, spinDuration: '12s' },
  { size: 820, rotation: -120, className: 'size-2 rounded-full bg-blue-300/20', shouldOrbit: true, orbitDuration: '60s', shouldSpin: false, spinDuration: '12s' }
]

export const HeroSection = () => {
  return (
    <section className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip' id='home'>
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] -z-10">

        <div className="absolute inset-0 -z-30 opacity-5" style={{
          backgroundImage: `url(${grainImage.src})`
        }} />

        <div className="size-[620px] hero-ring" />
        <div className="size-[820px] hero-ring" />
        <div className="size-[1020px] hero-ring" />
        <div className="size-[1220px] hero-ring" />

        {stars.map((star, index) => {
          return (
            <HeroOrbit
              size={star.size}
              rotation={star.rotation}
              key={index}
              shouldOrbit={star.shouldOrbit}
              orbitDuration={star.orbitDuration}
              shouldSpin={star.shouldSpin}
              spinDuration={star.spinDuration}
            >
              <StarIcon className={star.className} />
            </HeroOrbit>
          )
        })}

        {sparkles.map((sparkle, index) => {
          return (
            <HeroOrbit
              size={sparkle.size}
              rotation={sparkle.rotation}
              key={index}
              shouldOrbit={sparkle.shouldOrbit}
              orbitDuration={sparkle.orbitDuration}
              shouldSpin={sparkle.shouldSpin}
              spinDuration={sparkle.spinDuration}
            >
              <SparkleIcon className={sparkle.className} />
            </HeroOrbit>
          )
        })}

        {dots.map((dot, index) => {
          return (
            <HeroOrbit
              size={dot.size}
              rotation={dot.rotation}
              key={index}
              shouldOrbit={dot.shouldOrbit}
              orbitDuration={dot.orbitDuration}
              shouldSpin={dot.shouldSpin}
              spinDuration={dot.spinDuration}
            >
              <div className={`relative ${dot.className}`}>
                <div className={`absolute inset-0 ${dot.className} animate-ping-large`}></div>
              </div>
            </HeroOrbit>
          )
        })}

      </div>
      <div className="container">
        <div className='flex flex-col items-center'>
          <Memoji />
          <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
            <div className='bg-green-500 size-2.5 rounded-full relative'>
              <div className="bg-green-500 size-2.5 inset-0 rounded-full absolute animate-ping-large"></div>
            </div>
            <div className='text-sm font-medium'>RUTVIK PATEL</div>
          </div>
        </div>
        <div className='max-w-lg mx-auto'>
          <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'>
            Building Exceptional User Experiences
          </h1>
          <p className='mt-4 text-center text-white/60 md:text-lg'>
            I specialize in transforming designs into functional, high performing web application.
          </p>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
          <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
            <a href='#projects' className='font-semibold'>Explore My Work</a>
            <ArrowDown className='size-4' />
          </button>
          <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl'>
            <span>✉️</span>
            <a href='mailto:patelrutvik1702@gmail.com' className='font-semibold'>Get in touch</a>
          </button>
        </div>
      </div>
    </section>
  );
};
