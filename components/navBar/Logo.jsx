'use client'

import Image from "next/image";

const Logo = () => {
    return (
        <Image
            className="hidden md:block cursor-pointer"
            src="/images/logo.png"
            alt="Picture of the author"
            width={100}
            height={100} />
    )
};

export default Logo;
