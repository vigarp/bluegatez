import { Container, ContainerProps } from "@mantine/core";

interface Props extends ContainerProps {
  children?: any;
}
const AppContainer: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <Container size="xl" mt="5rem" {...props}>
      {children}
    </Container>
  );
};

export default AppContainer;
