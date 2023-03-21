import dynamic from "next/dynamic";
import { useState } from "react";

import {
  Checkbox,
  Flex,
  Navbar,
  RangeSlider,
  ScrollArea,
  Stack,
  Text,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { CurrencyIDR } from "@utils/libs/formatter";

const AppTitle = dynamic(
  () => import("@components/atoms/typographies/AppTitle"),
  { ssr: false }
);

const AppButton = dynamic(
  () => import("@components/molecules/buttons/AppButton"),
  { ssr: false }
);

const AsideFilter: React.FC = () => {
  const [sliderValues, setSliderValues] = useState<[number, number]>([
    100000, 400000,
  ]);

  const form = useForm({
    initialValues: {
      email: "",
      termsOfService: false,
    },
  });
  return (
    <Navbar height={750} width={{ sm: 300, md: 300, lg: 400 }}>
      <Navbar.Section grow component={ScrollArea} mx="xl">
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Stack my="xl">
            <AppTitle title="Rekomendasi BlueGatez" fz={16} />
            <Checkbox label="Top Hotels" />
          </Stack>
          <Stack my="xl">
            <AppTitle title="Kebersihan dan Keamanan" fz={16} />
            <Checkbox label="Properti Hygiene" />
          </Stack>
          <Stack my="xl">
            <AppTitle title="Harga" fz={16} mb="lg" />
            <RangeSlider
              onChange={(e) => setSliderValues(e)}
              mt="lg"
              mx="lg"
              min={100000}
              step={1000}
              max={400000}
              defaultValue={[100000, 400000]}
            />
            <Flex justify="space-between" mx="lg">
              <Text>{CurrencyIDR.format(sliderValues[0])}</Text>
              <Text>{CurrencyIDR.format(sliderValues[1])}</Text>
            </Flex>
          </Stack>
          <Stack my="xl">
            <Checkbox.Group
              defaultValue={["react"]}
              label={<AppTitle title="Pilihan Tambahan" fz={16} />}
            >
              <Stack mt="xs">
                <Checkbox value="sarapan" label="Sarapan" />
                <Checkbox value="longcheckout" label="Check-Out lebih lama" />
                <Checkbox value="fastcheckin" label="Check-In lebih cepat" />
              </Stack>
            </Checkbox.Group>
          </Stack>
          <Stack my="xl">
            <Checkbox.Group
              defaultValue={["react"]}
              label={<AppTitle title="Tipe BlueGatez" fz={16} />}
            >
              <Stack mt="xs">
                <Checkbox value="bgA" label="BlueGatez A" />
                <Checkbox value="bgB" label="BlueGatez B" />
                <Checkbox value="bgC" label="BlueGatez C" />
                <Checkbox value="bgD" label="BlueGatez D" />
                <Checkbox value="bgE" label="BlueGatez E" />
              </Stack>
            </Checkbox.Group>
          </Stack>
          <Stack my="xl">
            <Checkbox.Group
              defaultValue={["react"]}
              label={<AppTitle title="Pilihan Pembayaran" fz={16} />}
            >
              <Stack mt="xs">
                <Checkbox value="pah" label="Pay at Hotel" />
                <Checkbox value="bp" label="BluePay" />
              </Stack>
            </Checkbox.Group>
          </Stack>
          <Stack my="xl">
            <AppButton color="red" type="submit">
              Terapkan
            </AppButton>
          </Stack>
        </form>
      </Navbar.Section>
    </Navbar>
  );
};

export default AsideFilter;
