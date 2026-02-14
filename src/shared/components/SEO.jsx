const SEO = ({
  title = "IT Artificer",
  description = "IT Artificer is a leading software development company specializing in custom software development, mobile app development, and web development services.",
  path = "",
  image = "/images/logo.png",
}) => {
  const url = `https://itartificer.com${path}`;

  return (
    <>
      {/* Standard SEO */}
      <title>{`${title} - IT Artificer`}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
};

export default SEO;
