"use client";
import type { Book } from "@/lib/types/books";
import { getBookById } from "@/server/actions/books";
import { checkOwnership, getAccount, getResalePrice } from "@/server/actions/contract";
import { Button } from "@mantine/core";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBookOpen, FaGift, FaHandHolding, FaHandshake, FaMoneyBill, FaTag, FaTimes } from "react-icons/fa";
import { BuyFModal } from "../_components/book-action/book-buyfriend";
import { DonateModal } from "../_components/book-action/book-donate";
import { ResellModal } from "../_components/book-action/book-setprice";
import { useBuyBook } from "../_hooks/use-buy-book";
import { useCancelResell } from "../_hooks/use-cancel-resell";
import { useClaimBook } from "../_hooks/use-claim-book";

export const BookActionButton = async ({
  id,
  isBought,
}: {
  id: Book["id"];
  isBought: boolean;
}) => {

  const [donateModalOpened, setDonateModalOpened] = useState(false);
  const [ResellPriceModalOpened, setResellPriceOpened] = useState(false);
  const [BuyFModalOpened, setBuyFOpened] = useState(false);
  const [account, setAccount] = useState<string | null>(null);
  const [price, setPrice] = useState(0);
  const [resalePrice, setResalePrice] = useState<number | null>(null);
  const [owned, setOwned] = useState(false);

  useEffect(() => {
    const fetchAccount = async () => {
      const currentAccount = await getAccount();
      const book = await getBookById(id);
      setPrice(book.price)
      if (currentAccount) {
        const ownBook = await checkOwnership(id, currentAccount);
        setOwned(ownBook);
        const resalePrice = await getResalePrice(id, currentAccount);
        setResalePrice(Number(resalePrice));
      }
      setAccount(currentAccount);
    };
    fetchAccount();
  }, [id]);

  const { mutate: buyBook, isPending: isBuyingPending } = useBuyBook(id, account!, price, isBought); 
  const { mutate: cancelResell, isPending: isCancelingPending } = useCancelResell(id, account);
  const { mutate: claimBook, isPending: isClaimPending } = useClaimBook(id);

  const handleBuyBook = () => {
    if (account) {
        buyBook();
    }
  };

  const handleClaimBook = () => {
    if (account) {
        claimBook(); 
    }
  };
  
  if (!account) {
    return (
      <Button disabled leftSection={<FaMoneyBill />}>
        Please connect your wallet to continue
      </Button>
    );
  }
  
  switch (owned) {
    case false:
        return (
          <>
            <p>Choose How You Want to Buy:</p>
            <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
              <Button
                loading={isBuyingPending}
                onClick={handleBuyBook}
                leftSection={<FaMoneyBill />}
              >
                Direct Buy
              </Button>
              <Button
                onClick={() => setBuyFOpened(true)}
                leftSection={<FaHandshake />}
              >
                Buy from friend
              </Button>
            </div>
  
            <BuyFModal
              opened={BuyFModalOpened}
              onClose={() => setBuyFOpened(false)}
              bookId={id}
              account={account || ""} 
              isBought        
            />
          </>
        );
    case true:
      if (!isBought){
        return(<>
        <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
        <Button
            loading={isClaimPending}
            onClick={handleClaimBook}
            leftSection={<FaHandHolding />}
          >
            Claim 
        </Button>
        </div>
        </>);
    }
    else{
      return (
        <>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
            <Button
              component={Link}
              href={`/read/${id}`}
              leftSection={<FaBookOpen />}
              fullWidth
            >
              Read Book
            </Button>
            <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
            {resalePrice === 0 ? (
              <Button
                onClick={() => setResellPriceOpened(true)}
                style={{ flex: 1 }}
                leftSection={<FaTag />}
              >
                Resell
              </Button>
            ) : (
              <Button
                loading={isCancelingPending}
                onClick={() => cancelResell()}
                style={{ flex: 1 }}
                leftSection={<FaTimes />}
              >
                Cancel Resell
              </Button>
            )}
              <Button
                onClick={() => setDonateModalOpened(true)}
                style={{ flex: 1 }}
                leftSection={<FaGift />}
              >
                Donate
              </Button>
            </div>
          </div>
          <DonateModal
            opened={donateModalOpened}
            onClose={() => setDonateModalOpened(false)} 
            bookId={id} 
            account={account || ""}          
            />
          <ResellModal
              opened={ResellPriceModalOpened}
              onClose={() => setResellPriceOpened(false)}
              bookId={id}
              account={account || ""}
            />
          
        </>
      );
    }
  }
};
