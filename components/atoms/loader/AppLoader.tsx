import { Loader, Flex } from "@mantine/core";

const AppLoader: React.FC = () => {
  return (
    <Flex justify="center" align="center" mt="8rem">
      <Loader size="lg" variant="dots" />
    </Flex>
  );
};

export default AppLoader;
