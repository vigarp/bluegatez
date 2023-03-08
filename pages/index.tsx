import { NextPage } from "next";
import dynamic from "next/dynamic";

const HomePageTemplate = dynamic(
  () => import("@templates/home/HomePageTemplate"),
  { ssr: false }
);

const HomePage: NextPage = () => {
  return <HomePageTemplate />;
};

export default HomePage;
