import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@mui/styles';
import theme from '../theme';

class MyDocument extends Document {
  // `getInitialProps` belongs to `_document` (instead of `_app`),
  // it's compatible with server-side generation (SSG).
  static async getInitialProps(ctx: any) {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) => (props: any) =>
          sheets.collect(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [
        ...React.Children.toArray(initialProps.styles),
        sheets.getStyleElement(),
      ],
    };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          {/* PWA primary color */}
          <meta name='theme-color' content={theme.palette.primary.main} />
          <link
            href='https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500&family=Source+Sans+Pro:wght@300;400;600;700&display=swap'
            rel='stylesheet'
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
