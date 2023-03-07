// utilities
import { Box, createStyles, Divider, Group, Header } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import AppImage from "@components/atoms/images/AppImage";

// icons
import Logo from "@public/icons/RD_logo.webp";
import { AppLocale } from "@components/molecules/selects/AppLocale";
import AppButton from "@components/molecules/buttons/AppButton";
import AppText from "@components/atoms/typographies/AppText";

// define styles
const useStyles = createStyles((theme) => ({
  header: {
    boxShadow: theme.shadows.sm,
  },
}));

export default function AppHeader() {
  // initial configs

  const { classes } = useStyles();
  const matchesSM = useMediaQuery("(max-width: 767px)");
  return (
    <Box>
      <Header
        height={matchesSM ? 150 : 80}
        px="md"
        pos="fixed"
        zIndex={2}
        className={classes.header}
      >
        <Group position="apart" my="xl">
          <Group position="left">
            <AppImage src={Logo} width={100} height={100} alt="app-logo" />
          </Group>
          <Group position="right">
            <AppLocale />
            <Divider orientation="vertical" />
            <AppButton color="red">
              <AppText title="Daftar" />
            </AppButton>
          </Group>
        </Group>
      </Header>
    </Box>
  );
}
