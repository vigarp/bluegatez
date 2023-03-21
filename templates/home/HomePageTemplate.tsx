import { Skeleton } from "@mantine/core";
import dynamic from "next/dynamic";

// components
const Layout = dynamic(() => import("@components/global/Layout"), {
  ssr: false,
});
const AppContainer = dynamic(
  () => import("@components/atoms/containers/AppContainer"),
  { ssr: false }
);
const AppCarousel = dynamic(
  () => import("@components/organisms/carousels/AppCarousel"),
  { ssr: false, loading: () => <Skeleton height={400} width="100%" my="md" /> }
);
const SearchFilter = dynamic(
  () => import("@components/organisms/searchfilter/SearchFilter"),
  { ssr: false, loading: () => <Skeleton height={100} width="100%" my="md" /> }
);
const PromoSection = dynamic(
  () => import("@components/organisms/sections/PromoSection"),
  { ssr: false, loading: () => <Skeleton height={100} width="100%" my="md" /> }
);

const HomePageTemplate: React.FC = () => {
  const dataBanner = [
    {
      id: 1,
      link: "#",
      url: "https://res.cloudinary.com/vigarp/image/upload/v1678283862/samples/banner1_klna66.jpg",
      width: 900,
      height: 300,
    },
    {
      id: 2,
      link: "#",
      url: "https://res.cloudinary.com/vigarp/image/upload/v1678283863/samples/banner2_b1cxi8.jpg",
      width: 900,
      height: 300,
    },
    {
      id: 3,
      link: "#",
      url: "https://res.cloudinary.com/vigarp/image/upload/v1678283862/samples/banner3_kkrrxo.jpg",
      width: 900,
      height: 300,
    },
  ];
  return (
    <Layout>
      <AppContainer mih="150vh" size="xl" py="xl">
        <AppCarousel content={dataBanner} />
        <SearchFilter />

        {/* promo section */}
        <PromoSection />
      </AppContainer>
    </Layout>
  );
};

export default HomePageTemplate;
