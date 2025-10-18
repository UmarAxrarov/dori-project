"use client";

import { Box, Select, MenuItem } from "@mui/material";
import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

function Navbar({ locale }: { locale: string }) {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (lng: string) => {
    if (lng === locale) return;

    const segments = pathname.split("/");
    if (segments[1] === "uz" || segments[1] === "ru") {
      segments[1] = lng;
    } else {
      segments.unshift(lng);
    }

    const newPath = segments.join("/") || "/";
    router.push(newPath);
  };

  return (
    <Box
      component="header"
      className="bg-white shadow-md sticky top-0 z-50 transition-shadow duration-300"
    >
      <Box
        sx={{
          height: "5px",
          background: "linear-gradient(to right, #FFCC00, #A200FF)",
        }}
      />

      <Box className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        <Link
          href={`/${locale}`}
          className="text-gray-900 font-semibold text-lg hover:text-[#A200FF] transition"
        >
          {t("navbar.icon")}
        </Link>

        <Select
          value={locale}
          size="small"
          onChange={(e) => handleLanguageChange(e.target.value)}
          sx={{
            color: "#444",
            fontWeight: 500,
            "& .MuiOutlinedInput-notchedOutline": { borderColor: "#ddd" },
            "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#A200FF" },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#A200FF" },
          }}
        >
          <MenuItem value="uz">UZ</MenuItem>
          <MenuItem value="ru">RU</MenuItem>
        </Select>
      </Box>
    </Box>
  );
}

export default Navbar;
