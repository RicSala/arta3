import bcrypt from 'bcryptjs';
import User from '../../../../models/User';
import { NextResponse } from 'next/server';
import { isValidEmail } from '../../../../utils/validations';
import { connect, disconnect } from '../../../../database/db';


export async function GET(req) {

    // console.log({ method: req.method, url: req.url })

    return NextResponse.json({ count: 100 });

}

export async function POST(req) {

    const { name, email, city, password, confirmPassword } = await req.json()

    const user = {
        name,
        email,
        city: 'Pending',
        password,
        confirmPassword
    }

    console.log({ user })


    // VALIDATIONS ##############################
    if (password.length < 8) {
        await disconnect(); // TODO is this correct? We are disconnecting before we even connect
        return NextResponse.json({ error: 'La contraseña debe tener al menos 8 caracteres' }, { status: '400', })
    }

    if (name.length < 3) {
        await disconnect();
        return NextResponse.json({ error: 'El nombre debe tener al menos 3 caracteres' }, { status: '400', })
    }

    if (!isValidEmail(email)) {
        await disconnect();
        return NextResponse.json({ error: 'Por favor, introduce un email válido' }, { status: '400', })
    }

    // if (city.length < 3) {
    //     await disconnect();
    //     return NextResponse.json({ status: 'ERROR', error: 'La ciudad debe tener al menos 3 caracteres' });
    // }

    // if (password !== confirmPassword) {
    //     await disconnect();
    //     return NextResponse.json({ status: 'ERROR', error: 'Las contraseñas no coinciden' });
    // }

    connect();

    // check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        await disconnect();
        return NextResponse.json({ error: 'No ha sido posible realizar el registro - USUARIO' }, { status: '500', })
    }

    // if it doesn't exist, create it
    const newUser = new User({
        name,
        email: email.toLowerCase(),
        city: 'Pending',
        role: 'user',
        password,
        confirmPassword
        // password: bcrypt.hashSync(password) // TODO: For now we are not going to encrypt the password
    });

    try {
        await newUser.save(
            {
                // validateBeforeSave: true, //TODO check what is this
            }
        );

        await disconnect();

    } catch (error) {
        console.log("Error while saving new user", error);
        await disconnect();
        return NextResponse.json({ error: 'No ha sido posible realizar el registro - ERROR ON SAVE' }, { status: '500', });
    }



    disconnect();

    return NextResponse.json({
        user: newUser
        // user: registeredUser
    });

}