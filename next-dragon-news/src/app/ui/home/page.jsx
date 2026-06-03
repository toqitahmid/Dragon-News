import CetagoriesPage from "@/app/components/news/cetagories/page";
import NewsPage from "@/app/components/news/newspage/page";
import SocialPage from "@/app/components/news/socials.jsx/page";

const newsCetagories = async () => {
  try {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/news/categories`,
    );
    const json = await res.json();
    return json.data;
  } catch (error) {
    throw new Error("Server falid to fetching!");
  }
};
const newsCetagoriesById = async (cetagoryId) => {
  try {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/news/category/${cetagoryId}`,
    );
    const json = await res.json();
    return json.data;
  } catch (error) {
    throw new Error("Server falid to fetching!");
  }
};

const HomePage = async () => {
  const receivedNewsCetgories = await newsCetagories();
  const cetagories = receivedNewsCetgories.news_category;
  const newsCetagoryById = await newsCetagoriesById("01");
  return (
    <div className="grid grid-cols-12 sm:grid-cols-12 md:grid-cols-12 lg:w-9/12 md:w-full sm:w-full w-full mx-auto my-10 gap-2 px-2 sm:px-4 md:px-6">
      <CetagoriesPage cetagories={cetagories}></CetagoriesPage>
      <NewsPage newsCetagoryById={newsCetagoryById}></NewsPage>
      <SocialPage></SocialPage>
    </div>
  );
};

export default HomePage;
