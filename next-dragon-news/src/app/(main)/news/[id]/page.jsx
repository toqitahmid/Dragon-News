import Link from "next/link";
import { getNewsById } from "@/lib/data";
// -----------------------------------------------
// -----------------------------------------------
const formatDate = (dateStr) => {
  if (!dateStr) return "Date not available";
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// -----------------------------------------------
// -----------------------------------------------
const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;

  const news = await getNewsById(id);

  if (!news) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold">News Not Found</h1>
        <Link href="/" className="text-blue-500 underline mt-4 block">
          Back to Home
        </Link>
      </div>
    );
  }

  // -----------------------------------------------
  // -----------------------------------------------
  return (
    <div className="max-w-4xl mx-auto my-10 px-4">
      <Link href="/" className="text-blue-600 font-semibold mb-6 block">
        ← Back to Home
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {news.image_url && (
          <img
            src={news.image_url}
            alt={news.title}
            className="w-full h-80 object-cover"
          />
        )}

        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {news.title}
          </h1>

          <div className="flex gap-2 mb-4">
            {news.others_info?.is_trending && (
              <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full">
                🔥 Trending
              </span>
            )}
            {news.others_info?.is_todays_pick && (
              <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                ⭐ Today's Pick
              </span>
            )}
          </div>

          <div className="flex items-center gap-3 mb-6 p-4 bg-blue-50 rounded-lg">
            {news.author?.img ? (
              <img
                src={news.author.img}
                alt={news.author.name}
                className="w-12 h-12 rounded-full object-cover"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-blue-300 flex items-center justify-center text-white font-bold">
                👤
              </div>
            )}
            <div>
              <p className="font-bold text-gray-900">
                {news.author?.name || "Unknown Author"}
              </p>
              <p className="text-sm text-gray-500">
                {formatDate(news.author?.published_date)}
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Article Details</h2>
            <p className="text-gray-700 leading-relaxed">
              {news.details || "No content available."}
            </p>
          </div>

          <div className="flex gap-6 mb-6 p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="text-sm text-gray-500">⭐ Rating</p>
              <p className="text-2xl font-bold text-yellow-500">
                {news.rating?.number || 0}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">👁️ Total Views</p>
              <p className="text-2xl font-bold text-gray-900">
                {news.total_view || 0}
              </p>
            </div>
          </div>

          {news.category_id && (
            <Link
              href={`/cetagories/${news.category_id}`}
              className="inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg"
            >
              View more from this category →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
