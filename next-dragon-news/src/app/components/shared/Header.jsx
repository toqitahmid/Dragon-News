import Image from "next/image";
import { format } from "date-fns";
import logo from "@/assets/logo.png"

const Header = () => {
    return (
      <div className="flex flex-col items-center justify-center">
        <Image
          src={logo}
          alt="header logo"
          width={400}
          height={200}
          loading="eager"
          className="p-5"
        ></Image>
        <h2 className="opacity-60 font-semibold">
          Journalism Without Fear or Favour
        </h2>
        <p className="font-semibold">{format(new Date(), "EEE yyyy-MMM-dd")}</p>
      </div>
    );
};

export default Header;