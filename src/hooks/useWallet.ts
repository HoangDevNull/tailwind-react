import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core';

import Web3 from 'web3';
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector';
import { toast } from 'react-toastify';
import { injected } from 'utils/connector';

const handleError = (error: Error) => {
  if (error instanceof NoEthereumProviderError) {
    toast.error(
      'No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.'
    );
  } else if (error instanceof UnsupportedChainIdError) {
    toast.error("You're connected to an unsupported network.");
  } else if (error instanceof UserRejectedRequestErrorInjected) {
    toast.error('Please authorize this website to access your Ethereum account.');
  } else if (error.message.includes('Already processing eth_requestAccount')) {
    toast.error('Already processing eth_requestAccounts. Please wait.');
  } else {
    console.error(error);
    toast.error('An unknown error occurred. Check the console for more details.');
  }
};

export const useWallet = () => {
  const { activate, connector, ...props } = useWeb3React<Web3>();

  const connect = async () => {
    try {
      const { ethereum } = window as any;
      if (!ethereum) {
        return toast.error(
          'No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.'
        );
      }
      return await activate(injected, (error) => handleError(error));
    } catch (err) {
      console.log('Connect wallet', err);
    }
  };

  return { ...props, connector, connect };
};
