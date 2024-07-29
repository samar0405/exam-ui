"use client";
import Right1 from "../../images/right1.svg";
import home from "../../images/home.svg";
import Image from "next/image";
import floor from "../../images/floor.svg";
import board from "../../images/board.svg";
import Korzinka from "../../images/korzinka.svg";
import list from "../../images/list.svg";
import liner from "../../images/liner.svg";
import right from "../../images/right.svg";
import butsa from "../../images/butsa.svg";
import left from "../../images/left.svg";
import React, { useState } from "react";

import {
  Slider,
  TextField,
  Select,
  MenuItem,
  Button,
  InputLabel,
  FormControl,
} from "@mui/material";

const Products = () => {
  const [price, setPrice] = useState([3000, 40000]);
  const [article, setArticle] = useState("");
  const [category, setCategory] = useState("Все");
  const [newItem, setNewItem] = useState("Все");
  const [promotion, setPromotion] = useState("Все");

  const handlePriceChange = (event, newValue) => {
    setPrice(newValue);
  };
  return (
    <>
      <main className="w-full mt-44">
        <div className="bg-[#F2F2F2]">
          <div className="max-w-[1220px] mx-auto">
            <div>
              <div className="flex flex-wrap items-center gap-2 md:gap-[10px] pt-[28px] pb-[20px]">
                <Image src={home} alt="home" />
                <p className="font-[400] text-[16px] text-[#111] opacity-[0.8]">
                  Главная
                </p>
                <Image src={Right1} alt="Right1" />
                <p className="font-[400] text-[16px]">Продукты</p>
              </div>
            </div>
            <div className="flex justify-between gap-6 flex-wrap">
              <div>
                <div
                  style={{
                    padding: "16px",
                    backgroundColor: "white",
                    borderRadius: "8px",
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "bold",
                      marginBottom: "16px",
                    }}
                  >
                    Фильтр
                  </h3>
                  <div style={{ marginBottom: "16px" }}>
                    <InputLabel>Цена</InputLabel>
                    <Slider
                      value={price}
                      onChange={handlePriceChange}
                      valueLabelDisplay="auto"
                      min={3000}
                      max={40000}
                      style={{ color: "#fbc02d" }}
                    />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>{price[0]} uzs</span>
                      <span>{price[1]} uzs</span>
                    </div>
                  </div>
                  <div style={{ marginBottom: "16px" }}>
                    <TextField
                      label="Артикул"
                      variant="outlined"
                      fullWidth
                      value={article}
                      onChange={(e) => setArticle(e.target.value)}
                    />
                  </div>
                  <div style={{ marginBottom: "16px" }}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel>Выберите категорию</InputLabel>
                      <Select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        label="Выберите категорию"
                      >
                        <MenuItem value="Все">Все</MenuItem>
                        <MenuItem value="Категория 1">Категория 1</MenuItem>
                        <MenuItem value="Категория 2">Категория 2</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div style={{ marginBottom: "16px" }}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel>Новинка</InputLabel>
                      <Select
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)}
                        label="Новинка"
                      >
                        <MenuItem value="Все">Все</MenuItem>
                        <MenuItem value="Да">Да</MenuItem>
                        <MenuItem value="Нет">Нет</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div style={{ marginBottom: "16px" }}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel>Акция</InputLabel>
                      <Select
                        value={promotion}
                        onChange={(e) => setPromotion(e.target.value)}
                        label="Акция"
                      >
                        <MenuItem value="Все">Все</MenuItem>
                        <MenuItem value="Да">Да</MenuItem>
                        <MenuItem value="Нет">Нет</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <Button
                    variant="contained"
                    fullWidth
                    style={{ backgroundColor: "#fbc02d", color: "white" }}
                  >
                    Показать результат
                  </Button>
                </div>
              </div>

              <div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-[24px]">
                    <button className="flex items-center bg-[#fff] px-[16px] py-[8px] rounded-[4px]">
                      <p>Сортировать</p>
                      <Image src={floor} alt="Sort" />
                    </button>
                    <button className="flex items-center bg-[#fff] px-[16px] py-[8px] rounded-[4px]">
                      <p>Все продукты</p>
                      <Image src={floor} alt="All Products" />
                    </button>
                  </div>
                  <div className="flex items-center gap-[24px] justify-end">
                    <button className="flex items-center bg-[#fff] px-[12px] py-[4px] rounded-[4px]">
                      <Image src={board} alt="Board View" />
                    </button>
                    <button className="flex items-center bg-[#fff] px-[12px] py-[4px] rounded-[4px]">
                      <Image src={list} alt="List View" />
                    </button>
                  </div>
                </div>
                <div className="pt-8 flex justify-between items-center gap-12 flex-wrap">
                  <div className="w-[275px] h-[416px] rounded-[5px] bg-[#fff]">
                    <Image src={butsa} alt="butsa" className="p-[25px]" />
                    <p className="text-[20px] font-normal leading-normal pl-4">
                      Бутса Nike Mercurial <br />
                      Superfly 8 FG
                    </p>
                    <h2 className="text-[#FF1313] pl-4 text-[20px] font-bold leading-normal pt-7">
                      500 000 uzs
                    </h2>
                    <Image src={liner} alt="liner" className="pl-4 w-20 pb-7" />
                    <button className="bg-[#FBD029] text-[#111] flex pt-[15px] pb-[15px] pl-[91px] pr-[91px] gap-2 justify-center items-center rounded-b-[5px]">
                      <Image src={Korzinka} alt="Korzinka" />
                      Корзина
                    </button>
                  </div>
                  <div className="w-[275px] h-[416px] rounded-[5px] bg-[#fff]">
                    <Image src={butsa} alt="butsa" className="p-[25px]" />
                    <p className="text-[20px] font-normal leading-normal pl-4">
                      Бутса Nike Mercurial <br />
                      Superfly 8 FG
                    </p>
                    <h2 className="text-[#FF1313] pl-4 text-[20px] font-bold leading-normal pt-7">
                      500 000 uzs
                    </h2>
                    <Image src={liner} alt="liner" className="pl-4 w-20 pb-7" />
                    <button className="bg-[#FBD029] text-[#111] flex pt-[15px] pb-[15px] pl-[91px] pr-[91px] gap-2 justify-center items-center rounded-b-[5px]">
                      <Image src={Korzinka} alt="Korzinka" />
                      Корзина
                    </button>
                  </div>
                  <div className="w-[275px] h-[416px] rounded-[5px] bg-[#fff]">
                    <Image src={butsa} alt="butsa" className="p-[25px]" />
                    <p className="text-[20px] font-normal leading-normal pl-4">
                      Бутса Nike Mercurial <br />
                      Superfly 8 FG
                    </p>
                    <h2 className="text-[#FF1313] pl-4 text-[20px] font-bold leading-normal pt-7">
                      500 000 uzs
                    </h2>
                    <Image src={liner} alt="liner" className="pl-4 w-20 pb-7" />
                    <button className="bg-[#FBD029] text-[#111] flex pt-[15px] pb-[15px] pl-[91px] pr-[91px] gap-2 justify-center items-center rounded-b-[5px]">
                      <Image src={Korzinka} alt="Korzinka" />
                      Корзина
                    </button>
                  </div>
                </div>
                <div className="pt-8 flex justify-between items-center gap-12  flex-wrap">
                  <div className="w-[275px] h-[416px] rounded-[5px] bg-[#fff]">
                    <Image src={butsa} alt="butsa" className="p-[25px]" />
                    <p className="text-[20px] font-normal leading-normal pl-4">
                      Бутса Nike Mercurial <br />
                      Superfly 8 FG
                    </p>
                    <h2 className="text-[#FF1313] pl-4 text-[20px] font-bold leading-normal pt-7">
                      500 000 uzs
                    </h2>
                    <Image src={liner} alt="liner" className="pl-4 w-20 pb-7" />
                    <button className="bg-[#FBD029] text-[#111] flex pt-[15px] pb-[15px] pl-[91px] pr-[91px] gap-2 justify-center items-center rounded-b-[5px]">
                      <Image src={Korzinka} alt="Korzinka" />
                      Корзина
                    </button>
                  </div>
                  <div className="w-[275px] h-[416px] rounded-[5px] bg-[#fff]">
                    <Image src={butsa} alt="butsa" className="p-[25px]" />
                    <p className="text-[20px] font-normal leading-normal pl-4">
                      Бутса Nike Mercurial <br />
                      Superfly 8 FG
                    </p>
                    <h2 className="text-[#FF1313] pl-4 text-[20px] font-bold leading-normal pt-7">
                      500 000 uzs
                    </h2>
                    <Image src={liner} alt="liner" className="pl-4 w-20 pb-7" />
                    <button className="bg-[#FBD029] text-[#111] flex pt-[15px] pb-[15px] pl-[91px] pr-[91px] gap-2 justify-center items-center rounded-b-[5px]">
                      <Image src={Korzinka} alt="Korzinka" />
                      Корзина
                    </button>
                  </div>
                  <div className="w-[275px] h-[416px] rounded-[5px] bg-[#fff]">
                    <Image src={butsa} alt="butsa" className="p-[25px]" />
                    <p className="text-[20px] font-normal leading-normal pl-4">
                      Бутса Nike Mercurial <br />
                      Superfly 8 FG
                    </p>
                    <h2 className="text-[#FF1313] pl-4 text-[20px] font-bold leading-normal pt-7">
                      500 000 uzs
                    </h2>
                    <Image src={liner} alt="liner" className="pl-4 w-20 pb-7" />
                    <button className="bg-[#FBD029] text-[#111] flex pt-[15px] pb-[15px] pl-[91px] pr-[91px] gap-2 justify-center items-center rounded-b-[5px]">
                      <Image src={Korzinka} alt="Korzinka" />
                      Корзина
                    </button>
                  </div>
                </div>
                <div className="pt-8 flex justify-between items-center gap-12  flex-wrap">
                  <div className="w-[275px] h-[416px] rounded-[5px] bg-[#fff]">
                    <Image src={butsa} alt="butsa" className="p-[25px]" />
                    <p className="text-[20px] font-normal leading-normal pl-4">
                      Бутса Nike Mercurial <br />
                      Superfly 8 FG
                    </p>
                    <h2 className="text-[#FF1313] pl-4 text-[20px] font-bold leading-normal pt-7">
                      500 000 uzs
                    </h2>
                    <Image src={liner} alt="liner" className="pl-4 w-20 pb-7" />
                    <button className="bg-[#FBD029] text-[#111] flex pt-[15px] pb-[15px] pl-[91px] pr-[91px] gap-2 justify-center items-center rounded-b-[5px]">
                      <Image src={Korzinka} alt="Korzinka" />
                      Корзина
                    </button>
                  </div>
                  <div className="w-[275px] h-[416px] rounded-[5px] bg-[#fff]">
                    <Image src={butsa} alt="butsa" className="p-[25px]" />
                    <p className="text-[20px] font-normal leading-normal pl-4">
                      Бутса Nike Mercurial <br />
                      Superfly 8 FG
                    </p>
                    <h2 className="text-[#FF1313] pl-4 text-[20px] font-bold leading-normal pt-7">
                      500 000 uzs
                    </h2>
                    <Image src={liner} alt="liner" className="pl-4 w-20 pb-7" />
                    <button className="bg-[#FBD029] text-[#111] flex pt-[15px] pb-[15px] pl-[91px] pr-[91px] gap-2 justify-center items-center rounded-b-[5px]">
                      <Image src={Korzinka} alt="Korzinka" />
                      Корзина
                    </button>
                  </div>
                  <div className="w-[275px] h-[416px] rounded-[5px] bg-[#fff]">
                    <Image src={butsa} alt="butsa" className="p-[25px]" />
                    <p className="text-[20px] font-normal leading-normal pl-4">
                      Бутса Nike Mercurial <br />
                      Superfly 8 FG
                    </p>
                    <h2 className="text-[#FF1313] pl-4 text-[20px] font-bold leading-normal pt-7">
                      500 000 uzs
                    </h2>
                    <Image src={liner} alt="liner" className="pl-4 w-20 pb-7" />
                    <button className="bg-[#FBD029] text-[#111] flex pt-[15px] pb-[15px] pl-[91px] pr-[91px] gap-2 justify-center items-center rounded-b-[5px]">
                      <Image src={Korzinka} alt="Korzinka" />
                      Корзина
                    </button>
                  </div>
                </div>
                <div className="pt-8 flex justify-between items-center gap-12  flex-wrap">
                  <div className="w-[275px] h-[416px] rounded-[5px] bg-[#fff]">
                    <Image src={butsa} alt="butsa" className="p-[25px]" />
                    <p className="text-[20px] font-normal leading-normal pl-4">
                      Бутса Nike Mercurial <br />
                      Superfly 8 FG
                    </p>
                    <h2 className="text-[#FF1313] pl-4 text-[20px] font-bold leading-normal pt-7">
                      500 000 uzs
                    </h2>
                    <Image src={liner} alt="liner" className="pl-4 w-20 pb-7" />
                    <button className="bg-[#FBD029] text-[#111] flex pt-[15px] pb-[15px] pl-[91px] pr-[91px] gap-2 justify-center items-center rounded-b-[5px]">
                      <Image src={Korzinka} alt="Korzinka" />
                      Корзина
                    </button>
                  </div>
                  <div className="w-[275px] h-[416px] rounded-[5px] bg-[#fff]">
                    <Image src={butsa} alt="butsa" className="p-[25px]" />
                    <p className="text-[20px] font-normal leading-normal pl-4">
                      Бутса Nike Mercurial <br />
                      Superfly 8 FG
                    </p>
                    <h2 className="text-[#FF1313] pl-4 text-[20px] font-bold leading-normal pt-7">
                      500 000 uzs
                    </h2>
                    <Image src={liner} alt="liner" className="pl-4 w-20 pb-7" />
                    <button className="bg-[#FBD029] text-[#111] flex pt-[15px] pb-[15px] pl-[91px] pr-[91px] gap-2 justify-center items-center rounded-b-[5px]">
                      <Image src={Korzinka} alt="Korzinka" />
                      Корзина
                    </button>
                  </div>
                  <div className="w-[275px] h-[416px] rounded-[5px] bg-[#fff]">
                    <Image src={butsa} alt="butsa" className="p-[25px]" />
                    <p className="text-[20px] font-normal leading-normal pl-4">
                      Бутса Nike Mercurial <br />
                      Superfly 8 FG
                    </p>
                    <h2 className="text-[#FF1313] pl-4 text-[20px] font-bold leading-normal pt-7">
                      500 000 uzs
                    </h2>
                    <Image src={liner} alt="liner" className="pl-4 w-20 pb-7" />
                    <button className="bg-[#FBD029] text-[#111] flex pt-[15px] pb-[15px] pl-[91px] pr-[91px] gap-2 justify-center items-center rounded-b-[5px]">
                      <Image src={Korzinka} alt="Korzinka" />
                      Корзина
                    </button>
                  </div>
                </div>
                <div className="pt-8 flex justify-between items-center gap-12  flex-wrap">
                  <div className="w-[275px] h-[416px] rounded-[5px] bg-[#fff]">
                    <Image src={butsa} alt="butsa" className="p-[25px]" />
                    <p className="text-[20px] font-normal leading-normal pl-4">
                      Бутса Nike Mercurial <br />
                      Superfly 8 FG
                    </p>
                    <h2 className="text-[#FF1313] pl-4 text-[20px] font-bold leading-normal pt-7">
                      500 000 uzs
                    </h2>
                    <Image src={liner} alt="liner" className="pl-4 w-20 pb-7" />
                    <button className="bg-[#FBD029] text-[#111] flex pt-[15px] pb-[15px] pl-[91px] pr-[91px] gap-2 justify-center items-center rounded-b-[5px]">
                      <Image src={Korzinka} alt="Korzinka" />
                      Корзина
                    </button>
                  </div>
                  <div className="w-[275px] h-[416px] rounded-[5px] bg-[#fff]">
                    <Image src={butsa} alt="butsa" className="p-[25px]" />
                    <p className="text-[20px] font-normal leading-normal pl-4">
                      Бутса Nike Mercurial <br />
                      Superfly 8 FG
                    </p>
                    <h2 className="text-[#FF1313] pl-4 text-[20px] font-bold leading-normal pt-7">
                      500 000 uzs
                    </h2>
                    <Image src={liner} alt="liner" className="pl-4 w-20 pb-7" />
                    <button className="bg-[#FBD029] text-[#111] flex pt-[15px] pb-[15px] pl-[91px] pr-[91px] gap-2 justify-center items-center rounded-b-[5px]">
                      <Image src={Korzinka} alt="Korzinka" />
                      Корзина
                    </button>
                  </div>
                  <div className="w-[275px] h-[416px] rounded-[5px] bg-[#fff]">
                    <Image src={butsa} alt="butsa" className="p-[25px]" />
                    <p className="text-[20px] font-normal leading-normal pl-4">
                      Бутса Nike Mercurial <br />
                      Superfly 8 FG
                    </p>
                    <h2 className="text-[#FF1313] pl-4 text-[20px] font-bold leading-normal pt-7">
                      500 000 uzs
                    </h2>
                    <Image src={liner} alt="liner" className="pl-4 w-20 pb-7" />
                    <button className="bg-[#FBD029] text-[#111] flex pt-[15px] pb-[15px] pl-[91px] pr-[91px] gap-2 justify-center items-center rounded-b-[5px]">
                      <Image src={Korzinka} alt="Korzinka" />
                      Корзина
                    </button>
                  </div>
                </div>
                <button className="w-full mt-[56px] bg-[#fff] py-[16px] rounded-[5px]">
                  Показать ещё
                </button>
              </div>
            </div>
            <div className="pb-[76px]">
              <div className="flex flex-wrap justify-between items-center pt-[68px] pb-[32px]">
                <h1 className="text-[32px] font-medium">
                  Реконмендуемые продукты
                </h1>
                <div className="flex gap-8 mt-4 md:mt-0">
                  <button className="bg-[#fff] p-4 rounded-full">
                    <Image src={left} alt="left" />
                  </button>
                  <button className="bg-[#fff] p-4 rounded-full">
                    <Image src={right} alt="right" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="w-full bg-[#fff] rounded-[5px] p-4">
                  <Image src={butsa} alt="butsa" className="mb-4" />
                  <p className="text-[20px] font-normal leading-normal">
                    Бутса Nike Mercurial <br />
                    Superfly 8 FG
                  </p>
                  <h2 className="text-[20px] font-bold leading-normal mt-4">
                    250 000 uzs
                  </h2>

                  <button className="bg-[#FBD029] text-[#111] w-full py-[15px] flex justify-center items-center rounded-b-[5px] mt-12">
                    <Image src={Korzinka} alt="Korzinka" className="mr-2" />
                    Корзина
                  </button>
                </div>
                <div className="w-full bg-[#fff] rounded-[5px] p-4">
                  <Image src={butsa} alt="butsa" className="mb-4" />
                  <p className="text-[20px] font-normal leading-normal">
                    Бутса Nike Mercurial <br />
                    Superfly 8 FG
                  </p>
                  <h2 className="text-[20px] font-bold leading-normal mt-4">
                    250 000 uzs
                  </h2>

                  <button className="bg-[#FBD029] text-[#111] w-full py-[15px] flex justify-center items-center rounded-b-[5px] mt-12">
                    <Image src={Korzinka} alt="Korzinka" className="mr-2" />
                    Корзина
                  </button>
                </div>
                <div className="w-full bg-[#fff] rounded-[5px] p-4">
                  <Image src={butsa} alt="butsa" className="mb-4" />
                  <p className="text-[20px] font-normal leading-normal">
                    Бутса Nike Mercurial <br />
                    Superfly 8 FG
                  </p>
                  <h2 className="text-[20px] font-bold leading-normal mt-4">
                    250 000 uzs
                  </h2>

                  <button className="bg-[#FBD029] text-[#111] w-full py-[15px] flex justify-center items-center rounded-b-[5px] mt-12">
                    <Image src={Korzinka} alt="Korzinka" className="mr-2" />
                    Корзина
                  </button>
                </div>
                <div className="w-full bg-[#fff] rounded-[5px] p-4">
                  <Image src={butsa} alt="butsa" className="mb-4" />
                  <p className="text-[20px] font-normal leading-normal">
                    Бутса Nike Mercurial <br />
                    Superfly 8 FG
                  </p>
                  <h2 className="text-[20px] font-bold leading-normal mt-4">
                    250 000 uzs
                  </h2>

                  <button className="bg-[#FBD029] text-[#111] w-full py-[15px] flex justify-center items-center rounded-b-[5px] mt-12">
                    <Image src={Korzinka} alt="Korzinka" className="mr-2" />
                    Корзина
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Products;
