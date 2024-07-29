"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Modal from "@mui/material/Modal";
import { Box, Typography, TextField, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../images/logo.svg";
import Phone from "../images/phone.svg";
import Mail from "../images/mail.svg";
import Ktg from "../images/ktg.svg";
import Search from "../images/search.svg";
import User from "../images/user.svg";
import Like from "../images/like.svg";
import Korzinka from "../images/korzinka.svg";
import Hamburger from "../images/burger.svg";
import Call from "../images/call.svg";

const links = [
  { path: "/", title: "Oсновной" },
  { path: "/products", title: "Продукты" },
  { path: "/contact", title: "Контакты" },
  { path: "/payment", title: "Оплата и Доставка" },
  { path: "/news", title: "Новости" },
  { path: "/about", title: "О нас" },
];

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <>
      <header className="fixed z-30 w-full">
        <div className="bg-[#1F1D14]">
          <div className="max-w-[1280px] mx-auto py-[12px] flex justify-between items-center px-4 lg:px-8">
            <div className="flex items-center gap-[36px]">
              <LogoSection />
              <NavLinks />
            </div>
            <ContactInfo />
            <button
              className="lg:hidden p-2"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Image src={Hamburger} alt="Menu" className="text-[#fff]" />
            </button>
          </div>
        </div>
        <SearchSection handleModalOpen={handleModalOpen} />
      </header>
      {sidebarOpen && <Overlay onClick={() => setSidebarOpen(false)} />}
      <MobileSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <UserModal open={modalOpen} onClose={handleModalClose} />
    </>
  );
};

const LogoSection = () => (
  <div className="flex items-center gap-2">
    <Image src={Logo} alt="Logo" />
    <h1 className="text-[#fff] opacity-[0.9] font-semibold text-[24px]">
      Sport <br />
      Market
    </h1>
  </div>
);

const NavLinks = () => (
  <div className="hidden lg:flex gap-[30px]">
    {links.map((item, index) => (
      <Link
        href={item.path}
        key={index}
        className="text-[#fff] opacity-[0.8] text-[14px] font-normal hover:text-[#FBD029]"
      >
        {item.title}
      </Link>
    ))}
  </div>
);

const ContactInfo = () => (
  <div className="hidden lg:flex items-center justify-center gap-[30px]">
    <div className="flex items-center">
      <Image src={Phone} alt="Phone" />
      <p className="text-[#fff] flex items-center gap-1 opacity-[0.8] text-[16px] hover:text-[#FBD029]">
        <span className="text-xs">+998 (90)</span> 565-85-85
      </p>
    </div>
    <div className="flex items-center">
      <Image src={Mail} alt="Mail" />
      <p className="text-[#fff] opacity-[0.8] text-[14px] ">info@gmail.com</p>
    </div>
  </div>
);

const SearchSection = ({ handleModalOpen }) => (
  <div className="bg-[#fff]">
    <div className="max-w-[1280px] mx-auto flex gap-3 justify-between items-center flex-wrap px-4 lg:px-8 py-3">
      <div className="flex items-center gap-3 w-full lg:w-auto">
        <button className="bg-[#1F1D14] text-[#fff] flex py-[12px] px-[20px] lg:px-[40px] rounded-[5px] gap-2 hover:bg-[#FBD029]">
          <Image src={Ktg} alt="Katalog" />
          Каталог
        </button>
        <div className="flex flex-grow bg-[#F2F2F2] rounded-[5px] items-center h-[53px]">
          <input
            type="text"
            placeholder="Поиск"
            className="outline-none bg-[#F2F2F2] pl-5 rounded-l-[5px] flex-grow"
          />
          <button className="p-3 hover:text-[#FBD029]">
            <Image src={Search} alt="Search" />
          </button>
        </div>
      </div>
      <div className="flex gap-4  mt-4 lg:mt-0">
        <button onClick={handleModalOpen}>
          <IconButton src={User} alt="User" />
        </button>
        <IconButton src={Like} alt="Like" />
        <Link href="/korzina">
          <button className="bg-[#F2F2F2] text-[#111] flex py-[12px] px-[20px] lg:px-[40px] rounded-[5px] gap-2 hover:bg-[#FBD029]">
            <Image src={Korzinka} alt="Korzinka" />
            Корзина
          </button>
        </Link>
      </div>
    </div>
  </div>
);

const IconButton = ({ src, alt }) => (
  <div className="bg-[#F2F2F2] flex items-center justify-center p-[10px] lg:p-[13px] rounded-[5px]">
    <Image src={src} alt={alt} />
  </div>
);

const Overlay = ({ onClick }) => (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden"
    onClick={onClick}
  ></div>
);

const MobileSidebar = ({ sidebarOpen, setSidebarOpen }) => (
  <div
    className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform ${
      sidebarOpen ? "translate-x-0" : "translate-x-full"
    } lg:hidden`}
  >
    <div className="p-4">
      <button
        className="text-black mb-4"
        onClick={() => setSidebarOpen(false)}
        aria-label="Close sidebar"
      >
        Закрывать
      </button>
      <div className="flex flex-col gap-4">
        {links.map((item, index) => (
          <Link
            href={item.path}
            key={index}
            className="text-black text-[14px] font-normal"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="mt-8">
        <ContactInfoMobile />
      </div>
    </div>
  </div>
);

const ContactInfoMobile = () => (
  <>
    <div className="flex items-center mb-4">
      <Image src={Call} alt="Call" />
      <p className="text-black flex items-center gap-1 text-[16px]">
        +998 (90) 565-85-85
      </p>
    </div>
    <div className="flex items-center">
      <Image src={Mail} alt="Mail" />
      <p className="text-black text-[14px]">info@gmail.com</p>
    </div>
  </>
);

const UserModal = ({ open, onClose }) => (
  <Modal open={open} onClose={onClose}>
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        borderRadius: "8px",
        boxShadow: 24,
        p: 4,
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">Вход в аккаунт</Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Typography>
        Если Вы не зарегистрированы, нажмите кнопку{" "}
        <Link href="/register" className="text-[#FBD029]">
          Регистрация
        </Link>
      </Typography>
      <Box mt={2}>
        <TextField label="Login" fullWidth variant="outlined" margin="normal" />
        <TextField
          label="Password"
          type="password"
          fullWidth
          variant="outlined"
          margin="normal"
        />
        <Typography align="right" className="text-[#FBD029]" mt={1}>
          Забыли пароль?
        </Typography>
        <Button
          variant="contained"
          fullWidth
          mt={2}
          sx={{ bgcolor: "#FBD029", color: "#111" }}
        >
          Войти
        </Button>
      </Box>
    </Box>
  </Modal>
);

export default Header;
