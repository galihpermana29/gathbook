"use client";
import { getAccount, getTransactionCount } from '@/server/actions/contract';
import { useEffect, useState } from 'react';

export const ActualReader = ({ bookId }: { bookId: number }) => {
  const [transaction, setTransaction] = useState<number | null>(null);
  const [account, setAccount] = useState<string | null>(null);

  useEffect(() => {
    const fetchActualReader = async () => {
      const account = await getAccount();
      setAccount(account);

      if (account && bookId) { 
        const [owners] = await Promise.all([
          getTransactionCount(bookId)
        ]);
        setTransaction(Number(owners)); 
      }
    };

    fetchActualReader(); 
  }, [bookId]); 

  return (
    <div>
      {transaction !== null ? (
        <p>{transaction}</p>
      ) : account !== null ? ( 
        <p>0</p>
      ) : (
        <p>~</p>
      )}
    </div>
  );
};

export default ActualReader;
