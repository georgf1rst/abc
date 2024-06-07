import Image from "next/image";


export const Logo = () => {
    return(
        <Image className="hidden md:flex"
            height={120}
            width={160}
            alt="logo"
            src="/logo.svg"
        />
    )
}