import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

const { GA_APP_ID } = process.env;

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_APP_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              if (process.env.NODE_ENV === 'production') {
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_APP_ID}', {
                  page_location: window.location.href,
                  page_path: window.location.pathname,
                  page_title: window.document.title,
                });
              }
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
