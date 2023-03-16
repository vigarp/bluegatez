import AppContainer from "@components/atoms/containers/AppContainer";
import Layout from "@components/global/Layout";
import AsideFilter from "@components/organisms/asidefilter";
import { NextPage } from "next";
import { useRouter } from "next/router";

const FilteredHotels: NextPage = () => {
  const router = useRouter();
  const { country, city } = router.query;

  console.log("====================================");
  console.log(router.query);
  console.log("====================================");
  return (
    <Layout title="Filter Hotels - Blue Gatez">
      <AppContainer py="xl">
        <AsideFilter />
      </AppContainer>
    </Layout>
  );
};

export default FilteredHotels;
