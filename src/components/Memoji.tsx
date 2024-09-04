'use client'
import Image from 'next/image';
import memojiComputerImage from '@/assets/images/memoji-computer.png';
import memojiHiImage from '@/assets/images/memoji-hi.png';
import memojiUwuImage from '@/assets/images/memoji-uwu.png';
import memojiBlessedImage from '@/assets/images/memoji-blessed.png';
import memojiChefKissImage from '@/assets/images/memoji-chef-kiss.png';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const images = [memojiBlessedImage, memojiHiImage, memojiComputerImage, memojiUwuImage, memojiChefKissImage];

export const Memoji = () => {
    const [memojiIndex, setMemojiIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const index = Math.floor(Math.random() * 5);
            setMemojiIndex(index);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            key={memojiIndex}
            initial={{ opacity: 0.2, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.2, scale: 1.2 }}
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