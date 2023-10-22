import fetchDataFromStrapi from "../api/fetchDataFromStrapi";
import config from "../config";
const Introduction = async () => {
  const introData = await fetchDataFromStrapi("/api/description");
  const { title, p } = introData.attributes;
  return (
    <div className="flex flex-col md:flex-row  justify-between items-center my-10 w-11/12  mx-auto border-r-4 md:border-l-8 md:border-r-0 md:pr-0 md:pl-24 bg-slate-50 px-4 border-primary">
      <p className="md:w-[30vw] text-primary  whitespace-pre-line leading-7 md:leading-8 py-8 text-xl">
        <span className="text-6xl font-handwrite">{title} </span>
        {p[0].children[0].text}
      </p>
      <div className="relative">
        <img
          src={`https://res.cloudinary.com/danit332d/image/upload/v1697899347/door.jpg`}
          alt={"main-img"}
          className="w-3/4 ml-auto h-[55vh] md:w-[31vw] md:h-[75vh] scale-90 md:right-20 lg:right-32 object-cover relative z-10 border-[12px] border-slate-50"
        />
        <img
          src={`https://res.cloudinary.com/danit332d/image/upload/v1697810632/clean-beach.jpg`}
          alt={"second-img"}
          className=" h-[55vh]  md:h-[75vh] object-cover absolute left-0 md:left-auto md:right-0 top-0 bottom-0"
        />
      </div>
    </div>
  );
};

export default Introduction;
