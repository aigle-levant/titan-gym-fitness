// libraries
import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Name" {...register("Name", {required: true, min: 1})} />
            <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
            <input type="tel" placeholder="Phone" {...register} />
            <textarea {...register} />

            <input type="submit" className='btn form-btn'/>
        </form>
    );
}