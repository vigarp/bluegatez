import { createStyles } from "@mantine/core";
import Image, { ImageProps } from "next/image";

const useStyle = createStyles({
  root: {
    maxWidth: "100%",
    height: "auto",
  },
});

const AppImage: React.FC<ImageProps> = (props) => {
  const { classes } = useStyle();
  return (
    <Image priority className={classes.root} {...props} alt="blue-gates-img" />
  );
};

export default AppImage;
