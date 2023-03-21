import { Carousel } from "@mantine/carousel";
import { Avatar, Box, Card, Grid, Group, Stack } from "@mantine/core";
import {
  IconBed,
  IconBuildingSkyscraper,
  IconCheckupList,
  IconDeviceTv,
  IconHanger2,
  IconStarFilled,
  IconTrophy,
} from "@tabler/icons-react";
import { CurrencyIDR } from "@utils/libs/formatter";
import dynamic from "next/dynamic";

const AppImage = dynamic(() => import("@components/atoms/images/AppImage"), {
  ssr: false,
});
const AppText = dynamic(
  () => import("@components/atoms/typographies/AppText"),
  {
    ssr: false,
  }
);
const AppTitle = dynamic(
  () => import("@components/atoms/typographies/AppTitle"),
  {
    ssr: false,
  }
);

const dataBanner = [
  {
    id: 1,
    link: "#",
    url: "https://res.cloudinary.com/vigarp/image/upload/v1678283862/samples/banner1_klna66.jpg",
    width: 900,
    height: 300,
  },
  {
    id: 2,
    link: "#",
    url: "https://res.cloudinary.com/vigarp/image/upload/v1678283863/samples/banner2_b1cxi8.jpg",
    width: 900,
    height: 300,
  },
  {
    id: 3,
    link: "#",
    url: "https://res.cloudinary.com/vigarp/image/upload/v1678283862/samples/banner3_kkrrxo.jpg",
    width: 900,
    height: 300,
  },
];

const AppCardCarousel: React.FC = () => {
  const slides = dataBanner.map((data) => (
    <Carousel.Slide key={data.id}>
      <AppImage
        src={data.url}
        height={data.height}
        width={data.width}
        alt={data.link}
        style={{
          objectFit: "cover",
          cursor: "pointer",
          borderRadius: "10px",
        }}
      />
    </Carousel.Slide>
  ));
  return (
    <Card shadow="md" radius="md" padding="xl">
      <Grid>
        <Grid.Col sm={5}>
          <Carousel
            my="5rem"
            withIndicators
            styles={{
              control: {
                "&[data-inactive]": {
                  opacity: 0,
                  cursor: "default",
                },
              },
            }}
          >
            {slides}
          </Carousel>
        </Grid.Col>
        <Grid.Col sm={7}>
          <Stack justify="space-between" h="100%">
            <Stack>
              <AppTitle
                title="Hotel Borobudur Kemayoran Syariah"
                fz={20}
                fw={700}
              />
              <AppText title="Kemayoran, Kemayoran" fz={14} />
              <Group>
                <Box
                  sx={{
                    display: "flex",
                    backgroundColor: "#FFE9EA",
                    padding: "0.3rem",
                    borderRadius: "10px",
                  }}
                >
                  <IconTrophy color="red" />
                  <AppText
                    title="Top Properti"
                    fz={14}
                    color="red"
                    fw={500}
                    mx="sm"
                  />
                </Box>
                <Group>
                  <Avatar size={25}>
                    <IconStarFilled color="yellow" />
                  </Avatar>
                  <AppText title="4.8" fz={14} />
                  <AppText title="(2381)" fz={14} />
                </Group>
                <Group>
                  <Avatar size={25}>
                    <IconCheckupList />
                  </Avatar>
                  <AppText title="Hygiene Pass" fz={14} />
                </Group>
              </Group>
              <Group my="md">
                <Group>
                  <Avatar size={25}>
                    <IconBuildingSkyscraper />
                  </Avatar>
                  <AppText title="Resepsionis" fz={14} />
                </Group>
                <Group>
                  <Avatar size={25}>
                    <IconHanger2 />
                  </Avatar>
                  <AppText title="Handuk" fz={14} />
                </Group>
                <Group>
                  <Avatar size={25}>
                    <IconBed />
                  </Avatar>
                  <AppText title="Tempat Tidur" fz={14} />
                </Group>
                <Group>
                  <Avatar size={25}>
                    <IconDeviceTv />
                  </Avatar>
                  <AppText title="Televisi" fz={14} />
                </Group>
              </Group>
            </Stack>
            <Stack>
              <Group>
                <AppText title={CurrencyIDR.format(400000)} fz={20} fw={700} />
                <AppText
                  title={CurrencyIDR.format(800000)}
                  fz={15}
                  td="line-through"
                />
                <AppText title="18% Off" color="yellow" fz={15} fw={800} />
              </Group>
              <AppText title="Tax Included" fz={10} />
            </Stack>
          </Stack>
        </Grid.Col>
      </Grid>
    </Card>
  );
};

export default AppCardCarousel;
