import dynamic from "next/dynamic";
import { createStyles, Group, Menu, rem, UnstyledButton } from "@mantine/core";
import { useEffect, useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";

// icons
import idFlag from "@public/icons/id.svg";
import enFlag from "@public/icons/en.svg";
import { useRouter } from "next/router";

const AppImage = dynamic(() => import("@components/atoms/images/AppImage"), {
  ssr: false,
});

const localizationData = [
  { label: "Indonesia", locale: "id", image: idFlag },
  { label: "English", locale: "en", image: enFlag },
];

const useStyles = createStyles((theme, { opened }: { opened: boolean }) => ({
  control: {
    width: rem(150),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[2]
    }`,
    transition: "background-color 150ms ease",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[opened ? 5 : 6]
        : opened
        ? theme.colors.gray[0]
        : theme.white,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },
  label: {
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,
  },
  icon: {
    transition: "transform 150ms ease",
    transform: opened ? "rotate(180deg)" : "rotate(0deg)",
  },
}));

const AppLocale: React.FC = () => {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles({ opened });
  const [selected, setSelected] = useState(localizationData[0]);

  const router = useRouter();
  const { locale } = router;

  const handleLocalization = (value: any) => {
    setSelected(value);
    router.push(router.pathname, router.asPath, { locale: value.locale });
  };

  useEffect(() => {
    if (locale === "en") {
      setSelected({ label: "English", locale: "en", image: enFlag });
    }
  }, [locale, router]);

  const localizationItems = localizationData.map((item) => (
    <Menu.Item
      key={item.label}
      icon={
        <AppImage
          src={item.image}
          width={18}
          height={18}
          alt={`${item.label}-icon`}
        />
      }
      onClick={() => handleLocalization(item)}
    >
      {item.label}
    </Menu.Item>
  ));

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width="target"
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton className={classes.control}>
          <Group spacing="xs">
            <AppImage
              src={selected.image}
              width={22}
              height={22}
              alt={`${selected.label}-icon`}
            />
            <span className={classes.label}>{selected.label}</span>
          </Group>
          <IconChevronDown size="1rem" className={classes.icon} stroke={1.5} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{localizationItems}</Menu.Dropdown>
    </Menu>
  );
};

export default AppLocale;
