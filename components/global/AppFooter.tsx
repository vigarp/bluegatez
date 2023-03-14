import {
  Container,
  createStyles,
  Flex,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  footer: {
    paddingTop: "5rem",
    paddingBottom: "5rem",
    backgroundColor: theme.colors.gray[2],
  },
  inner: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  groups: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
    },
  },
  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    marginBottom: theme.spacing.xs,
    color: theme.colors.dark[3],
  },
  link: {
    maxWidth: 380,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,
    paddingTop: 2,
    paddingBottom: 2,
    color: theme.colors.dark[3],
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

const AppFooter: React.FC = () => {
  const { classes } = useStyles();
  const Matches = useMediaQuery("(max-width: 1400px)");
  const matchesMD = useMediaQuery("(max-width: 64em)");
  return (
    <footer className={classes.footer}>
      <Container className={classes.inner} size="xl" px={Matches ? "1rem" : 0}>
        <SimpleGrid cols={matchesMD ? 2 : 4}>
          <Stack>
            <Flex direction="column" mr={20}>
              <Text className={classes.title}>Bluegatez Rental</Text>
              <Text className={classes.link}>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </Text>
            </Flex>
          </Stack>
          <Stack>
            <Flex direction="column" mr={20}>
              <Text className={classes.title}>Quick Links</Text>
              <Text className={classes.link}>About Bluegatez</Text>
              <Text className={classes.link}>Our Best Rooms</Text>
              <Text className={classes.link}>Accomodation Services</Text>
            </Flex>
          </Stack>
          <Stack>
            <Flex direction="column" mr={20}>
              <Text className={classes.title}>Reservation</Text>
              <Text className={classes.link}>Tel: 021 - 1234567</Text>
              <Text className={classes.link}>reservation@bluegatez.com</Text>
            </Flex>
          </Stack>
          <Stack>
            <Flex direction="column" mr={20}>
              <Text className={classes.title}>Our Location</Text>
              <Text className={classes.link}>Jl. Kenangan Outer Ring Road</Text>
              <Text className={classes.link}>Jakarta Barat, DKI Jakarta</Text>
            </Flex>
          </Stack>
        </SimpleGrid>
      </Container>
    </footer>
  );
};

export default AppFooter;
