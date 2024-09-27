"use client";
import { Button, Input, Modal } from "@mantine/core";
import { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { useBuyFromFriend } from "../../_hooks/use-buy-from-friend";

interface BuyFModalProps {
  opened: boolean;
  onClose: () => void;
  bookId: number; 
  account: string; 
}

export const BuyFModal = ({ opened, onClose, bookId, account }: BuyFModalProps) => {
  const [buyFrom, setBuyFrom] = useState("");
  const { mutate: buyFromFriend, isPending } = useBuyFromFriend(bookId, buyFrom, account, () => {
    setBuyFrom(""); 
    onClose(); 
  });

  const handleBuyF = () => {
    buyFromFriend(); 
  };
  
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Buy From:"
    >
      <Input
        onChange={(event) => setBuyFrom(event.currentTarget.value)}
        leftSection={
          <FaCircleUser
            size="1rem"
            className="fill-mtn-primary-filled"
          />
        }
        className="w-full md:max-w-100"
        placeholder="Enter address"
      />
      <Button
        onClick={handleBuyF}
        fullWidth
        style={{ marginTop: '10px' }}
        loading={isPending}
      >
        Buy From Friend
      </Button>
    </Modal>
  );
};
