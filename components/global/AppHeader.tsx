// utilities
import { Box, createStyles, Header } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

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
        <div>navybar</div>
      </Header>
    </Box>
  );
}
