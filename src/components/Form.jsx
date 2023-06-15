import React from 'react';
import { useForm } from 'react-hook-form';
import Submit from './Submit';

const Form = ({ setEmail }) => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        setEmail(data.email);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='mt-5 flex flex-col gap-3'
        >
            <div className='flex justify-between text-sm font-bold'>
                <p>Email address</p>
                {errors.email && (
                    <p className='text-[--Tomato]'>{errors.email.message}</p>
                )}
            </div>
            <input
                type='text'
                name='email'
                {...register('email', {
                    required: 'This field is required',
                    pattern: {
                        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: 'Write a valid email',
                    },
                })}
                autoComplete='off'
                placeholder='email@company.com'
                className={`cursor-pointer rounded-lg border-[1px] border-solid border-[--Grey] p-3 outline-none ${
                    errors.email &&
                    'border-[--Tomato] bg-[#FFE9E7] text-[--Tomato] placeholder:text-[--Tomato]'
                }`}
            ></input>
            <Submit text='Subscribe to monthly newsletter' />
        </form>
    );
};

export default Form;
