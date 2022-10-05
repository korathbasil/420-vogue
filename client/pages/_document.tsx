import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="crossorigin"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Teko:wght@600&display=swap"
            rel="stylesheet"
          />
          {/* <script
            src="https://accounts.google.com/gsi/client"
            async
            defer
            crossOrigin="crossorigin"
          ></script> */}
        </Head>
        <body>
          <Main />
          <div id="modal-portal"></div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
