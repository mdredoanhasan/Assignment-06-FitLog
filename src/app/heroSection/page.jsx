import FitLogCard from "../components/fitLogCard";

const getdata = async () => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await response.json();
  console.log(data);
  return data;
};

const HeroSection = async () => {
  const fitLogData = await getdata();
  return (
    <div className="container mx-auto mt-12 mb-20 px-4 md:mt-20 md:px-6 lg:mt-30">
      <h2 className="mb-2 text-3xl font-bold md:text-4xl">THE LIBRARY</h2>
      <p className="mb-8 opacity-60 md:mb-12">
        Twelve lifts covering every major muscle group.
      </p>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {fitLogData.map((fitlog) => {
          return <FitLogCard key={fitlog.id} fitlog={fitlog}></FitLogCard>;
        })}
      </ul>
    </div>
  );
};

export default HeroSection;
