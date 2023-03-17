import { NextPage } from "next";
import dynamic from "next/dynamic";

const ListHotelsTemplate = dynamic(
  () => import("@templates/list-hotels/ListHotelsTemplate"),
  { ssr: false }
);

const ListHotels: NextPage = () => {
  return <ListHotelsTemplate />;
};

export default ListHotels;
