import Layout from "@components/global/Layout";
import { NextPage } from "next";
import dynamic from "next/dynamic";

const AppContainer = dynamic(
  () => import("@components/atoms/containers/AppContainer"),
  {
    ssr: false,
  }
);

const AsideFilter = dynamic(() => import("@components/organisms/asidefilter"), {
  ssr: false,
});

const FilteredHotels: NextPage = () => {
  return (
    <Layout title="Filter Hotels - Blue Gatez">
      <AppContainer py="xl">
        <AsideFilter />
      </AppContainer>
    </Layout>
  );
};

export default FilteredHotels;
