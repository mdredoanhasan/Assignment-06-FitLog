import DetailClient from "./detailClient";


const getdata = async (fitlogId) => {
  const response = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${fitlogId}`,
  );
  const data = await response.json();
  return data;
};

const DetailPage = async ({ params }) => {
  const { fitlogId } = await params;
  const fitCard = await getdata(fitlogId);

  if (!fitCard) {
    return <div>Card not found</div>;
  }
  
  return (
   <DetailClient fitCard={fitCard}></DetailClient>
  );
};

export default DetailPage;
