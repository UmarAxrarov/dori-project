import { Box } from "@mui/material";
import Link from "next/link";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import React from "react";

const Footer = () => {
  return (
    <Box component="footer" className="bg-white text-center py-6">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center justify-center gap-3">
          <hr className="w-[50px] h-[2px] bg-gradient-to-r from-[#FFCC00] to-[#A200FF] border-0 rounded-full" />
          <span className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FFCC00] to-[#A200FF] tracking-wide">
            SOCIALS
          </span>
          <hr className="w-[50px] h-[2px] bg-gradient-to-r from-[#A200FF] to-[#FFCC00] border-0 rounded-full" />
        </div>

        <div className="flex justify-center gap-8 p-3 rounded-full bg-gradient-to-r from-[#FFCC00]/10 to-[#A200FF]/10 w-fit">
          <Link
            href="https://t.me/"
            className="text-blue-900 hover:text-blue-700 transition-transform transform hover:scale-110"
          >
            <TelegramIcon fontSize="large" />
          </Link>
          <Link
            href="https://instagram.com/"
            className="text-blue-900 hover:text-blue-700 transition-transform transform hover:scale-110"
          >
            <InstagramIcon fontSize="large" />
          </Link>
        </div>
      </div>
    </Box>
  );
};

export default Footer;
