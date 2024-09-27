"use client";
import { getAccount, getUniqueOwners } from '@/server/actions/contract';
import { useEffect, useState } from 'react';

export const UniqueOwners = ({ bookId }: { bookId: number }) => {
  const [uniqueOwners, setUniqueOwners] = useState<number | null>(null);
  const [account, setAccount] = useState<string | null>(null);

  useEffect(() => {
    const fetchUniqueOwners = async () => {
      const account = await getAccount();
      setAccount(account);

      if (account && bookId) { 
        const [owners] = await Promise.all([
          getUniqueOwners(bookId)
        ]);
        setUniqueOwners(Number(owners)); 
      }
    };

    fetchUniqueOwners(); 
  }, [bookId]); 

  return (
    <div>
      {uniqueOwners !== null ? (
        <p>{uniqueOwners}</p>
      ) : account !== null ? ( 
        <p>0</p>
      ) : (
        <p>~</p>
      )}
    </div>
  );
};

export default UniqueOwners;
