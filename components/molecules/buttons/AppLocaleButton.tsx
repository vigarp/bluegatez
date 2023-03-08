import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { createStyles, Group } from "@mantine/core";
import idFlag from "@public/icons/id.svg";
import enFlag from "@public/icons/en.svg";

const AppImage = dynamic(() => import("@components/atoms/images/AppImage"), {
  ssr: false,
});
const AppText = dynamic(
  () => import("@components/atoms/typographies/AppText"),
  { ssr: false }
);

const useStyles = createStyles((theme) => ({
  flagLabel: {
    color: theme.black,
    fontWeight: 600,
    textDecoration: "none",
  },
}));

const AppLocaleButton = () => {
  const router = useRouter();
  const { classes } = useStyles();

  return (
    <>
      {router.locale === "id" ? (
        <Link
          style={{ textDecoration: "none" }}
          href={{
            pathname: router.pathname,
            query: { ...router.query },
          }}
          replace={true}
          locale="en"
        >
          <Group spacing={5}>
            <AppImage alt="id-flag" src={idFlag} width={28} />
            <AppText fw={600} title="Indonesia" className={classes.flagLabel} />
          </Group>
        </Link>
      ) : (
        <Link
          style={{ textDecoration: "none" }}
          href={{
            pathname: router.pathname,
            query: { ...router.query },
          }}
          replace={true}
          locale="id"
        >
          <Group spacing={5}>
            <AppImage alt="en-flag" src={enFlag} width={28} />
            <AppText fw={600} title="English" className={classes.flagLabel} />
          </Group>
        </Link>
      )}
    </>
  );
};

export default AppLocaleButton;
