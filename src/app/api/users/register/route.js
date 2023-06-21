import { NextResponse } from "next/server";
import User from "../../../../../models/User";
import { connect, disconnect } from "../../../../../database/db";
import { isValidEmail } from "../../../../../utils/validations";

export async function GET(req) {

    // console.log({ method: req.method, url: req.url })

    return NextResponse.json({ count: 100 });

}

export async function POST(req) {

    const { name, email, city, password, confirmPassword } = await req.json()

    const user = {
        name,
        email,
        city,
        password,
        confirmPassword
    }

    // VALIDATIONS ##############################
    if (password.length < 8) {
        await disconnect(); // TODO is this correct? We are disconnecting before we even connect
        return NextResponse.json({ status: 'ERROR', error: 'La contraseña debe tener al menos 6 caracteres' });
    }

    if (name.length < 3) {
        await disconnect();
        return NextResponse.json({ status: 'ERROR', error: 'El nombre debe tener al menos 3 caracteres' });
    }

    if (!isValidEmail(email)) {
        await disconnect();
        return NextResponse.json({ status: 'ERROR', error: 'El email no es válido' });
    }

    if (city.length < 3) {
        await disconnect();
        return NextResponse.json({ status: 'ERROR', error: 'La ciudad debe tener al menos 3 caracteres' });
    }

    if (password !== confirmPassword) {
        await disconnect();
        return NextResponse.json({ status: 'ERROR', error: 'Las contraseñas no coinciden' });
    }




    console.log(user)




    connect();

    // check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        await disconnect();
        return NextResponse.json({ status: 'ERROR', error: 'No ha sido posible realizar el registro - USUARIO' });
    }

    // if it doesn't exist, create it
    const newUser = new User({
        name,
        email: email.toLowerCase(),
        city,
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
        return NextResponse.json({ status: 'ERROR', error: 'No ha sido posible realizar el registro - ERROR ON SAVE' });
    }



    disconnect();

    return NextResponse.json({
        user: newUser
        // user: registeredUser
    });

}