export type Pending = { type: "PENDING"; message?: string };
export type Loading = { type: "LOADING"; message?: string };
export type Done<T> = { type: "DONE"; message?: string; data: T };

export type LoadingState<T> = Pending | Loading | Done<T>;

export type CancelType<T> = { type: "CANCELED"; message: T };

export type ErrorType<T> = { type: "ERROR"; error: T };

export type ErrorState<T = Error> = ErrorType<T> | CancelType<string>;

export type Install = { type: "INSTALL"; message: string };
export type Installed = { type: "INSTALLED"; message: string };

export type InstallState = Install | Installed;

export type Connect = { type: "CONNECT"; message: string };
export type Connecting = { type: "CONNECTING"; message: string };
export type Connected = { type: "CONNECTED"; message: string };
export type Disconnect = { type: "DISCONNECT"; message: string };
export type Disconnecting = { type: "DISCONNECTING"; message: string };
export type Disconnected = { type: "DISCONNECTED"; message: string };

export type ConnectionState =
  | Connect
  | Connecting
  | Connected
  | Disconnect
  | Disconnecting
  | Disconnected;

