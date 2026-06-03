import Marquee from "react-fast-marquee";

const newses = [
  { id: "1", title: "Breking news: New Policy Announced by the Goverment" },
  { id: "2", title: "Breking news: Sport Teams Wins Championship" },
  { id: "3", title: "Breking news: Shakib Al Hasan is coming back" },
];

const MarqueeComponent = () => {
  return (
    <div className="lg:w-9/12 md:w-10/12 w-11/12 mx-auto mt-10">
    <div className="flex bg-pink-100 p-2 rounded-md">
      <div className="bg-pink-400 whitespace-nowrap text-white p-2 rounded-sm">
        Latest News
      </div>
      <Marquee pauseOnHover={true}>
        {newses.map((news) => (
          <span key={news.id} className="px-8">
            {news.title}
          </span>
        ))}
      </Marquee>
    </div>
    </div>
  );
};

export default MarqueeComponent;
