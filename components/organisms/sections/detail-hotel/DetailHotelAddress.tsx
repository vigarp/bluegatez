import AppText from "@components/atoms/typographies/AppText";
import AppTitle from "@components/atoms/typographies/AppTitle";
import { Avatar, Group, Stack } from "@mantine/core";
import { IconCheckupList } from "@tabler/icons-react";

const DetailHotelAddress: React.FC = () => {
  return (
    <Stack my="xl">
      <AppTitle title="Sans Hotel Puri Indah Jakarta" />
      <AppText
        title="Jalan Kembangan Raya, No.2, Kembangan, Indonesia, 11610"
        fz={16}
        color="#606060"
      />
      <Group>
        <Avatar size={25}>
          <IconCheckupList color="blue" />
        </Avatar>
        <AppText title="Hygiene Pass" fz={14} />
      </Group>
    </Stack>
  );
};

export default DetailHotelAddress;
