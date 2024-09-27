"use client";
import type { Book } from "@/lib/types/books";
import { getBookById } from "@/server/actions/books";
import { getAccount, getResalePrice } from "@/server/actions/contract";
import { Button } from "@mantine/core";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBookOpen, FaGift, FaHandshake, FaMoneyBill, FaTag, FaTimes } from "react-icons/fa";
import { BuyFModal } from "../_components/book-action/book-buyfriend";
import { DonateModal } from "../_components/book-action/book-donate";
import { ResellModal } from "../_components/book-action/book-setprice";
import { useBuyBook } from "../_hooks/use-buy-book";
import { useCancelResell } from "../_hooks/use-cancel-resell";

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

  useEffect(() => {
    const fetchAccount = async () => {
      const currentAccount = await getAccount();
      const book = await getBookById(id);
      setPrice(book.price)
      if (currentAccount) {
        const resalePrice = await getResalePrice(id, currentAccount);
        setResalePrice(Number(resalePrice));
      }
      setAccount(currentAccount);
    };
    fetchAccount();
  }, [id]);

  const { mutate: buyBook, isPending: isBuyingPending } = useBuyBook(id, account!, price); 
  const { mutate: cancelResell, isPending: isCancelingPending } = useCancelResell(id, account);

  const handleBuyBook = () => {
    if (account) {
      try {
        buyBook(); 
      } catch (error) {
        console.error("Error buying book:", error);
      }
    }
  };
  
  if (!account) {
    return (
      <Button disabled leftSection={<FaMoneyBill />}>
        Please connect your wallet to continue
      </Button>
    );
  }
  
  switch (isBought) {
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
          />
        </>
      );
    case true:
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
};
