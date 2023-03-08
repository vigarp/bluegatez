import Head from "next/head";

interface Props {
  children?: any;
  title?: string;
  description?: string;
  keywords?: string;
  image?: any;
  url?: string;
}

const Layout: React.FC<Props> = (props) => {
  const { children, title, description, url, keywords, image } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;

Layout.defaultProps = {
  title: "Blue Gatez - Official Website",
  description: "Temukan Hotel Bintang 5",
  keywords:
    "hotel, bintang 5, booking, reservation, hall, room, wedding, eat, cafe",
};
