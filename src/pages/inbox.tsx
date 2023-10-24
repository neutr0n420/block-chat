import ConnectBtn from "../components/landing-page/ConnectBtn";
import Link from "next/link";
import { PushAPI } from "@pushprotocol/restapi";
import { createSocketConnection, EVENTS } from "@pushprotocol/socket";
import { ethers } from "ethers";
import { ENV } from "@pushprotocol/restapi/src/lib/constants";



const env = ENV.STAGING;
const firstSigner = ethers.Wallet.createRandom()
const SecondSigner = ethers.Wallet.createRandom()
console.log("First User Private Key: ", firstSigner.privateKey);


const main = async () =>{
  console.log("Creating 2 users...");
  const firstUser = await PushAPI.initialize(firstSigner, { env })
  const secondUser = await PushAPI.initialize(SecondSigner, { env })
  console.log("Both the users have been created!");


  console.log("Send a message from 1st user to 2nd...");
  await firstUser.chat.send(SecondSigner.address, {
    content: "Hey, from the first user",
    type: "Text"
  })


  console.log("Accepting the request from first user...");
  await secondUser.chat.accept(firstSigner.address)
  

  console.log("Replying back to first user...");
  
  // Reply 1
  await secondUser.chat.send(firstSigner.address, {
    content: "Hey dude!",
    type: "Text"
  })

  // Reply 2
  await secondUser.chat.send(SecondSigner.address, {
    content: "It was a great meeting...",
    type: "Text"
  })

}



const message = async () =>{
  const signer = ethers.Wallet.createRandom();
  const user1 = await PushAPI.initialize(signer, {env: "staging"})

  const recepient = ""
}





{/* Sidebar & Connect Wallet Button Implementation */} 
const Index = () => {
  return (
    <div className="flex">
      {/* Sidebar (Left Side) */}
      <div className="w-1/4 p-6 text-white bg-[#353A3F]">
        <h1 className="py-4 text-3xl font-extrabold">BlockChat</h1>
        <Link href="/">
          <div className="flex items-center px-4 py-2 focus:bg-[#495057] bg-none rounded-xl hover:bg-[#4A5056] hover:font-bold">
            <img src="home.svg" className="pr-4" />
            <p className="text-[#CFD4D9]">Home</p>
          </div>
        </Link>
        <Link href="inbox">
          <div className="flex items-center px-4 py-2 my-2 focus:bg-[#495057] bg-none rounded-xl hover:bg-[#4A5056] hover:font-bold">
            <img src="/mail.svg" className="pr-4" />
            <p className="text-[#CFD4D9]">Inbox</p>
          </div>
        </Link>
        <Link href="send">
          <div className="flex items-center px-4 py-2 my-2 focus:bg-[#495057] bg-none rounded-xl hover:bg-[#4A5056] hover:font-bold">
            <img src="/Send.svg" className="pr-4" />
            <p className="text-[#CFD4D9]">Send</p>
          </div>
        </Link>
        <Link href="videocall">
          <div className="flex items-center px-4 py-2 my-2 focus:bg-[#495057] bg-none rounded-xl hover:bg-[#4A5056] hover:font-bold">
            <img src="/video.svg" className="pr-4" />
            <p className="text-[#CFD4D9]">Video Call</p>
          </div>
        </Link>
        <div>
          <h1 className="py-48 text-6xl font-extrabold text-center -rotate-90 opacity-25">
            Block <span className="block ml-4">Chat</span>
          </h1>
        </div>
        <div>
          <p>Made with ❤️</p>
        </div>
      </div>
      {/* ConnectBtn at the Top Right (outside the flex-1 container) */}
      <div className="absolute top-4 right-4">
        <ConnectBtn />
      </div>
    </div>
  );
};

export default Index;