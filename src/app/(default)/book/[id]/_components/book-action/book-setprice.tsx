"use client";
import { Button, Input, Modal } from "@mantine/core";
import { useState } from "react";
import { FaCoins } from "react-icons/fa";
import { useSetPrice } from "../../_hooks/use-set-price";

interface ResellModalProps {
  opened: boolean;
  onClose: () => void;
  bookId: number;
  account: string;
}

export const ResellModal = ({ opened, onClose, bookId, account }: ResellModalProps) => {
  const [resellPrice, setResellPrice] = useState("");
  const { mutate: setPrice, isPending } = useSetPrice(bookId, account);

  const handleSetPrice = () => {
    setPrice(resellPrice, {
      onSuccess: () => {
        setResellPrice(""); 
        onClose(); 
      },
    });
  };

  return (
    <Modal opened={opened} onClose={onClose} title="Set Resell Price:">
      <Input
        onChange={(event) => setResellPrice(event.currentTarget.value)}
        value={resellPrice}
        leftSection={<FaCoins size="1rem" className="fill-mtn-primary-filled" />}
        className="w-full md:max-w-100"
        placeholder="Enter resell price"
      />
      <Button
        onClick={handleSetPrice}
        fullWidth
        style={{ marginTop: "10px" }}
        loading={isPending} 
      >
        Set Price
      </Button>
    </Modal>
  );
};
