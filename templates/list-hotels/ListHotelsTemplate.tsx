import Layout from "@components/global/Layout";
import { Box, Col, createStyles, Grid, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
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

// define styles
const useStyles = createStyles((theme) => ({
  header: {
    boxShadow: theme.shadows.sm,
  },
  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
}));

const ListHotelsTemplate: React.FC = () => {
  // initial configs
  const { classes } = useStyles();

  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <Layout title="Filter Hotels - Blue Gatez">
      <AppContainer py="xl">
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
          <Col span="content">
            <Box className={classes.hiddenMobile}>
              <AsideFilter />
            </Box>
            <Box className={classes.hiddenDesktop}>
              <DownsideFilter opened={drawerOpened} onClose={closeDrawer} />
            </Box>
          </Col>
          <Col span={6}>
            <Cards />
          </Col>
        </Grid>
      </AppContainer>
    </Layout>
  );
};

export default ListHotelsTemplate;
