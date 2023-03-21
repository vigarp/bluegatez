import Layout from "@components/global/Layout";
import { Box, Col, createStyles, Grid, Group, Skeleton } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { IconFilter } from "@tabler/icons-react";
import dynamic from "next/dynamic";

const AppLoader = dynamic(() => import("@components/atoms/loader/AppLoader"), {
  ssr: false,
});

const AppContainer = dynamic(
  () => import("@components/atoms/containers/AppContainer"),
  {
    ssr: false,
  }
);

const AppButton = dynamic(
  () => import("@components/molecules/buttons/AppButton"),
  {
    ssr: false,
  }
);

const SearchFilter = dynamic(
  () => import("@components/organisms/searchfilter/SearchFilter"),
  {
    ssr: false,
    loading: () => <AppLoader />,
  }
);

const DownsideFilter = dynamic(
  () => import("@components/organisms/downsidefilter/AppDownsideFilter"),
  {
    ssr: false,
    loading: () => <AppLoader />,
  }
);

const AsideFilter = dynamic(
  () => import("@components/organisms/asidefilter/AppAsideFilter"),
  {
    ssr: false,
    loading: () => <AppLoader />,
  }
);

const Cards = dynamic(
  () => import("@components/organisms/cards/AppCardCarousel"),
  {
    ssr: false,
    loading: () => <AppLoader />,
  }
);

const PromoSection = dynamic(
  () => import("@components/organisms/sections/PromoSection"),
  { ssr: false, loading: () => <Skeleton height={100} width="100%" my="md" /> }
);

// define styles
const useStyles = createStyles((theme) => ({
  header: {
    boxShadow: theme.shadows.sm,
  },
  hiddenDesktop: {
    [theme.fn.largerThan("md")]: {
      display: "none",
    },
  },
  hiddenMobile: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },
}));

const ListHotelsTemplate: React.FC = () => {
  // initial configs
  const { classes } = useStyles();
  const matchesMD = useMediaQuery("(max-width: 62em)");

  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <Layout title="Filter Hotels - Blue Gatez">
      <AppContainer py="xl">
        <SearchFilter />
        <Group className={classes.hiddenDesktop}>
          <AppButton
            color="red"
            rightIcon={<IconFilter />}
            onClick={toggleDrawer}
          >
            Filter
          </AppButton>
        </Group>
        <Grid>
          <Col span={4}>
            <Box className={classes.hiddenMobile}>
              <AsideFilter />
            </Box>
            <Box className={classes.hiddenDesktop}>
              <DownsideFilter opened={drawerOpened} onClose={closeDrawer} />
            </Box>
          </Col>
          <Col span={matchesMD ? 12 : 8}>
            <Cards />
          </Col>
        </Grid>
        {/* promo section */}
        <PromoSection />
      </AppContainer>
    </Layout>
  );
};

export default ListHotelsTemplate;
