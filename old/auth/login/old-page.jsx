// 'use client'

// import { useForm } from 'react-hook-form';
// import { isEmail } from '../../../utils/validations';
// import { useContext, useState } from 'react';
// import { useRouter } from 'next/navigation'

// import { getSession, signIn } from "next-auth/react";
// import { AuthContext } from '../../../contexts/auth/AuthProvider';




// const LoginPage = (props) => {


//     const router = useRouter();
//     const [showError, setShowError] = useState(false);
//     const [error, setError] = useState(false); // TODO: why do need this?


//     const { registerUser } = useContext(AuthContext);


//     const { register, handleSubmit, formState: { errors }, setValue, getValues, watch } = useForm({
//         defaultValues: {
//             email: 'ricardo@google.com',
//             password: '88888888',
//         }
//     });

//     const onSubmitForm = async (formData) => {

//         const { email, password } = formData;

//         setShowError(false);

//         const res = await signIn('credentials', {
//             email,
//             password,
//             redirect: false,
//             // callbackUrl: 'http://localhost:3000/tatuadores'
//         });

//         if (res?.error) {

//             setShowError(true);
//             setError("Credenciales incorrectas");
//             setTimeout(() => { setShowError(false) }, 3000);
//         } else {
//             router.push('/tatuadores');
//         }
//     }

//     return (


//         <form className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 min-h-screen"

//             onSubmit={handleSubmit(onSubmitForm)}
//         >

//             {showError && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"

//                 role="alert">
//                 <strong className="font-bold">Error!</strong>
//                 <span className="block sm:inline"> {error}</span>
//                 <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
//                     <title>Close</title>
//                 </span>
//             </div>}

//             {/* register form with name, email and password */}
//             <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
//                 <h1 className="mb-8 text-3xl text-center">Login</h1>
//                 {/* show small error message */}
//                 <span className="text-red-500 text-xs italic">{errors.email && errors.email.message}</span>
//                 <input
//                     type="text"
//                     className="block border border-grey-light w-full p-3 rounded mb-4"
//                     name="email"
//                     placeholder="Email"
//                     {...register('email', {
//                         required: 'Este campo es requerido',
//                         minLength: {
//                             value: 8, message: 'Mínimo 8 caracteres',
//                         },
//                         validate: isEmail
//                     })} />
//                 <span className="text-red-500 text-xs italic">{errors.password && errors.password.message}</span>
//                 <input
//                     type="password"
//                     className="block border border-grey-light w-full p-3 rounded mb-4"
//                     name="password"
//                     placeholder="Password"
//                     {...register('password', {
//                         required: 'Este campo es requerido',
//                         minLength: { value: 8, message: 'Mínimo 8 caracteres' }
//                     })} />
//                 <button
//                     type="submit"
//                     className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
//                 >Login</button>
//             </div>

//         </form>

//     )




// };


// export default LoginPage;