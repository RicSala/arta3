'use client'

import { useForm } from 'react-hook-form';



const ProfilePage = (props) => {

    const { register, handleSubmit, formState: { errors }, setValue, getValues, watch } = useForm({
        defaultValues: {
            name: '',
            bio: '',
            styles: '',
        }
    });


    return (
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2" >
            <h1 className="mb-8 text-3xl text-center">Profile</h1>

            {/* add a simple form */}
            <form className="bg-white px-6 py-8 rounded shadow-md text-black w-full" >
                <input
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="name"
                    placeholder="Name"
                    {...register('name', {
                        required: 'Este campo es requerido',
                        minLength: { value: 2, message: 'Mínimo 2 caracteres' }
                    })}
                />

                {/* input for bio */}
                <textarea
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="bio"
                    placeholder="Bio"
                    {...register('bio', {
                        required: 'Este campo es requerido',
                        minLength: { value: 2, message: 'Mínimo 2 caracteres' }
                    })}
                />

                {/* input for styles (as a string for now) */}
                <input
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="styles"
                    placeholder="Styles"
                    {...register('styles', {
                    })}
                />

            </form >
        </div >
    )
};



export default ProfilePage;