import { Box, createStyles, Flex, Grid, Group, Stack } from "@mantine/core";
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
  const { classes } = useStyles();
  const matchesSM = useMediaQuery("(max-width: 48em)");
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

      <Grid grow>
        <Grid.Col span={matchesSM ? 12 : 6} mih={matchesSM ? 250 : 500}>
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
        </Grid.Col>
        <Grid.Col span={6} mih={500}>
          <Flex mih="50%" justify="space-between">
            <Box
              sx={() => ({
                width: "50%",
                margin: "0rem 0.5rem 1rem 0rem",
                position: "relative",
              })}
            >
              <AppImage
                src="https://res.cloudinary.com/vigarp/image/upload/v1678460306/samples/34986921_zlfe51.jpg"
                alt="logo"
                fill
                style={{ objectFit: "fill", borderRadius: "10px" }}
              />
            </Box>
            <Box
              sx={() => ({
                width: "50%",
                margin: "0rem 0rem 1rem 0.5rem",
                position: "relative",
              })}
            >
              <AppImage
                src="https://res.cloudinary.com/vigarp/image/upload/v1678460306/samples/34986894_hfrrnd.jpg"
                alt="logo"
                fill
                style={{ objectFit: "fill", borderRadius: "10px" }}
              />
            </Box>
          </Flex>
          <Box
            sx={() => ({
              height: "50%",
              position: "relative",
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
      </Grid>
    </Stack>
  );
};

export default PromoSection;
