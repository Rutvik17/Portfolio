import memojiComputerImage from '@/assets/images/memoji-computer.png';
import memojiHiImage from '@/assets/images/memoji-hi.png';
import memojiUwuImage from '@/assets/images/memoji-uwu.png';
import memojiBlessedImage from '@/assets/images/memoji-blessed.png';
import memojiChefKissImage from '@/assets/images/memoji-chef-kiss.png';

import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import { HeroOrbit } from '@/components/HeroOrbit';
import SparkleIcon from '@/assets/icons/sparkle.svg';

const stars = [
  { size: 800, rotation: -72, className: 'size-28 text-blue-300' },
  { size: 550, rotation: 20, className: 'size-12 text-blue-300' },
  { size: 590, rotation: 98, className: 'size-8 text-blue-300' }
]

const sparkles = [
  { size: 430, rotation: -14, className: 'size-8 text-blue-300/20' },
  { size: 430, rotation: 79, className: 'size-5 text-blue-300/20' },
  { size: 530, rotation: 178, className: 'size-10 text-blue-300/20' },
  { size: 710, rotation: 144, className: 'size-14 text-blue-300/20' }
]

const dots = [
  { size: 720, rotation: 85, className: 'size-3 rounded-full bg-blue-300/20' },
  { size: 520, rotation: -41, className: 'size-2 rounded-full bg-blue-300/20' },
  { size: 650, rotation: -5, className: 'size-2 rounded-full bg-blue-300/20' }
]

const getMemojiImage = () => {
  const images = [memojiComputerImage, memojiHiImage, memojiUwuImage, memojiBlessedImage, memojiChefKissImage];
  const index = Math.floor(Math.random() * 5);
  return images[index];
}

export const HeroSection = () => {
  return (
    <section className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">

        <div className="absolute inset-0 -z-30 opacity-5" style={{
          backgroundImage: `url(${grainImage.src})`
        }} />

        <div className="size-[620px] hero-ring" />
        <div className="size-[820px] hero-ring" />
        <div className="size-[1020px] hero-ring" />
        <div className="size-[1220px] hero-ring" />

        {stars.map((star, index) => {
          return (
            <HeroOrbit size={star.size} rotation={star.rotation} key={index}>
              <StarIcon className={star.className} />
            </HeroOrbit>
          )
        })}

        {sparkles.map((sparkle, index) => {
          return (
            <HeroOrbit size={sparkle.size} rotation={sparkle.rotation} key={index}>
              <SparkleIcon className={sparkle.className} />
            </HeroOrbit>
          )
        })}

        {dots.map((dot, index) => {
          return (
            <HeroOrbit size={dot.size} rotation={dot.rotation} key={index}>
              <div className={dot.className} />
            </HeroOrbit>
          )
        })}

      </div>
      <div className="container">
        <div className='flex flex-col items-center'>
          <Image
            src={getMemojiImage()}
            className='size-[100px]'
            alt='Person peeking from behind laptop'
          />
          <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
            <div className='bg-green-500 size-2.5 rounded-full'></div>
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
            <span className='font-semibold'>Explore My Work</span>
            <ArrowDown className='size-4' />
          </button>
          <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl'>
            <span>✉️</span>
            <span className='font-semibold'>Get in touch</span>
          </button>
        </div>
      </div>
    </section>
  );
};
