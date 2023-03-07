import { Text, TextProps } from "@mantine/core";

interface Props extends TextProps {
  title?: any;
}

const AppText: React.FC<Props> = (props) => {
  const { title } = props;

  return <Text {...props}>{title}</Text>;
};

export default AppText;
