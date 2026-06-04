const NewsPage = ({ newsCetagoryById }) => {
  return (
    <div className="col-span-8 sm:col-span-6 md:col-span-6 ml-0 sm:ml-5 md:ml-5 bg-white min-h-[60vh] p-3 sm:p-4 md:p-5 rounded-lg space-y-4">
      {newsCetagoryById?.map((news, index) => (
        <div
          key={news._id || index}
          className="border rounded-lg shadow-sm overflow-hidden hover:shadow-md transition"
        >
          {/* IMAGE */}
          <img
            src={news.thumbnail_url}
            alt={news.title}
            className="w-full h-48 object-cover"
          />

          {/* CONTENT */}
          <div className="p-4 space-y-2">
            {/* TITLE */}
            <h2 className="text-lg font-bold text-gray-800">{news.title}</h2>

            {/* AUTHOR + DATE */}
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <img
                src={news.author?.img}
                alt={news.author?.name}
                className="w-8 h-8 rounded-full"
              />
              <span>{news.author?.name}</span>
              <span>•</span>
              <span>{news.author?.published_date}</span>
            </div>

            {/* DETAILS */}
            <p className="text-sm text-gray-600 line-clamp-3">{news.details}</p>

            {/* FOOTER */}
            <div className="flex justify-between items-center text-sm mt-2">
              {/* Rating */}
              <div className="text-yellow-600 font-medium">
                ⭐ {news.rating?.number} ({news.rating?.badge})
              </div>

              {/* Views */}
              <div className="text-gray-500">👁 {news.total_view} views</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsPage;
