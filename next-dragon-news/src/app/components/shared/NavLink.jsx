"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({href, children}) => {

    const pathname = usePathname();
    const isActive = href === pathname;
    return (
        <Link className={`${isActive? "border-b-2 border-b-purple-500" : ""}`} href={href}
        
        >
            {children}
        </Link>
    );
};

export default NavLink;