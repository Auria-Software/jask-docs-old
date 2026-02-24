// next.config.mjs
import path from "path";
import nextra from "nextra";

const withNextra = nextra({
  defaultShowCopyCode: true,
  staticImage: true,
});

export default withNextra({
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@components": path.resolve("./components"),
      "@public": path.resolve("./public"),
    };
    return config;
  },

  async redirects() {
    return [
      { source: "/", destination: "/docs", permanent: false },
      {
        source: "/docs/applications/:path*",
        destination: "/docs/agentia/applications/:path*",
        permanent: false,
      },
      {
        source: "/docs/applications/create/actions/mail/:path*",
        destination: "/docs/agentia/applications/create/actions/m365/:path*",
        permanent: false,
      },
      {
        source: "/docs/settings/connectors/bigquery",
        destination: "/docs/settings/connectors/providers/google/bigquery",
        permanent: false,
      },
      {
        source: "/docs/settings/connectors/:path*",
        destination: "/docs/settings/connectors/providers/:path*",
        permanent: false,
      },
    ];
  },
});
