'use client'
import Image from 'next/image';
import memojiComputerImage from '@/assets/images/memoji-computer.png';
import memojiHiImage from '@/assets/images/memoji-hi.png';
import memojiUwuImage from '@/assets/images/memoji-uwu.png';
import memojiBlessedImage from '@/assets/images/memoji-blessed.png';
import memojiChefKissImage from '@/assets/images/memoji-chef-kiss.png';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const images = [memojiBlessedImage, memojiHiImage, memojiComputerImage, memojiUwuImage, memojiChefKissImage];

export const Memoji = () => {
    const [memojiIndex, setMemojiIndex] = useState(0);
    const controls = useAnimation();

    useEffect(() => {
        const interval = setInterval(() => {
            controls.start({ opacity: 0 }).then(() => {
            });
            const index = Math.floor(Math.random() * 5);
            setMemojiIndex(index);
            controls.start({ opacity: 1 });
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            key={memojiIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{
                opacity: { duration: 1 },
                scale: { duration: 1.2 },
                ease: 'easeInOut'
            }}
        >
            <Image
                src={images[memojiIndex]}
                className='size-[100px]'
                alt='Person peeking from behind laptop'
            />
        </motion.div>
    );
}