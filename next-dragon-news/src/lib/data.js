export async function newsCetagories(){
  try {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/news/categories`
    );
    const json = await res.json();
    return json.data;
  } catch (error) {
    throw new Error("Server falid to fetching!");
  }
};

export async function newsCetagoriesById(cetagoryId){
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

export async function getNewsById(newsId) {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${newsId}`,
    { cache: "no-store" },
  );
  const json = await res.json();

  return json.data[0];
};