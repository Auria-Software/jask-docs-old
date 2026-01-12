import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import Script from "next/script";

const banner = (
  <Banner storageKey="2.0-release">
    <a href="/docs/applications/create/actions/file_processing">
      🎉 Nouvelles actions de traitement de fichiers dans les applications →
    </a>
  </Banner>
);
const navbar = (
  <Navbar
    logo={
      <b>
        <img src="/logo_jask.png" alt="Logo Jask" width={100} height={100} />
      </b>
    }
    // ... Your additional navbar options
  />
);
const footer = <Footer>MIT {new Date().getFullYear()} © Jask.</Footer>;

export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning>
      <Head>
        {/* Prevent search engine indexing */}
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-VHWH82GG1F"
        />
        <Script id="google-analytics">
          {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-VHWH82GG1F');
            `}
        </Script>
      </Head>
      <body>
        <Layout
          sidebar={{
            defaultMenuCollapseLevel: 1,
          }}
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          footer={null}
          docsRepositoryBase="https://github.com/Auria-Software/jask-docs/tree/main">
          {children}
        </Layout>
      </body>
    </html>
  );
}
