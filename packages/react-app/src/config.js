import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x03beF209504D4FDcD87883Bc452BabE9836CC102"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/hUzZ7kKyCr7ebqSIHjaJAkAd59doUl5D",
  },
};