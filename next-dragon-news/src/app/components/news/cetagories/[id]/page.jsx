const getNewsByCategoryId = async (categoryId) => {
  try {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/news/category/${categoryId}`,
      { cache: "no-store" },
    );
    const json = await res.json();
    return json.data;
  } catch (error) {
    throw new Error("Failed to fetch news!");
  }
};

const CategoryNewsPage = async ({ params }) => {
  const { id } = params;
  const newsByCategory = await getNewsByCategoryId(id);

  return (
    <div className="grid grid-cols-12 gap-4 lg:w-9/12 md:w-full sm:w-full w-full mx-auto my-10 px-2 sm:px-4 md:px-6">
      <div className="col-span-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          Category News
        </h1>
        {newsByCategory && newsByCategory.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
            {newsByCategory.map((news) => (
              <div
                key={news._id}
                className="bg-white rounded-lg shadow-md p-4 sm:p-5 md:p-6 hover:shadow-lg transition-shadow"
              >
                <img
                  src={news.image_url}
                  alt={news.title}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg mb-4"
                />
                <h2 className="text-base sm:text-lg md:text-xl font-bold mb-2 line-clamp-2">
                  {news.title}
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 line-clamp-3">
                  {news.details}
                </p>
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="font-semibold">{news.author.name}</span>
                  <span className="text-gray-500">
                    {new Date(news.published_date).toLocaleDateString()}
                  </span>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-yellow-500">★</span>
                  <span className="text-sm font-semibold">
                    {news.rating?.number || 0}
                  </span>
                  <span className="text-xs text-gray-500">
                    ({news.total_view || 0} views)
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-lg text-gray-500">
              No news found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryNewsPage;
