import ListIcon from '@/components/images/ListIcon';

const Feature = (props) => {
    return (
        <p className='text-md flex gap-3'>
            <ListIcon width={28} />
            {props.text}
        </p>
    );
};

export default Feature;
