import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.polygonTestnet,
  mainnet: Networks.polygonMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'ImperialLegion',
  tokenName: 'ImperialLegion',
  tokenSymbol: 'IL',
  hiddenMetadataUri: 'ipfs://QmWrWRWQc8DWHiT67x7UnPjcCirKUVdL9r2n8BApT352aW/hidden.json',
  maxSupply: 600,
  whitelistSale: {
    price: 15,
    maxMintAmountPerTx: 5,
  },
  preSale: {
    price: 20,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 20,
    maxMintAmountPerTx: 10,
  },
  contractAddress: "0x357f285d93A09C61f541a3bA1D1AF045D3aF7469",
  marketplaceIdentifier: 'imperial-legion',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
