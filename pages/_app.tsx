import * as React from 'react';


const token = 'bearer 4$U2VnbWVudCFuMA$TyBLdeYwC71684835503713';
const licence_code = '4$U2VnbWVudCFuMA$SCA9IOb4gf1684835503794';

export default function App({ Component, pageProps }: any) {
  React.useEffect(() => {
    (window as any).zebline.init({
      token: token,
      licence_code: licence_code,
      notificationRequest: true,
    })
  }, []);

  return <Component {...pageProps} />
}
