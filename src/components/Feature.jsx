import ListIcon from '@/components/images/ListIcon';

const Feature = ({ text }) => {
    return (
        <p className='text-md flex gap-3'>
            <ListIcon width={28} />
            {text}
        </p>
    );
};

export default Feature;
