import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

const token = 'bearer 4$U2VnbWVudCFuMA$TyBLdeYwC71684835503713';
const licence_code = '4$U2VnbWVudCFuMA$SCA9IOb4gf1684835503794';

class AppDocument extends Document {
  render() {
    return (
      <Html lang='fa'>
        <Head>
          <script defer src="https://sdk.zebline.io/js/v1/sgm-sdk.js"></script>
          <script dangerouslySetInnerHTML={{
            __html: `window.onload = function () {
                        window.zebline.init({
                          token: ${token},
                          licence_code: ${licence_code},
                          notificationRequest: true,
                        });
                      };`
          }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
