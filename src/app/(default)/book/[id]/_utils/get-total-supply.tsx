"use client";
import { getAccount, getNFTPurchaseInfo } from '@/server/actions/contract';
import { useEffect, useState } from 'react';

export const TotalSupply = ({ bookId }: { bookId: number }) => {
  const [purchased, setPurchased] = useState<number | null>(null);
  const [totalSupply, setTotalSupply] = useState<number | null>(null);

  useEffect(() => {
    const fetchtotalSupply = async () => {
      const account = await getAccount();
      if (account && bookId) { 
        const [result] = await Promise.all([
          getNFTPurchaseInfo(bookId) 
        ]);
        setPurchased(Number(result[0])); 
        setTotalSupply(Number(result[1])); 
      }
    };

    fetchtotalSupply(); 
  }, [bookId]); 

  return (
    <div>
      {purchased !== null && totalSupply !== null ? (
        <p>
          {purchased}/{totalSupply}
        </p>
      ) : purchased == null && totalSupply !== null ? ( 
        <p>0/{totalSupply}</p>
      ) : (
        <p>~</p>
      )}
    </div>
  );
};

export default TotalSupply;
