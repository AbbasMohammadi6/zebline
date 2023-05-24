import * as React from 'react';

export default function App({ Component, pageProps }: any) {
  React.useEffect(() => {
    (window as any).zebline.init({
      token: "bearer 4$U2VnbWVudCFuMA$TyBLdeYwC71684835503713",
      licence_code: "4$U2VnbWVudCFuMA$SCA9IOb4gf1684835503794",
      notificationRequest: true,
      options: { page_view: true }
    });
  }, []);

  return <Component {...pageProps} />
}
