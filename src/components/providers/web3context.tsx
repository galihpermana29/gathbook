import { initWeb3 } from '@/server/actions/contract';
import React, { createContext, useContext, useEffect, useState } from 'react';
import Web3 from 'web3';

interface Web3ContextType {
  account: string | null;
  web3: Web3 | null;
  gathbookContract: any | null; 
}

const Web3Context = createContext<Web3ContextType | undefined>(undefined);

export const Web3Provider = ({ children } : { children: React.ReactNode }) => {
  const [account, setAccount] = useState<string | null>(null);
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [gathbookContract, setGathbookContract] = useState<any | null>(null); 

  useEffect(() => {
    const checkIfWalletIsConnected = async () => {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          const result = await initWeb3(); 
          if (result) {
            const { web3: web3Instance, gathbookContract: contractInstance } = result;
            setWeb3(web3Instance); 
            setGathbookContract(contractInstance);
          }
        }
      }
    };

    checkIfWalletIsConnected();

    const handleAccountsChanged = (accounts: string[]) => {
      if (accounts.length > 0) {
        setAccount(accounts[0]);
      } else {
        setAccount(null);
      }
    };

    const handleChainChanged = () => {
      window.location.reload();
    };

    window.ethereum.on('accountsChanged', handleAccountsChanged);
    window.ethereum.on('chainChanged', handleChainChanged);

    return () => {
      window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      window.ethereum.removeListener('chainChanged', handleChainChanged);
    };
  }, []);

  return (
    <Web3Context.Provider value={{ account, web3, gathbookContract }}>
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3 = () => {
  const context = useContext(Web3Context);
  if (!context) {
    throw new Error('useWeb3 must be used within a Web3Provider');
  }
  return context;
};
