import { Button } from "@heroui/react";
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center sm:text-5xl text-2xl font-bold text-fuchsia-500 space-y-3">
            <h1>Page Not Found :)</h1>
            <Link
            href='/'>
            <Button variant="secondary" className='text-fuchsia-500'>Home</Button>
            </Link>
        </div>
    );
};

export default NotFound;