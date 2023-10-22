import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PushAPI } from "@pushprotocol/restapi";
import { createSocketConnection, EVENTS } from "@pushprotocol/socket";
import { ethers } from "ethers";
import { useState } from "react";

// const inbox = async () => {
//   // const [walletAdress, setWalletAddress] = useState("");
//   //   return (
//   //     // <div>
//   //     //   <h1>This is inbox</h1>
//   //     //   <Input
//   //     //     placeholder="Enter the wallet address"
//   //     //     // onChange={(e) => }
//   //     //   />
//   //     //   {/* <Input placeholder="" /> */}
//   //     //   <Button>Click to send Message</Button>
//   //     // </div>
//   //   );
// };
const inbox = async () => {
  // console.log(reciverWalletAddress);
  const [reciverWalletAddress, setReciverWalletAddress] = useState("");
  console.log(reciverWalletAddress);
  const sendMessage = async () => {
    const signer = ethers.Wallet.createRandom();
    const userAryan = await PushAPI.initialize(signer, { env: "stagging" });

    const userShivank = "0x5A1dE476BF6DAa8A802C346a9D9118F772dCe838";

    const aryanMessageShivak = await userAryan.chat.send(userShivank, {
      content: "Heyy shivank",
    });
  };
  return (
    <div>
      <div>
        <Input onChange={(e) => setReciverWalletAddress(e.target.value)} />
        <Button onClick={sendMessage} />
      </div>
    </div>
  );
};

export default inbox;
