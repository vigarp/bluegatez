import Layout from "@components/global/Layout";
import { Box, createStyles, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconFilter } from "@tabler/icons-react";
import { NextPage } from "next";
import dynamic from "next/dynamic";

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
  () => import("@components/organisms/downsidefilter"),
  {
    ssr: false,
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

const AsideFilter = dynamic(() => import("@components/organisms/asidefilter"), {
  ssr: false,
});

const FilteredHotels: NextPage = () => {
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
        <Box className={classes.hiddenMobile}>
          <AsideFilter />
        </Box>
        <Box className={classes.hiddenDesktop}>
          <DownsideFilter opened={drawerOpened} onClose={closeDrawer} />
        </Box>
      </AppContainer>
    </Layout>
  );
};

export default FilteredHotels;
