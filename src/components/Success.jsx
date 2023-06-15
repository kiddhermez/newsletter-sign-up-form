import SuccessIcon from '@/components/images/SuccessIcon';
import Submit from './Submit';
import { motion } from 'framer-motion';

const Success = ({ email }) => {
    return (
        <motion.div
            className='flex h-full flex-col justify-evenly gap-7 p-10'
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            transition={{ delay: 0.3, duration: 0.5, ease: 'easeInOut' }}
        >
            <SuccessIcon />
            <h1 className='text-5xl font-bold'>Thanks for subscribing!</h1>
            <p>
                A confirmation has been sent to <b>{email}</b>. Please open it
                and click the button inside to confirm your subscription
            </p>
            <Submit onClick={() => location.reload()} text='Dimiss message' />
        </motion.div>
    );
};

export default Success;
