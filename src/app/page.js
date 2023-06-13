'use client';

import SignUp from '@/components/SignUp';
import Success from '@/components/Success';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
    const [email, setEmail] = useState('');
    const isMobile = window.innerWidth <= 768;

    return (
        <main className='flex h-screen w-screen items-center justify-center bg-[--CharcoalGrey]'>
            <motion.article
                className='h-screen w-screen bg-white md:flex md:h-fit md:w-[70%] md:flex-row-reverse md:justify-between md:rounded-3xl md:p-5'
                animate={{
                    width: isMobile ? '100vw' : email ? '40%' : '70%',
                }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
                {email ? (
                    <Success email={email} />
                ) : (
                    <SignUp setEmail={setEmail} />
                )}
            </motion.article>
        </main>
    );
}
