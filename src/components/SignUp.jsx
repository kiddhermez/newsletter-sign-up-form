import DesktopImg from '@/components/images/DesktopImg.svg';
import MobileImg from '@/components/images/MobileImg.svg';
import Image from 'next/image';
import Feature from './Feature';
import Form from './Form';

const SignUp = ({ setEmail, isMobile }) => {
    return (
        <>
            <section className='h-auto w-full overflow-hidden rounded-b-2xl md:grid md:h-[70vh] md:w-[50%] md:content-center md:justify-center md:rounded-2xl'>
                <Image
                    alt='image'
                    src={isMobile ? MobileImg : DesktopImg}
                    className='w-screen'
                />
            </section>

            <section className='grid h-[55%] justify-between gap-5 p-8 text-[--DarkSlateGrey] md:h-[70vh]'>
                <h1 className='text-4xl font-bold'>Stay Updated!</h1>
                <h2 className='text-md'>
                    Join 60,000+ product manager receiving monthly updates on:
                </h2>
                <div className='grid gap-3'>
                    <Feature text='Product discovery and building whatt matters' />
                    <Feature text='Measuring to ensure updates are a success' />
                    <Feature text='And much more!' />
                </div>
                <Form setEmail={setEmail} />
            </section>
        </>
    );
};

export default SignUp;
