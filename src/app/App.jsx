import { createBrowserRouter, RouterProvider } from "react-router";

import Layout from "@/app/layouts/Layout";
import Error from "@/app/error-boundaries/Error";
import NotFound from "@/app/error-boundaries/NotFound";

const Home = () => import("@/features/home/Home");
const Career = () => import("@/features/careers/Careers");
const CaseStudies = () => import("@/features/caseStudies/CaseStudies");
const Contact = () => import("@/features/contact/Contact");
const Products = () => import("@/features/products/Products");
const ProductDetail = () => import("@/features/products/ProductDetail");
const PrivacyPolicy = () => import("@/features/privacy/PrivacyPolicy");
const BlogDetail = () => import("@/features/blogs/BlogDetail");
const CaseStudyDetail = () => import("@/features/caseStudies/CaseStudyDetail");
const Services = () => import("@/features/services/Services");
const ServiceDetail = () => import("@/features/services/ServiceDetail");
const About = () => import("@/features/about/About");
const Blogs = () => import("@/features/blogs/Blogs");
const InsideLife = () => import("@/features/insideLife/InsideLife");
const Faq = () => import("@/features/faq/Faq");
const Terms = () => import("@/features/terms/Terms");
const Community = () => import("@/features/community/Community");
const Features = () => import("@/features/features/Features");

// const Brands = () => import("@/features/brands/Brands");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        lazy: async () => ({ Component: (await Home()).default }),
      },
      {
        path: "careers",
        lazy: async () => ({ Component: (await Career()).default }),
      },
      {
        path: "case-studies",
        lazy: async () => ({ Component: (await CaseStudies()).default }),
      },
      {
        path: "case-studies/:slug",
        lazy: async () => ({ Component: (await CaseStudyDetail()).default }),
      },
      {
        path: "contact",
        lazy: async () => ({ Component: (await Contact()).default }),
      },
      {
        path: "products",
        lazy: async () => ({ Component: (await Products()).default }),
      },
      {
        path: "products/*",
        lazy: async () => ({ Component: (await ProductDetail()).default }),
      },
      {
        path: "services",
        lazy: async () => ({ Component: (await Services()).default }),
      },
      {
        path: "services/:slug",
        lazy: async () => ({ Component: (await ServiceDetail()).default }),
      },
      {
        path: "about",
        lazy: async () => ({ Component: (await About()).default }),
      },
      {
        path: "news-events",
        lazy: async () => ({ Component: (await Blogs()).default }),
      },
      {
        path: "news-events/:slug",
        lazy: async () => ({ Component: (await BlogDetail()).default }),
      },
      {
        path: "life-at-ita",
        lazy: async () => ({ Component: (await InsideLife()).default }),
      },
      {
        path: "faq",
        lazy: async () => ({ Component: (await Faq()).default }),
      },
      {
        path: "terms-and-conditions",
        lazy: async () => ({ Component: (await Terms()).default }),
      },
      {
        path: "privacy-policy",
        lazy: async () => ({ Component: (await PrivacyPolicy()).default }),
      },
      {
        path: "community-guidelines",
        lazy: async () => ({ Component: (await Community()).default }),
      },
      {
        path: "features",
        lazy: async () => ({ Component: (await Features()).default }),
      },
      // {
      //   path: "brands",
      //   lazy: async () => ({ Component: (await Brands()).default }),
      // },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const App = () => (
  <div className="max-w-screen-2xl mx-auto">
    <RouterProvider router={router} />
  </div>
);

export default App;
