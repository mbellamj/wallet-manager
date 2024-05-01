export interface WalletDetectionFunction {
  (window: Window, navigator: Navigator): boolean;
}

export enum Web3ConnectorType {
  PHANTOM = "Phantom",
  METAMASK = "MetaMask",
}

export interface Web3Provider {
  name: string;
  type: string;
  imageURL: string;
  downloadLink: string;
  enabled: boolean;
  installed?: boolean;
}

export enum Web3ProviderStatus {
  INSTALL = "install",
  INSTALLED = "installed",
  CONNECT = "connect",
  CONNECTING = "connecting",
  CONNECTED = "connected",
  DISCONNECT = "disconnect",
  DISCONNECTED = "disconnected",
}
