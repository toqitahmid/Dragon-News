import MobileViewSocialPage from "../socials.jsx/mobileView/page";
import NavLink from "../../shared/NavLink";

const CetagoriesPage = ({ cetagories }) => {
  return (
    <div className="col-span-4 sm:col-span-3 md:col-span-3 bg-gray-50 min-h-[auto] sm:min-h-[60vh] md:min-h-[60vh] w-full p-2 sm:p-3 md:p-4 rounded-lg">
      {cetagories.map((cetagory) => (
        <div
          key={cetagory.category_id}
          className="py-1 sm:py-2 md:py-2 text-xs sm:text-sm md:text-base"
        >
          <NavLink href={`/cetagories/${cetagory.category_id}`}>
            {cetagory.category_name}
          </NavLink>
        </div>
      ))}
      <div className="md:hidden flex">
        <MobileViewSocialPage></MobileViewSocialPage>
      </div>
    </div>
  );
};

export default CetagoriesPage;
