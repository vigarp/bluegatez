import dynamic from "next/dynamic";
import Layout from "@components/global/Layout";
import { Divider, Grid } from "@mantine/core";
import OrderBookingCard from "@components/organisms/sections/detail-hotel/OrderBookingCard";
import DetailHotelAddress from "@components/organisms/sections/detail-hotel/DetailHotelAddress";

const AppContainer = dynamic(
  () => import("@components/atoms/containers/AppContainer"),
  {
    ssr: false,
  }
);

const DetailHotelImages = dynamic(
  () => import("@components/organisms/sections/detail-hotel/DetailHotelImages"),
  {
    ssr: false,
  }
);

const DetailHotelTemplate: React.FC = () => {
  return (
    <Layout title="Detail Hotels - Blue Gatez">
      <AppContainer py="xl">
        <DetailHotelImages />
        <Grid>
          <Grid.Col span={8}>
            <DetailHotelAddress />
            <Divider orientation="horizontal" color="gray.5" my="xl" />
          </Grid.Col>
          <Grid.Col span={2} offset={2}>
            <div
              style={{
                position: "fixed",
              }}
            >
              <OrderBookingCard />
            </div>
          </Grid.Col>
        </Grid>
      </AppContainer>
    </Layout>
  );
};

export default DetailHotelTemplate;
