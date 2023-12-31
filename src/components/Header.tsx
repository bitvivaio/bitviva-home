import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { PoperMenu } from "./Poper";
import { HiOutlineMenu } from "react-icons/hi";

const Header: FC<{}> = ({}) => {
  const [isMobile, setIsMobile] = useState(false);
  const r = useRouter();

  const getWindowWidth = () =>
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  const handleResize = () => {
    setIsMobile(getWindowWidth() <= 900);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const currentMenus = [
    {
      text: "Bridge",
      to: "",
    },
    {
      text: "Testnet",
      to: "",
    },
    {
      text: "X",
    },
    {
      text: "Discord",
    },
  ];

  return (
    <div>
      <div className="bg-[url(/headerBg.png)] border-opacity-50 h-20 flex items-center bg-cover border-b-[1px] border-[#FFFFFF]">
        <div className="w-container mx-auto flex mo:w-full md:w-full md:px-[30px] mo:px-[30px] justify-between ">
          <div className="bg-[url(/logo.png)] bg-no-repeat w-full h-[26px]" />
          {isMobile ? (
            <PoperMenu menus={currentMenus} className="absolute z-[9999]">
              <button className="text-[2rem] mo:text-2xl">
                <HiOutlineMenu className={"text-white"} />
              </button>
            </PoperMenu>
          ) : (
            <div className="flex flex-row items-center justify-between gap-10 text-white">
              <button
                style={{ letterSpacing: "1.4px" }}
                className=" text-sm font-medium "
              >
                Bridge
              </button>
              <button
                style={{ letterSpacing: "1.4px" }}
                className=" text-sm font-medium "
              >
                Testnet
              </button>
              <img src={"/x.png"} alt="" className="bg-no-repeat" />
              <img src={"/brand.png"} alt="" className="bg-no-repeat" />
              <button></button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
