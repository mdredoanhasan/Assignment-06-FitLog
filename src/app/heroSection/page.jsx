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
    <div className="container mx-auto mt-30 mb-30">
      <h2 className="font-bold text-4xl mb-2">THE LIBRARY</h2>
      <p className="mb-12 opacity-60">Twelve lifts covering every major muscle group.</p>
      <ul className="grid grid-cols-3 gap-8 ">
        {fitLogData.map((fitlog) => {
          return <FitLogCard key={fitlog.id} fitlog={fitlog}></FitLogCard>;
        })}
      </ul>
    </div>
  );
};

export default HeroSection;
