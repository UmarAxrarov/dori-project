"use client";

import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { useTranslations } from "next-intl";

const COLORS = ["#00C49F", "#0088FE", "#FFBB28", "#FF8042", "#A020F0"];

const data = [
  { name: "B1", value: 1 },
  { name: "DL-KARNITIN 300mg", value: 1 },
  { name: "L-LIZIN 300mg", value: 1 },
  { name: "B6", value: 1 },
  { name: "B12", value: 1 },
];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  name,
}: any) => {
  const RADIAN = Math.PI / 180;
  const specialName = name.length > 14;
  const lengthFactor = Math.min(name.length / 10, 1.2);
  const baseFactor = 0.55 + lengthFactor * 0.1;

  const radius = innerRadius + (outerRadius - innerRadius) * baseFactor;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  let firstLine = name;
  let secondLine = "";

  if (name.length > 8) {
    const parts = name.split(" ");
    if (parts.length > 1) {
      firstLine = parts[0];
      secondLine = parts.slice(1).join(" ");
    } else {
      const mid = Math.ceil(name.length / 2);
      firstLine = name.slice(0, mid);
      secondLine = name.slice(mid);
    }
  }

  return (
    <text
      x={x}
      y={y}
      fill="white"
      fontSize={specialName ? 9 : 12}
      textAnchor="middle"
      dominantBaseline="central"
      style={{
        paintOrder: "stroke",
        stroke: "#000",
        strokeWidth: 2,
        strokeLinejoin: "round",
      }}
    >
      <tspan x={x} dy="-0.3em">
        {firstLine}
      </tspan>
      {secondLine && (
        <tspan x={x} dy="1.1em">
          {secondLine}
        </tspan>
      )}
    </text>
  );
};

const Home = () => {
  const t = useTranslations("home");

  return (
    <Box
      data-aos="fade-up"
      component="section"
      className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12 w-full"
    >
      <Box className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-20">
        <Box className="flex justify-center lg:justify-start w-full lg:w-[400px]">
          <Image
            alt="Baby Metabol"
            src="/Baby_Metabol.jpg"
            width={400}
            height={400}
            className="rounded-xl shadow-lg w-full sm:w-[350px] md:w-[400px] h-auto"
          />
        </Box>

        <Box className="lg:w-1/2 w-full space-y-6">
          <h1
            className="font-semibold text-2xl text-pink-500 text-center lg:text-left"
          >
            {t("title")}{" "}
            <span className="text-2xl text-pink-600 block sm:inline">
              {t("title_span")}
            </span>
          </h1>

          <Box className="flex mt-4 flex-col sm:flex-row items-center justify-center sm:justify-start gap-8 sm:gap-10">
            <ul className="pl-6 text-gray-800 text-sm sm:text-base list-none">
              <li>{t("list.item1")}</li>
              <li>{t("list.item2")}</li>
              <li>{t("list.item3")}</li>
              <li>{t("list.item4")}</li>
              <li>{t("list.item5")}</li>
              <li>{t("list.item6")}</li>
              <li>{t("list.item7")}</li>
              <li>{t("list.item8")}</li>
              <li>{t("list.item9")}</li>
            </ul>

            <div className="w-[220px] sm:w-[200px] h-[220px] sm:h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ ...props }) =>
                      renderCustomizedLabel({
                        ...props,
                        name: data[props.index].name,
                      })
                    }
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${entry.name}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Box>

          <div className="overflow-x-auto mt-6">
            <table className="text-black border border-gray-400 rounded-lg text-sm shadow-md min-w-full">
              <thead className="bg-green-500 text-white">
                <tr>
                  <th className="font-semibold px-4 py-2 border border-gray-400">
                    {t("table.th.col1")}
                  </th>
                  <th className="font-semibold px-4 py-2 border border-gray-400">
                    {t("table.th.col2")}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">
                    {t("table.rows.row1.yoshi")}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {t("table.rows.row1.doza")}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">
                    {t("table.rows.row2.yoshi")}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {t("table.rows.row2.doza")}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 px-4 py-2">
                    {t("table.rows.row3.yoshi")}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {t("table.rows.row3.doza")}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Box>
      </Box>

      <Box className="bg-white py-5 px-5 sm:px-8 shadow-xl mt-10 rounded-xl leading-relaxed">
        <Typography variant="body1" sx={{ lineHeight: 1.6, mb: 2 }}>
          <i className="font-bold">{t("typografies.bolds.b1")}</i>{" "}
          {t("typografies.texts.t1")}
        </Typography>

        <Typography variant="body1" sx={{ lineHeight: 1.6, mb: 2 }}>
          <i className="font-bold">{t("typografies.bolds.b2")}</i>{" "}
          {t("typografies.texts.t2")}
        </Typography>

        <Typography variant="body1" sx={{ lineHeight: 1.6, mb: 2 }}>
          <i className="font-bold">{t("typografies.bolds.b3")}</i>{" "}
          {t("typografies.texts.t3")}
        </Typography>

        <Typography variant="body1" sx={{ lineHeight: 1.6, mb: 2 }}>
          <i className="font-bold">{t("typografies.bolds.b4")}</i>{" "}
          {t("typografies.texts.t4")}
        </Typography>

        <Typography variant="body1" sx={{ lineHeight: 1.6, mb: 2 }}>
          <i className="font-bold">{t("typografies.bolds.b5")}</i>{" "}
          {t("typografies.texts.t5")}
        </Typography>
      </Box>

      <Box component="div" className="mt-10">
        <Box
          component="div"
          className="mb-5 bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-200 rounded-2xl shadow-md p-5 sm:p-8 space-y-5 hover:shadow-lg transition"
        >
          <Typography
            variant="h6"
            className="text-center text-gray-800 font-semibold mb-4"
          >
            {t("typografies_two.caption")}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#d32f2f",
              fontWeight: "bold",
              lineHeight: 1.6,
              letterSpacing: "1px",
              marginBottom: "14px",
            }}
          >
            {t("typografies_two.danger")}
          </Typography>

          <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 2 }}>
            <i className="font-bold">{t("typografies_two.bolds.b1")}</i>{" "}
            {t("typografies_two.texts.t1")}
          </Typography>

          <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 2 }}>
            <i className="font-bold">{t("typografies_two.bolds.b2")}</i>{" "}
            {t("typografies_two.texts.t2")}
          </Typography>

          <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 2 }}>
            <i className="font-bold">{t("typografies_two.bolds.b3")}</i>{" "}
            {t("typografies_two.texts.t3")}
          </Typography>

          <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 2 }}>
            <i className="font-bold">{t("typografies_two.bolds.b4")}</i>{" "}
            {t("typografies_two.texts.t4")}
          </Typography>

          <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 2 }}>
            <i className="font-bold">{t("typografies_two.bolds.b5")}</i>{" "}
            {t("typografies_two.texts.t5")}
          </Typography>

          <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
            <i className="font-bold">{t("typografies_two.bolds.b6")}</i>{" "}
            {t("typografies_two.texts.t6")}
          </Typography>
        </Box>

        <div className="flex justify-center">
          <Button
            variant="contained"
            color="primary"
            className="mt-6 shadow-md hover:shadow-lg bg-gradient-to-r from-yellow-400 to-purple-500 text-white font-semibold tracking-wide py-2 px-6 rounded-lg transition"
          >
            <Link href="tel:+998971177676" className="text-white no-underline">
              {t("button")}
            </Link>
          </Button>
        </div>
      </Box>
    </Box>
  );
};

export default Home;
