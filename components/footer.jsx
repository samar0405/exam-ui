// import Image from "next/image";
// import logos from "../images/logo.svg";
// import Phone from "../images/phone.svg";
// import Mail from "../images/mail.svg";
// import Instagram from "../images/instagram.svg";
// import facebuk from "../images/facebook.svg";
// import telegram from "../images/telegram.svg";
// import Line from "../images/Line.svg";

// const Footer = () => {
//   return (
//     <>
//       <footer>
//         <div className="bg-[#FBD029] h-5"></div>
//         <div className="bg-[#1F1D14] pt-[44px]">
//           <div className="max-w-[1280px] mx-auto flex justify-between  flex-wrap">
//             <div className="flex justify-center items-start">
//               <Image src={logos} alt="Logo" className="pt-3" />
//               <h1 className="text-[#fff] opacity-[0.9] font-semibold text-[24px]">
//                 Sport <br />
//                 Market
//               </h1>
//             </div>
//             <div>
//               <p className="text-[#fff]">Контакты</p>
//               <div>
//                 <div className="flex items-center">
//                   <Image src={Phone} alt="Phone" />
//                   <p className="text-[#fff] flex items-center gap-1 opacity-[0.8] text-[16px]">
//                     <span className="text-xs">+998 (90)</span> 565-85-85
//                   </p>
//                 </div>
//                 <div className="flex items-center">
//                   <Image src={Mail} alt="Mail" />
//                   <p className="text-[#fff] opacity-[0.8] text-[14px]">
//                     info@gmail.com
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <h3 className="text-[#fff]">Адресс</h3>
//               <p className="text-[#fff] opacity-[0.8] text-[14px]">
//                 Tashkent Sh. Chilonzor 9 kvartal <br />
//                 12 uy
//               </p>
//             </div>
//             <div>
//               <p className="text-[#fff]">Подписатся</p>
//               <button className="bg-[#Fff] mt-[16px] py-[8px] px-[16px] rounded-[5px]">
//                 support@figma.com
//               </button>{" "}
//               <br />
//               <button className="bg-[#FBD029] mt-[16px] py-[8px] px-[50px] rounded-[5px]">
//                 Отправить
//               </button>
//               <div className="flex items-center gap-4 pt-[48px] pb-[44px]">
//                 <Image src={Instagram} alt="Instagram" />
//                 <Image src={facebuk} alt="facebuk" />
//                 <Image src={telegram} alt="telegram" />
//               </div>
//             </div>
//           </div>
//           <div className="max-w-[1280px] mx-auto">
//             <Image src={Line} alt="Line" />
//             <div className="flex items-center justify-between pb-[22px] pt-[12px]">
//               <div>
//                 <p className="text-[12px] font-light text-[#FFFFFF] opacity-[0.6]">
//                   © 2022 All Rights Reserved
//                 </p>
//               </div>
//               <div className="flex items-center justify-center gap-[40px]">
//                 <p className="text-[12px] font-light text-[#FFFFFF] opacity-[0.6]">
//                   Privacy Policy
//                 </p>
//                 <p className="text-[12px] font-light text-[#FFFFFF] opacity-[0.6]">
//                   Terms of Use
//                 </p>
//                 <p className="text-[12px] font-light text-[#FFFFFF] opacity-[0.6]">
//                   Sales and Refunds
//                 </p>
//                 <p className="text-[12px] font-light text-[#FFFFFF] opacity-[0.6]">
//                   Legal
//                 </p>
//                 <p className="text-[12px] font-light text-[#FFFFFF] opacity-[0.6]">
//                   Site Map
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;
import Image from "next/image";
import logos from "../images/logo.svg";
import Phone from "../images/phone.svg";
import Mail from "../images/mail.svg";
import Instagram from "../images/instagram.svg";
import Facebook from "../images/facebook.svg";
import Telegram from "../images/telegram.svg";
import Line from "../images/Line.svg";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#FBD029] h-5"></div>
      <div className="bg-[#1F1D14] py-8">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 flex flex-wrap justify-between items-start gap-8">
          {/* Logo and Brand */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-3">
              <Image src={logos} alt="Logo" />
              <h1 className="text-[#fff] font-semibold text-[24px] text-center lg:text-left">
                Sport <br />
                Market
              </h1>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center lg:items-start">
            <p className="text-[#fff] font-semibold mb-2 text-center lg:text-left">
              Контакты
            </p>
            <div className="flex flex-col items-center lg:items-start gap-2">
              <div className="flex items-center gap-2">
                <Image src={Phone} alt="Phone" />
                <p className="text-[#fff] text-[16px] opacity-[0.8]">
                  <span className="text-xs">+998 (90)</span> 565-85-85
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image src={Mail} alt="Mail" />
                <p className="text-[#fff] text-[14px] opacity-[0.8]">
                  info@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-[#fff] font-semibold mb-2 text-center lg:text-left">
              Адрес
            </h3>
            <p className="text-[#fff] text-[14px] opacity-[0.8] text-center lg:text-left">
              Tashkent Sh. Chilonzor 9 kvartal <br />
              12 uy
            </p>
          </div>

          {/* Subscription Section */}
          <div className="flex flex-col items-center lg:items-start">
            <p className="text-[#fff] font-semibold mb-2 text-center lg:text-left">
              Подписаться
            </p>
            <input
              type="email"
              placeholder="support@figma.com"
              className="bg-[#fff] text-center lg:text-left py-2 px-4 rounded-[5px] w-full lg:w-auto mt-2"
            />
            <button className="bg-[#FBD029] py-2 px-[82px] rounded-[5px] w-full lg:w-auto mt-4">
              Отправить
            </button>
            <div className="flex items-center gap-4 pt-6">
              <Image src={Instagram} alt="Instagram" />
              <Image src={Facebook} alt="Facebook" />
              <Image src={Telegram} alt="Telegram" />
            </div>
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 mt-8">
          <Image src={Line} alt="Line" className="w-full" />
          <div className="flex flex-col lg:flex-row justify-between items-center py-4 gap-4">
            <p className="text-[12px] text-[#FFFFFF] opacity-[0.6]">
              © 2022 All Rights Reserved
            </p>
            <div className="flex flex-wrap items-center gap-4 lg:gap-[40px] text-[12px] text-[#FFFFFF] opacity-[0.6]">
              <p>Privacy Policy</p>
              <p>Terms of Use</p>
              <p>Sales and Refunds</p>
              <p>Legal</p>
              <p>Site Map</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
