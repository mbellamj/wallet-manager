import web3Config from "./config.json" assert { type: "json" };

// As set of available and enabled wallets for the website
// This is used for allowing us to redirect the user to any
// of the available wallets that we have enabled on the website
export const allowedWeb3Providers = web3Config.filter(
  (provider) => provider.enabled
);

export const defaultWeb3Provider = web3Config.find(
  (provider) => provider.default
);

export const web3ProvidersNames = web3Config.filter(
  (provider) => provider.name
);

// Creates a Map of available locales for easy access
export const web3ProvidersMap = Object.fromEntries(
  web3Config.map((wallet) => [wallet.name, wallet])
);
