'use client'

import { useState } from "react";
import { useForm } from "react-hook-form";
import { isEmail } from "../utils/validations";
import axios from 'axios';

export function ProfileForm({ user }) {

    const [showError, setShowError] = useState(false);
    const [error, setError] = useState(false); // TODO: why do need this?


    const { register, handleSubmit, formState: { errors }, setValue, getValues, watch } = useForm({
        defaultValues: {
            name: user.name || '',
            email: user.email || '',
            city: user.city || '',
            tags: user.tags.join(', ') || '',
            style: user.styles.join(', ') || '',
            password: user.password || '',
            confirmPassword: user.confirmPassword || '',
            bio: user.bio || '',
        }
    });

    const onSubmitForm = async (formData) => {

        // send a put request to the api with axios to update the user
        try {

            const res = await axios.put(`/api/users/${user._id}`, formData);

        } catch (error) {

            console.log(error);

        }

    }

    return (

        <form className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 min-h-screen"

            onSubmit={handleSubmit(onSubmitForm)}
        >

            {showError && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Error!</strong>
                <span className="block sm:inline"> {error}</span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <title>Close</title>
                </span>
            </div>}

            {/* register form with name, email and password */}
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 className="mb-8 text-3xl text-center">Profile Page</h1>
                {/* show small error message */}
                <span className="text-red-500 text-xs italic">{errors.name && errors.name.message}</span>
                <input
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="name"
                    placeholder="Name"
                    {...register('name', {
                        required: 'Este campo es requerido',
                        minLength: { value: 6, message: 'Mínimo 6 caracteres' }
                    })} />
                <span className="text-red-500 text-xs italic">{errors.email && errors.email.message}</span>
                <input
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="email"
                    placeholder="Email"
                    {...register('email', {
                        required: 'Este campo es requerido',
                        minLength: {
                            value: 8, message: 'Mínimo 8 caracteres',
                        },
                        validate: isEmail
                    })} />
                <span className="text-red-500 text-xs italic">{errors.city && errors.city.message}</span>
                <input
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="city"
                    placeholder="Ciudad habitual"
                    {...register('city', {
                        required: 'Este campo es requerido',
                        minLength: {
                            value: 3, message: 'Mínimo 3 caracteres',
                        },
                    })} />

                <span className="text-red-500 text-xs italic">{errors.style && errors.style.message}</span>
                <input
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="style"
                    placeholder="Estilo de tatuaje"
                    {...register('style', {
                        // required: 'Este campo es requerido',
                        // minLength: {
                        //     value: 3, message: 'Mínimo 3 caracteres',
                        // },
                    })} />
                <span className="text-red-500 text-xs italic">{errors.tags && errors.tags.message}</span>
                <input
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="tags"
                    placeholder="#hashtags"
                    {...register('tags', {
                        // required: 'Este campo es requerido',
                        // minLength: {
                        //     value: 3, message: 'Mínimo 3 caracteres',
                        // },
                    })} />

                {/* textare for the bio */}
                <textarea
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="bio"
                    placeholder="Bio"
                    {...register('bio', {
                        // required: 'Este campo es requerido',
                        // minLength: {
                        //     value: 3, message: 'Mínimo 3 caracteres',
                        // },
                    })} />



                <span className="text-black text-xs italic">Change your password</span>
                {/* divider thick line*/}
                <hr className="mb-4 border-t border-black" />


                <span className="text-red-500 text-xs italic">{errors.password && errors.password.message}</span>
                <input
                    type="password"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="password"
                    placeholder="Password"
                    {...register('password', {
                        required: 'Este campo es requerido',
                        minLength: { value: 8, message: 'Mínimo 8 caracteres' }
                    })} />

                <span className="text-red-500 text-xs italic">{errors.confirmPassword && errors.confirmPassword.message}</span>
                <input
                    type="password"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="confirmPassword"
                    placeholder="confirmPassword"
                    {...register('confirmPassword', {
                        required: 'Este campo es requerido',
                        minLength: { value: 8, message: 'Mínimo 8 caracteres' },
                        validate: {
                            matchesPreviousPassword: (value) => {
                                const { password } = getValues();
                                return password === value || 'Las contraseñas no coinciden';
                            }
                        }

                    })} />

                <button
                    type="submit"
                    className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
                >Create Account</button>
            </div>

        </form>
    )

}