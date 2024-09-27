"use client";
import { Button, Input, Modal } from "@mantine/core";
import { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { useDonateNFT } from "../../_hooks/use-donate-book";

interface DonateModalProps {
  opened: boolean;
  onClose: () => void;
  bookId: number; 
  account: string; 
}

export const DonateModal = ({ opened, onClose, bookId, account }: DonateModalProps) => {
  const [donateTo, setDonateTo] = useState("");
  const { mutate: donateNFT, isPending } = useDonateNFT(
    bookId,
    donateTo,
    account,
    () => {
      setDonateTo(""); 
      onClose(); 
    }
  );

  const handleDonate = () => {
    donateNFT(); 
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Donate to:"
    >
      <Input
        onChange={(event) => setDonateTo(event.currentTarget.value)}
        leftSection={
          <FaCircleUser
            size="1rem"
            className="fill-mtn-primary-filled"
          />
        }
        className="w-full md:max-w-100"
        placeholder="Enter recipient's address"
      />
      <Button
        onClick={handleDonate}
        fullWidth
        style={{ marginTop: '10px' }}
        loading={isPending}
      >
        Confirm Donation
      </Button>
    </Modal>
  );
};
