import {
  Box,
  createStyles,
  Flex,
  Grid,
  Group,
  rem,
  SimpleGrid,
  Stack,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconChevronRight } from "@tabler/icons-react";
import dynamic from "next/dynamic";

const AppImage = dynamic(() => import("@components/atoms/images/AppImage"), {
  ssr: false,
});
const AppButton = dynamic(
  () => import("@components/molecules/buttons/AppButton"),
  { ssr: false }
);
const AppTitle = dynamic(
  () => import("@components/atoms/typographies/AppTitle"),
  { ssr: false }
);

const PRIMARY_COL_HEIGHT = rem(400);

const useStyles = createStyles({
  headerTitle: {
    fontSize: 32,
    fontWeight: 600,
    "@media (max-width: 755px)": {
      fontSize: 26,
    },
  },
  seeAllWrapper: {
    padding: "5px",
    maxWidth: "50%",
    cursor: "pointer",
    gap: 5,
    transition: `all 0.3s ease-in-out`,
    "&:hover": {
      transform: `translateX(5px)`,
    },
  },
});

const PromoSection: React.FC = () => {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - ${theme.spacing.md} / 2)`;
  const { classes } = useStyles();

  return (
    <Stack py="xl" spacing="xl">
      <Group position="apart">
        <AppTitle
          title="Penawaran"
          className={classes.headerTitle}
          color="gray"
          maw="50%"
        />
        <Group className={classes.seeAllWrapper}>
          <AppButton
            rightIcon={<IconChevronRight />}
            variant="outline"
            color="dark"
          >
            Lihat Semua
          </AppButton>
        </Group>
      </Group>
      <SimpleGrid
        cols={2}
        spacing="md"
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
      >
        <Box
          sx={() => ({
            height: "100%",
            position: "relative",
          })}
        >
          <AppImage
            src="https://res.cloudinary.com/vigarp/image/upload/v1678460128/samples/27356541_qiosvq.jpg"
            alt="logo"
            fill
            style={{ objectFit: "fill", borderRadius: "10px" }}
          />
        </Box>
        <Grid gutter="md">
          <Grid.Col>
            <Box
              sx={() => ({
                margin: "0rem 0.5rem 1rem 0rem",
                position: "relative",
                height: SECONDARY_COL_HEIGHT,
              })}
            >
              <AppImage
                src="https://res.cloudinary.com/vigarp/image/upload/v1678460306/samples/34986921_zlfe51.jpg"
                alt="logo"
                fill
                style={{ objectFit: "fill", borderRadius: "10px" }}
              />
            </Box>
          </Grid.Col>
          <Grid.Col span={6}>
            <Box
              sx={() => ({
                position: "relative",
                height: SECONDARY_COL_HEIGHT,
              })}
            >
              <AppImage
                src="https://res.cloudinary.com/vigarp/image/upload/v1678460306/samples/27356223_xa7r2q.jpg"
                alt="logo"
                fill
                style={{ objectFit: "fill", borderRadius: "10px" }}
              />
            </Box>
          </Grid.Col>
          <Grid.Col span={6}>
            <Box
              sx={() => ({
                margin: "0rem 0rem 1rem 0.5rem",
                position: "relative",
                height: SECONDARY_COL_HEIGHT,
              })}
            >
              <AppImage
                src="https://res.cloudinary.com/vigarp/image/upload/v1678460306/samples/34986894_hfrrnd.jpg"
                alt="logo"
                fill
                style={{ objectFit: "fill", borderRadius: "10px" }}
              />
            </Box>
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Stack>
  );
};

export default PromoSection;
