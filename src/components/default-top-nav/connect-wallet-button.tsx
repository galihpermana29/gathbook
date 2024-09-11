import { ActionIcon, Button } from "@mantine/core";
import { FaWallet } from "react-icons/fa";

export const ConnectWalletButton = () => {
  return (
    <>
      <Button
        className="hidden md:block"
        leftSection={<FaWallet />}
      >
        Connect
      </Button>
      <ActionIcon
        size="lg"
        className="md:hidden"
      >
        <FaWallet />
      </ActionIcon>
    </>
  );
};
