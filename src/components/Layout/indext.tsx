import { FC } from 'react';
import { useEagerConnect, useInactiveListener } from 'hooks/web3Hook';

import Footer from './Footer';
import Header from './Header';

const Layout: FC = ({ children }) => {
  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager);

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
