import 'react-toastify/dist/ReactToastify.css';
import Web3 from 'web3';
import { Web3ReactProvider } from '@web3-react/core';
import HomePage from 'pages/Home/HomePage';

import { ToastContainer } from 'react-toastify';
import Layout from 'components/Layout/indext';

const getLibrary = (provider: any): Web3 => new Web3(provider);

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Layout>
        <HomePage />
      </Layout>
      <ToastContainer />
    </Web3ReactProvider>
  );
}

export default App;
