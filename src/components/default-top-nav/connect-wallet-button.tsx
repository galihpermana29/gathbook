"use client";
import { initWeb3 } from "@/server/actions/contract";
import { ActionIcon, Button } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaWallet } from "react-icons/fa";
import { toast } from "sonner";
declare global {
  interface Window {
    ethereum?: any;
  }
}

export const ConnectWalletButton = () => {
  const [account, setAccount] = useState<string | null>(null);
  const router = useRouter();
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
        await initWeb3();
        router.push("/");
        toast.success("Wallet connected successfully!");
      } catch (error) {
        toast.error("Failed to connect wallet. Please try again.");
      }
    } else {
      toast.error("MetaMask is not detected. Please install MetaMask.");
    }
  };

  useEffect(() => {
    const checkIfWalletIsConnected = async () => {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          await initWeb3(); 
        }
      }
    };
    checkIfWalletIsConnected();
  }, []);

  return (
    <>
      {account ? (
        <Button className="hidden md:block" leftSection={<FaWallet />}>
          {account.slice(0, 6) + "..." + account.slice(-4)}
        </Button>
      ) : (
        <Button className="hidden md:block" leftSection={<FaWallet />} onClick={connectWallet}>
          Connect
        </Button>
      )}
      <ActionIcon size="lg" className="md:hidden" onClick={connectWallet}>
        <FaWallet />
      </ActionIcon>
    </>
  );
};
