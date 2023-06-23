'use client'

import { createContext } from "react";
import { useEffect, useReducer } from 'react';
import Cookies from 'js-cookie';
// import axios from 'axios';

import { useRouter } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react';
import { authReducer } from "./authReducer";



export const AuthContext = createContext()


const AUTH_INITIAL_STATE = {
    isLoggedIn: false,
    user: undefined, // When we load the app, we don't know the user
};

export const AuthProvider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);

    const { data, status } = useSession()

    useEffect(() => {

        if (status === 'authenticated') {
            dispatch({ type: '[AUTH] - Login', payload: data?.user });
        }
    }, [status, data])


    // const registerUser = async ({ name, email, city, password, confirmPassword }) => {


    //     try {
    //         const resp = await fetch('http://localhost:3000/api/signup', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'

    //             },
    //             body: JSON.stringify({ name, email, city, password, confirmPassword })
    //         })

    //         const data = await resp.json()

    //         if (data.status === 'ERROR') {
    //             return {
    //                 hasError: true,
    //                 error: data.error
    //             }
    //         }

    //         const { token, user } = data;
    //         // Save token in cookies
    //         Cookies.set('token', token);
    //         // Save user in state
    //         dispatch({ type: '[AUTH] - Login', payload: user });
    //         // return true
    //         return {
    //             hasError: false,
    //         }

    //     } catch (error) {
    //         // if (axios.isAxiosError(error)) { // here we do want to give the user the error message
    //         //     return {
    //         //         hasError: true,
    //         //         error: error.response?.data.error
    //         //     }
    //         // }
    //         return {
    //             hasError: true,
    //             error: 'Ha ocurrido un error inesperado'
    //         }
    //     }

    // }


    const logoutUser = () => {
        Cookies.remove('productsInCart');
        Cookies.remove('address');
        signOut()
        // router.reload(); // reload the page to update the state instead of dispatching an action (as we removed the cookies, we don't have the user anymore)
    }



    // We return the state and the methods so we can use them in the components
    return (
        <AuthContext.Provider value={{
            ...state,

            // methods
            // registerUser, // REVIEW: Prefer to do it from the modal
            logoutUser,
        }}>
            {children}
        </AuthContext.Provider>
    );
};
