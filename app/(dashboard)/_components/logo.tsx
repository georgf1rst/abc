import Image from "next/image";


export const Logo = () => {
    return(
        <Image className="hidden md:flex"
            height={160}
            width={170}
            alt="logo"
            src="/logoo.png"
        />
    )
}