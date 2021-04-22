import { ChainId, Token } from "@pancakeswap-libs/sdk";

// BEP-20 addresses.
export const CAKE = "0x4B4c5D87fa1aFE3365Fa1ee9cb6c38cC6FAB8fEf";
export const WBNB = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";
export const DEAD = "0x000000000000000000000000000000000000dEaD";

// Contract addresses.
export const CAKE_BNB_FARM = "0x04820Cb26E4927415Ae8f835716Ef85220d659d5";
export const MASTERCHEF_CONTRACT = "0xB807DD38f7Fa99bAba91c065f0553b53e93b0ddD";
export const LOTTERY_CONTRACT = "0x52DeFCd3c90f4e19833253fc9066e7Cde6F50a5c";
export const MULTICALL_CONTRACT = "0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb";

// PancakeSwap SDK Token.
export const CAKE_TOKEN = new Token(ChainId.MAINNET, CAKE, 18);
export const WBNB_TOKEN = new Token(ChainId.MAINNET, WBNB, 18);
export const CAKE_BNB_TOKEN = new Token(ChainId.MAINNET, CAKE_BNB_FARM, 18);
