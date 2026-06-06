import CetagoriesPage from "@/app/components/news/cetagories/page";
import NewsPage from "@/app/components/news/newspage/page";
import SocialPage from "@/app/components/news/socials.jsx/page";
import {newsCetagories,newsCetagoriesById} from "@/lib/data"


const HomePage = async () => {
  const receivedNewsCetgories = await newsCetagories();
  const cetagories = receivedNewsCetgories.news_category;

  let id = null;

  for(let cetagory of cetagories){

    if(cetagory.category_name === "All News"){
      id = cetagory.category_id;
    }
  }

  
  const newsCetagoryById = await newsCetagoriesById(id);
  return (
    <div className="grid grid-cols-12 sm:grid-cols-12 md:grid-cols-12 lg:w-9/12 md:w-full sm:w-full w-full mx-auto my-10 gap-2 px-2 sm:px-4 md:px-6">
      <CetagoriesPage cetagories={cetagories}></CetagoriesPage>
      <NewsPage newsCetagoryById={newsCetagoryById}></NewsPage>
      <SocialPage></SocialPage>
    </div>
  );
};

export default HomePage;
