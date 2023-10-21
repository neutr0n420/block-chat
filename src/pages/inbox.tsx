import { PushAPI } from "@pushprotocol/restapi";
import { createSocketConnection, EVENTS } from "@pushprotocol/socket";
import { ethers } from "ethers";

const signer = ethers.Wallet.createRandom();

const userAryan = await PushAPI.initialize(signer, { env: "staging" });

const toWalletConnect = "0x0540d716c6d621948F5A0d33680E2969c33E66c5";
const sendMesssage = async () => {
  const aliceMessageBob = await userAryan.chat.send(toWalletConnect, {
    content: "Hello there this is the request from the code",
    type: "Text",
  });
};
const aryanChats = await userAryan.chat.list("CHATS");
console.log(aryanChats);
const inbox = () => {
  return (
    <div>
      <h1>This is inbox</h1>
      <button onClick={sendMesssage}>Send Message</button>
    </div>
  );
};

export default inbox;
