import abi from '@/server/actions/abi/gbook-abi.json';
import Web3 from 'web3';

let web3: Web3 | null = null;
let gathbookContract: any = null;

declare global {
  interface Window {
    ethereum?: any;
  }
}
  
export const initWeb3 = async () => {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
    } catch (error) {
      console.error("User denied account access");
      return null; 
    }
  } else if ((window as any).web3) {
    web3 = new Web3((window as any).web3.currentProvider);
  } else {
    console.error("Non-Ethereum browser detected. You should consider trying MetaMask!");
    return null;
  }
  
  if (web3) {
    gathbookContract = new web3.eth.Contract(abi, "0x9B9ccfF7B3403F4272e3F7184Af5C1a58b4902e7");
    return { web3, gathbookContract }; 
  }
  return null; 
};
  

export const getAccount = async (): Promise<string | null> => {
  if (web3) {
    const accounts = await web3.eth.getAccounts();
    return accounts[0] || null;
  }
  return null;
};

export const createBook = async (
id: number, title: string, author: string, authorAddress: string, totalSupply: number, price: number, initialRoyalty: number, resaleRoyalty: number, account: string) => {
  if (gathbookContract) {
    const gasPrice = await web3?.eth.getGasPrice();
    return gathbookContract.methods.createBook(
      id,
      title,
      author,
      authorAddress,
      totalSupply,
      price,
      initialRoyalty,
      resaleRoyalty
    ).send({ 
      from: account,
      gasPrice: gasPrice,
    });
  }
  throw new Error("Contract is not initialized");
};

export const buyNFT = async (bookId: number, account: string, value: number) => {
  if (gathbookContract) {
    const gasPrice = await web3?.eth.getGasPrice();
    
    return gathbookContract.methods.buyNFT(bookId).send({
      from: account,
      value: web3?.utils.toWei(value.toString(), 'ether'),
      gasPrice: gasPrice,
    });
  }
  throw new Error("Contract is not initialized");
};


export const DonateNFT = async (bookId: number, account: string) => {
    if (gathbookContract) {
      return gathbookContract.methods.DonateNFT(bookId, account).send();
    }
    throw new Error("Contract is not initialized");
  };

export const buyResaleNFT = async (bookId: number, owner: string, account: string, value: number) => {
  if (gathbookContract) {
    const gasPrice = await web3?.eth.getGasPrice();
    return gathbookContract.methods.buyResaleNFT(bookId, owner).send({
      from: account,
      value: value,
      gasPrice: gasPrice,
    });
  }
  throw new Error("Contract is not initialized");
};

export const setResalePrice = async (bookId: number, price: number, account: string) => {
  const priceInWei = web3?.utils.toWei(price, "ether");
  const gasPrice = await web3?.eth.getGasPrice();
  if (gathbookContract) {
    return gathbookContract.methods.setResalePrice(bookId, priceInWei).send({ 
      from: account,
      gasPrice: gasPrice,
    });
  }
  throw new Error("Contract is not initialized");
};

export const getResalePrice = async (bookId: number, owner: string) => {
  if (gathbookContract) {
    return gathbookContract.methods.getResalePrice(bookId, owner).call();
  }
  throw new Error("Contract is not initialized");
};

export const getNFTPurchaseInfo = async (bookId: number) => {
  if (gathbookContract) {
    return gathbookContract.methods.getNFTPurchaseInfo(bookId).call();
  }
  throw new Error("Contract is not initialized");
};

export const getTransactionCount = async (bookId: number) => {
  if (gathbookContract) {
    return gathbookContract.methods.getTransactionCount(bookId).call();
  }
  throw new Error("Contract is not initialized");
};

export const getUniqueOwners = async (bookId: number) => {
  if (gathbookContract) {
    return gathbookContract.methods.getUniqueOwners(bookId).call();
  }
  throw new Error("Contract is not initialized");
};

export const cancelResalePrice = async (bookId: number, account: string) => {
    if (gathbookContract) {
      const gasPrice = await web3?.eth.getGasPrice();
      return gathbookContract.methods.cancelResalePrice(bookId).send({
        from: account,
        gasPrice: gasPrice,
      });
    }
    throw new Error("Contract is not initialized");
  };