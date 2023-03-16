import AppButton from "@components/molecules/buttons/AppButton";
import {
  Autocomplete,
  createStyles,
  MultiSelect,
  Paper,
  Select,
  SimpleGrid,
  Stack,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useMediaQuery } from "@mantine/hooks";
import {
  IconCalendarEvent,
  IconChevronDown,
  IconMapPin,
  IconSearch,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  searchFilterContainer: {
    top: -30,
  },
  paperContainer: {
    transition: `all 0.3s ease-in-out`,
    "&:hover": {
      boxShadow: theme.shadows.md,
    },
  },
}));

const allCity = [
  "Semua Lokasi",
  "Jakarta",
  "Surabaya",
  "Padang",
  "Medan",
  "Makassar",
];
const allDates = [
  "Semua Waktu",
  "Februari-2023",
  "Maret-2023",
  "April-2023",
  "Mei-2023",
  "Juni-2023",
  "Juli-2023",
  "Agustus-2023",
  "September-2023",
  "Oktober-2023",
  "November-2023",
  "Desember-2023",
];

const SearchFilter = () => {
  // initial configs
  const { classes } = useStyles();
  const matchesLG = useMediaQuery("(max-width: 1200px)");

  const form = useForm({
    initialValues: {
      location: "",
      checkInDate: "",
      checkOutDate: "",
      occupant: [],
    },
  });

  return (
    <Stack py="lg" className={classes.searchFilterContainer}>
      <Paper shadow="xs" radius="lg" className={classes.paperContainer}>
        <form
          onSubmit={form.onSubmit((values) =>
            console.log("FILTER PRODUCT: ", values)
          )}
        >
          <SimpleGrid
            cols={matchesLG ? 1 : 5}
            p={!matchesLG ? "xl" : "md"}
            spacing={!matchesLG ? "lg" : 3}
          >
            <Autocomplete
              icon={<IconMapPin />}
              data={allCity}
              label="Lokasi"
              placeholder="Lokasi"
              radius="md"
              nothingFound="Tidak ditemukan"
              transitionProps={{
                duration: 150,
                transition: "pop-top-left",
                timingFunction: "ease",
              }}
              {...form.getInputProps("location")}
            />
            <Select
              label="Check-In"
              placeholder="Check-In"
              icon={<IconCalendarEvent />}
              rightSection={<IconChevronDown />}
              radius="md"
              data={allDates}
              transitionProps={{
                duration: 150,
                transition: "pop-top-left",
                timingFunction: "ease",
              }}
              {...form.getInputProps("checkInDate")}
            />
            <Select
              label="Check-Out"
              placeholder="Check-Out"
              icon={<IconCalendarEvent />}
              rightSection={<IconChevronDown />}
              radius="md"
              data={allDates}
              transitionProps={{
                duration: 150,
                transition: "pop-top-left",
                timingFunction: "ease",
              }}
              {...form.getInputProps("checkOutDate")}
            />
            <MultiSelect
              label="Occupant"
              placeholder="Occupant"
              maxSelectedValues={2}
              data={[
                {
                  value: "1A",
                  label: "1 Adult",
                  group: "Adult",
                  disabled:
                    form.values.occupant.find((el) => el === "2A") ||
                    form.values.occupant.find((el) => el === "3A") ||
                    form.values.occupant.find((el) => el === "4A")
                      ? true
                      : false,
                },
                {
                  value: "2A",
                  label: "2 Adult",
                  group: "Adult",
                  disabled:
                    form.values.occupant.find((el) => el === "1A") ||
                    form.values.occupant.find((el) => el === "3A") ||
                    form.values.occupant.find((el) => el === "4A")
                      ? true
                      : false,
                },
                {
                  value: "3A",
                  label: "3 Adult",
                  group: "Adult",
                  disabled:
                    form.values.occupant.find((el) => el === "1A") ||
                    form.values.occupant.find((el) => el === "2A") ||
                    form.values.occupant.find((el) => el === "4A")
                      ? true
                      : false,
                },
                {
                  value: "4A",
                  label: "4 Adult",
                  group: "Adult",
                  disabled:
                    form.values.occupant.find((el) => el === "1A") ||
                    form.values.occupant.find((el) => el === "2A") ||
                    form.values.occupant.find((el) => el === "3A")
                      ? true
                      : false,
                },
                {
                  value: "1C",
                  label: "1 Children",
                  group: "Children",
                  disabled:
                    form.values.occupant.find((el) => el === "2C") ||
                    form.values.occupant.find((el) => el === "3C") ||
                    form.values.occupant.find((el) => el === "4C")
                      ? true
                      : false,
                },
                {
                  value: "2C",
                  label: "2 Children",
                  group: "Children",
                  disabled:
                    form.values.occupant.find((el) => el === "1C") ||
                    form.values.occupant.find((el) => el === "3C") ||
                    form.values.occupant.find((el) => el === "4C")
                      ? true
                      : false,
                },
                {
                  value: "3C",
                  label: "3 Children",
                  group: "Children",
                  disabled:
                    form.values.occupant.find((el) => el === "1C") ||
                    form.values.occupant.find((el) => el === "2C") ||
                    form.values.occupant.find((el) => el === "4C")
                      ? true
                      : false,
                },
                {
                  value: "4C",
                  label: "4 Children",
                  group: "Children",
                  disabled:
                    form.values.occupant.find((el) => el === "1C") ||
                    form.values.occupant.find((el) => el === "2C") ||
                    form.values.occupant.find((el) => el === "3C")
                      ? true
                      : false,
                },
              ]}
              transitionProps={{
                duration: 150,
                transition: "pop-top-left",
                timingFunction: "ease",
              }}
              {...form.getInputProps("occupant")}
            />
            <AppButton
              type="submit"
              mt="lg"
              color="red"
              variant="filled"
              leftIcon={<IconSearch />}
            >
              Cari
            </AppButton>
          </SimpleGrid>
        </form>
      </Paper>
    </Stack>
  );
};

export default SearchFilter;
