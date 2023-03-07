import { Title, TitleProps } from "@mantine/core";

interface Props extends TitleProps {
  title?: string;
}

const AppTitle: React.FC<Props> = (props) => {
  const { title } = props;
  return (
    <Title {...props} order={2}>
      {title}
    </Title>
  );
};

export default AppTitle;
