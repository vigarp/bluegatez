import { Carousel } from "@mantine/carousel";
import { rem } from "@mantine/core";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const AppImage = dynamic(() => import("@components/atoms/images/AppImage"), {
  ssr: false,
});

interface Props {
  content?: any;
}

const AppCarousel: React.FC<Props> = ({ content }) => {
  const router = useRouter();
  return (
    <Carousel
      slideSize="70%"
      mx="auto"
      loop
      withIndicators
      slideGap="md"
      styles={{
        indicator: {
          width: rem(12),
          height: rem(4),
          transition: "width 250ms ease",

          "&[data-active]": {
            width: rem(40),
          },
        },
      }}
      breakpoints={[
        { maxWidth: "md", slideSize: "50%" },
        { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
      ]}
    >
      {content.map((val: any, idx: string) => (
        <Carousel.Slide key={idx}>
          <AppImage
            onClick={() => router.push(val?.link)}
            src={val?.url}
            width={val?.width}
            height={val?.height}
            alt="jannahfirdaus.com"
            style={{
              objectFit: "cover",
              cursor: "pointer",
            }}
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default AppCarousel;
