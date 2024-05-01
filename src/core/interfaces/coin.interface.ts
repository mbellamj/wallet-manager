import { Social } from "./socials.interface";

export type CoinPreviewType = "announcements" | "release";

export type CoinPreviewState = "created" | "updated" | "deleted";

export interface CoinToken {
  name: string;
  symbol: string;
  description: string;
  totalSupply: number;
  decimals: number;
  logo: string;
  socials?: Partial<Social>;
  walletAddress: string;
}

export interface CoinTokenData {
  tokens: Array<CoinToken>;
  categories: Array<string>;
}

export interface CoinPagination {
  next: number | null;
  prev: number | null;
  pages: number;
  total: number;
}

export interface CoinTokensRSC {
  tokens: Array<CoinToken>;
  pagination: CoinPagination;
}
