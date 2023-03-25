import { Box, Grid, rem, SimpleGrid, useMantineTheme } from "@mantine/core";
import dynamic from "next/dynamic";

const AppImage = dynamic(() => import("@components/atoms/images/AppImage"), {
  ssr: false,
});

const PRIMARY_COL_HEIGHT = rem(400);

const DetailHotelImages: React.FC = () => {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - ${theme.spacing.md} / 2)`;
  return (
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
  );
};

export default DetailHotelImages;
