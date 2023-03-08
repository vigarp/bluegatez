import dynamic from "next/dynamic";

// components
const Layout = dynamic(() => import("@components/global/Layout"), {
  ssr: false,
});
const AppContainer = dynamic(
  () => import("@components/atoms/containers/AppContainer"),
  { ssr: false }
);

const HomePageTemplate: React.FC = () => {
  return (
    <Layout>
      <AppContainer mih="150vh" size="xl" py="xl">
        <div>b</div>
      </AppContainer>
    </Layout>
  );
};

export default HomePageTemplate;
