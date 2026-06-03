import Image from "next/image";
import Link from "next/link";
import userLogo from '../../../assets/user.png'
import NavLink from "./NavLink";

const Navbar = () => {
    return (
        <div className="lg:w-9/12 md:w-10/12 w-11/12 mx-auto mt-5 bg-gray-50 rounded-md p-1">
        <div className="flex justify-between items-center">
            <div className="sm:flex hidden"></div>
            <div className=" flex gap-2">
                <NavLink href='/'>Home</NavLink>
                <NavLink href='/about'>About</NavLink>
                <NavLink href='/career'>Career</NavLink>
            </div>
            <div className="flex items-center gap-2">
                <Image src={userLogo}
                alt="user"
                width={30}
                height={30}
                ></Image>
                <Link className="bg-purple-500 px-2 py-1 rounded-sm text-white font-semibold" href='/login'>Log In</Link>
            </div>
        </div>
        </div>
    );
};

export default Navbar;