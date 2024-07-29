"use client";

import Right1 from "../../images/right1.svg";
import home from "../../images/home.svg";
import Image from "next/image";
import eye1 from "../../images/eye1.svg";
import date from "../../images/date.svg";
import Korzinka from "../../images/korzinka.svg";
import liner from "../../images/liner.svg";
import right from "../../images/right.svg";
import butsa from "../../images/butsa.svg";
import left from "../../images/left.svg";
import doubleslash from "../../images/doubleslash.svg";
import printer from "../../images/printer.svg";
import share1 from "../../images/share1.svg";

const Payment = () => {
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
                <p className="font-[400] text-[16px] text-[#111] opacity-[0.8]">
                  Продукты
                </p>
                <Image src={Right1} alt="Right1" />
                <p className="font-[400] text-[16px]">Оплата и Доставка</p>
              </div>
              <div className="flex gap-[24px] pb-[120px] flex-wrap">
                <div className="bg-[#fff] h-[256px] rounded-[6px]">
                  <div className="flex pt-[15px] pl-[16px] items-center">
                    <Image src={doubleslash} alt="doubleslash" />
                    <p className="font-[400] text-[16px] pr-[32px]">
                      Оплата и Доставка
                    </p>
                  </div>
                </div>
                <div className="bg-[#fff] rounded-[6px]">
                  <div className="pt-[40px] pb-[70px] pr-[72px] pl-[68px] ">
                    <h1 className="font-medium leading-normal text-[24px] pb-[32px]">
                      Способы оплаты
                    </h1>
                    <p className="font-normal text-[16px] text-[#111] pb-[32px]">
                      Для того, чтобы оплатить товар, Вам нужно перейти в
                      «Корзину» и <br />
                      выбрать тот товар, который Вы хотите купить.
                    </p>
                    <p className="font-normal text-[16px] text-[#111] pb-[32px]">
                      После перехода в Корзину, откроется список товаров, <br />
                      которые Вы добавили. Далее, нажимаем кнопку «Оформить
                      заказ».
                      <br />
                      В окне, появится «Контактная информация» и «Способы
                      доставки», <br />
                      которые Вам не обходимо заполнить.
                    </p>
                    <p className="font-normal text-[16px] text-[#111] pb-[32px]">
                      Вы можете выбрать более подходящий для Вас способ оплаты:
                      <br />
                      -Оплата на месте; <br />
                      -Оплата по терминалу; <br />
                      -Оплата через платёжные системы, такие как CLICK, Payme.
                    </p>
                    <p className="font-normal text-[16px] text-[#111] pb-[32px]">
                      Оплатить покупки можно наличными при получении.
                      Убедительная <br />
                      просьба вначале ознакомиться с товаром, убедиться в
                      отсутствии <br />
                      дефектов в присутствии курьера, после чего оплачивать
                      сумму.
                    </p>
                    <h1 className="font-medium leading-normal text-[24px] pb-[32px]">
                      Доставка
                    </h1>
                    <p className="font-normal text-[16px] text-[#111] pb-[32px]">
                      Тарифы на доставку товаров по Ташкенту:
                    </p>
                    <p className="font-normal text-[16px] text-[#111] pb-[32px]">
                      -20.000 сум для товаров до 150.000 сум <br />
                      -Бесплатная доставка для всех товаров от 150.000 сум
                    </p>
                    <p className="font-normal text-[16px] text-[#111] pb-[32px]">
                      Тарифы на доставку товаров по всех регионов: <br />
                      -Платная доставка для всех товаров по согласованной цене
                      <br />
                      -Бесплатная установка для всех тренажеров
                    </p>
                  </div>
                </div>
              </div>
              <div className="pb-[76px]">
                <div className="flex flex-wrap justify-between items-center pt-[68px] pb-[32px]">
                  <h1 className="text-[32px] font-medium">Акция</h1>
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
                    <h2 className="text-[#FF1313] text-[20px] font-bold leading-normal mt-4">
                      500 000 uzs
                    </h2>
                    <Image src={liner} alt="liner" className="w-20 my-4" />
                    <button className="bg-[#FBD029] text-[#111] w-full py-[15px] flex justify-center items-center rounded-b-[5px]">
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
                    <h2 className="text-[#FF1313] text-[20px] font-bold leading-normal mt-4">
                      500 000 uzs
                    </h2>
                    <Image src={liner} alt="liner" className="w-20 my-4" />
                    <button className="bg-[#FBD029] text-[#111] w-full py-[15px] flex justify-center items-center rounded-b-[5px]">
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
                    <h2 className="text-[#FF1313] text-[20px] font-bold leading-normal mt-4">
                      500 000 uzs
                    </h2>
                    <Image src={liner} alt="liner" className="w-20 my-4" />
                    <button className="bg-[#FBD029] text-[#111] w-full py-[15px] flex justify-center items-center rounded-b-[5px]">
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
                    <h2 className="text-[#FF1313] text-[20px] font-bold leading-normal mt-4">
                      500 000 uzs
                    </h2>
                    <Image src={liner} alt="liner" className="w-20 my-4" />
                    <button className="bg-[#FBD029] text-[#111] w-full py-[15px] flex justify-center items-center rounded-b-[5px]">
                      <Image src={Korzinka} alt="Korzinka" className="mr-2" />
                      Корзина
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Payment;
