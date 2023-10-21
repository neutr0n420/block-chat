import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="text-white text-center overflow-hidden w-1/5">
      <div className="bg-[#353A3F]  px-4 py-8 flex flex-col items-center">
        <div className="">
          <h1 className="text-3xl font-extrabold py-4">Block Chat</h1>
        </div>
        <div className="text-center flex flex-col items-left">
          <Link href="/">
            <div className="flex items-center px-4 py-2 focus:bg-[#4A5056] bg-none rounded-xl hover:bg-[#4A5056] hover:font-bold">
              <img src="home.svg" className="pr-4" />
              <p className="text-[#CFD4D9]">Home</p>
            </div>
          </Link>
          <Link href="login">
            <div className="flex items-center px-4 py-2 my-2">
              <img src="/mail.svg" className="pr-4" />
              <p className="text-[#CFD4D9]">Inbox</p>
            </div>
          </Link>
          <Link href="carrers">
            <div className="flex items-center px-4 py-2 my-2">
              <img src="/Send.svg" className="pr-4" />
              <p className="text-[#CFD4D9]">Sent</p>
            </div>
          </Link>
          <Link href="help">
            <div className="flex items-center px-4 py-2 my-2">
              <img src="/video.svg" className="pr-4" />
              <p className="text-[#CFD4D9]">Video Call</p>
            </div>
          </Link>
          <div>
            <h1 className="text-6xl font-extrabold opacity-25 -rotate-90 py-48 text-center">
              Block <span className="block ml-4">Chat</span>
            </h1>
          </div>
        </div>
        <div>
          <p>Made with ❤️</p>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
