import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

import { WagmiProvider } from "wagmi";
import { scroll } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { metaMask } from "wagmi/connectors";

// 0. Setup queryClient
const queryClient = new QueryClient();

// 1. Get projectId from https://cloud.walletconnect.com
const projectId = "ZKam";

// 2. Create wagmiConfig
const metadata = {
  name: "ZKam",
  description: "ZKam Example",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [scroll] as const;
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  connectors: [metaMask({})],
});

// 3. Create modal
createWeb3Modal({
  metadata,
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration,
});

export function Web3ModalProvider({ children }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
