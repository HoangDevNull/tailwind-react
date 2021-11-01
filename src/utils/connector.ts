/* eslint-disable import/prefer-default-export */
import { InjectedConnector } from '@web3-react/injected-connector';

import { NETWORK_CHAIN_IDS } from './constants';

export const injected = new InjectedConnector({
  supportedChainIds: [NETWORK_CHAIN_IDS.rinkeby, NETWORK_CHAIN_IDS.mainnet],
});
