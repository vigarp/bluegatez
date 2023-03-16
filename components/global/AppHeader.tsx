import dynamic from "next/dynamic";

// utilities
import {
  Box,
  Burger,
  Center,
  createStyles,
  Divider,
  Drawer,
  Group,
  Header,
  ScrollArea,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import AppImage from "@components/atoms/images/AppImage";

// icons
import Logo from "@public/icons/RD_logo.webp";
import AppText from "@components/atoms/typographies/AppText";
import Link from "next/link";

const AppLocale = dynamic(
  () => import("@components/molecules/selects/AppLocale"),
  { ssr: false }
);

const AppButton = dynamic(
  () => import("@components/molecules/buttons/AppButton"),
  { ssr: false }
);

const AppLocaleButton = dynamic(
  () => import("@components/molecules/buttons/AppLocaleButton"),
  { ssr: false }
);

// define styles
const useStyles = createStyles((theme) => ({
  header: {
    boxShadow: theme.shadows.sm,
  },
  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.md,
    [theme.fn.smallerThan("sm")]: {
      height: 42,
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor: theme.colors.gray[0],
    }),
  },
}));

const AppHeader: React.FC = () => {
  // initial configs
  const { classes } = useStyles();

  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <Box>
      <Header
        height={80}
        px="md"
        pos="fixed"
        zIndex={10}
        className={classes.header}
      >
        <Group position="apart" my="xl">
          <Group position="left">
            <AppImage src={Logo} width={100} height={100} alt="app-logo" />
          </Group>
          <Group position="right">
            <Group className={classes.hiddenMobile}>
              <AppLocale />
              <Divider orientation="vertical" />
              <AppButton color="red">
                <AppText title="Daftar" />
              </AppButton>
            </Group>
            <Group className={classes.hiddenDesktop}>
              <Burger opened={drawerOpened} onClick={toggleDrawer} />
            </Group>
          </Group>
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="lg"
        title={<AppText title="Menu" color="dimmed" fz={13} fw={600} />}
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea sx={{ height: "calc(100vh - 60px)" }} mx="-md">
          <Divider my="sm" color="gray.1" />
          <Link href="/" className={classes.link} replace>
            <Center inline>
              <Box component="span" mr={5}>
                <AppText title="Daftar" color="red" fw={500} />
              </Box>
            </Center>
          </Link>
          <Divider my="sm" color="gray.1" />
          <Group position="left" px="md">
            <AppLocaleButton />
          </Group>
          <Divider my="sm" color="gray.1" />
        </ScrollArea>
      </Drawer>
    </Box>
  );
};

export default AppHeader;
