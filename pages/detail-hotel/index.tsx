import { NextPage } from "next";
import dynamic from "next/dynamic";

const DetailHotelTemplate = dynamic(
  () => import("@templates/detail-hotel/DetailHotelTemplate"),
  { ssr: false }
);

const DetailHotel: NextPage = () => {
  return <DetailHotelTemplate />;
};

export default DetailHotel;
