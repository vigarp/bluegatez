import { Button, ButtonProps } from "@mantine/core";

interface Props extends ButtonProps {
  children?: any;
  onClick?: () => void;
}

const AppButton: React.FC<Props> = (props) => {
  const { children, onClick } = props;
  return (
    <Button sx={{ borderRadius: "100px" }} onClick={onClick} {...props}>
      {children}
    </Button>
  );
};

export default AppButton;
