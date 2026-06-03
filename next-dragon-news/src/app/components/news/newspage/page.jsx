const NewsPage = ({ newsCetagoryById }) => {
  return (
    <div className="col-span-8 sm:col-span-6 md:col-span-6 sm:ml-5 md:ml-5 ml-0 bg-amber-300 min-h-[60vh] p-3 sm:p-4 md:p-5 rounded-lg">
      <div>{
        newsCetagoryById.map((n,index) => (

          <div key={index}>
            {n.title}
          </div>
        ))
        }</div>
    </div>
  );
};

export default NewsPage;
