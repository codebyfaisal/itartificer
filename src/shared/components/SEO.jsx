import { useEffect } from "react";

const SEO = ({
  title = "IT Artificer",
  description = "IT Artificer is a leading software development company specializing in custom software development, mobile app development, and web development services.",
  path = "",
  image = "/images/logo/itartificer.webp",
}) => {
  const url = `https://itartificer.netlify.app${path}`;
  const imageUrl = image.startsWith("http")
    ? image
    : `https://itartificer.netlify.app${image}`;

  const fullTitle = path === "" ? title : `${title} - IT Artificer`;

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // 2. Helper to update or create meta tags
    const updateMeta = (name, content) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("name", name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    const updateMetaProperty = (property, content) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("property", property);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // 3. Update Meta Tags
    updateMeta("description", description);

    // Canonical
    let linkCanonical = document.querySelector("link[rel='canonical']");
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", url);

    // Open Graph
    updateMetaProperty("og:url", url);
    updateMetaProperty("og:title", fullTitle);
    updateMetaProperty("og:description", description);
    updateMetaProperty("og:image", imageUrl);

    // Twitter
    updateMeta("twitter:card", "summary_large_image");
    updateMeta("twitter:title", fullTitle);
    updateMeta("twitter:description", description);
    updateMeta("twitter:image", imageUrl);
  }, [fullTitle, description, url, imageUrl]);

  return null; // Render nothing, just manage side effects
};

export default SEO;
