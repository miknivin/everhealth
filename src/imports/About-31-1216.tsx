import svgPaths from "./svg-vdsy23u61f";
import clsx from "clsx";
import imgBag5 from "@/assets/0cc12c30ffef0466f2779edadcefe9250d10e34e.png";
import imgLogo2 from "@/assets/91af2b2974b632c0dcaf1add2472d0679b8ab69b.png";
import imgOhKElOkQ3Re1 from "@/assets/0ea0dcc8f0922b9597d6bf10e35abbf68b863f93.png";
import imgGhMSApoKo0 from "@/assets/467affd29fd1afc796b25019a92722e0474a73f3.png";
import imgGhMSApoKo1 from "@/assets/99131567b63ac48b2ddcea0c0d906d2b8b3b984b.png";
import imgRukI4QZGlQs from "@/assets/f66d9da2ae2ee4fbe305351c838c2ed3294bbeb3.png";
import imgPostcardEasterPalmSundayPalmLeavesLaidOutBackgroundOldPlasterWithSpace1 from "@/assets/8d05ee687cf04083eb2808fb562f541caf8e7fe4.png";
import imgLogo from "@/assets/89f199b8c0610e515928d4b8f3de9b1e7dc1946c.png";
import { imgOhKElOkQ3Re } from "./svg-c68nt";
type BgBackgroundImageProps = {
  additionalClassNames?: string;
};

function BgBackgroundImage({ additionalClassNames = "" }: BgBackgroundImageProps) {
  return (
    <div className={clsx("absolute size-[28px] top-[328px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <circle cx="14" cy="14" fill="var(--fill-0, white)" id="BG" r="14" />
      </svg>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="absolute h-[36px] left-[338px] top-[84.5px] w-[474px]" data-name="HeroSection">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[0_88.61%_36.11%_0] leading-[normal] text-[#802367] text-[20px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Home
      </p>
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[5.56%_64.14%_30.56%_18.35%] leading-[normal] text-[#7c5f47] text-[20px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        About Us
      </p>
      <p className="absolute bottom-1/4 font-['Roboto:Medium',sans-serif] font-medium leading-[normal] left-[42.83%] right-[32.28%] text-[#7c5f47] text-[20px] text-nowrap top-[11.11%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Our Products
      </p>
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[16.67%_4.43%_19.44%_74.68%] leading-[normal] text-[#7c5f47] text-[20px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Contact Us
      </p>
      <div className="absolute bottom-0 left-[0.42%] right-[89.03%] top-full" data-name="Line1">
        <div className="absolute inset-[-3px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 3">
            <line id="Line1" stroke="var(--stroke-0, #802367)" strokeLinecap="round" strokeWidth="3" x1="1.5" x2="48.5" y1="1.5" y2="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Searchbar() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="searchbar">
      <div className="[grid-area:1_/_1] bg-[#802367] ml-0 mt-0 rounded-[13px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] size-[41px]" data-name="Rectangle33" />
      <div className="[grid-area:1_/_1] bg-[rgba(124,95,71,0.15)] blur-[5px] filter h-[41px] ml-0 mt-0 rounded-[13px] w-[135px]" data-name="Rectangle34" />
      <div className="[grid-area:1_/_1] h-[21.282px] ml-[11px] mt-[11.93px] relative w-[19px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 21.2824">
          <path d={svgPaths.p18f30b80} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <p className="[grid-area:1_/_1] font-['Roboto:Medium',sans-serif] font-medium h-[20.162px] leading-[normal] ml-[53px] mt-[13.05px] relative text-[15px] text-[rgba(128,35,103,0.75)] w-[60px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Search...
      </p>
    </div>
  );
}

function Group34() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[10px] mt-[10px] place-items-start relative" data-name="Group89">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[22px]" data-name="bag5">
        <img loading="lazy" alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBag5.src} />
      </div>
    </div>
  );
}

function Cart() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Cart">
      <div className="[grid-area:1_/_1] bg-[#802367] ml-0 mt-0 rounded-[13px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] size-[41px]" data-name="Rectangle35" />
      <Group34 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[35px] items-center leading-[0] left-[928px] top-[82px]">
      <Searchbar />
      <Cart />
    </div>
  );
}

function Group42() {
  return (
    <div className="absolute contents leading-[normal] left-[calc(50%-0.5px)] top-[552px] translate-x-[-50%]">
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold left-[calc(50%-63px)] text-[#91086c] text-[35px] text-nowrap top-[552px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mission
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal left-[calc(50%-0.5px)] text-[20px] text-[rgba(128,35,103,0.75)] text-center top-[618px] translate-x-[-50%] w-[845px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        We are producing 100% natural foods by cooperate with our local farmers. It helps us be the part of the prosperity of our farming families and our community.
      </p>
    </div>
  );
}

function Group43() {
  return (
    <div className="absolute contents leading-[normal] left-1/2 top-[747px] translate-x-[-50%]">
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold left-[575px] text-[#91086c] text-[35px] text-nowrap top-[747px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Vision
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal left-1/2 text-[20px] text-[rgba(128,35,103,0.75)] text-center top-[813px] translate-x-[-50%] w-[1068px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Our vision at EVERHEALTH is to be the best natural food products manufacturing company and drive our customer to embrace a healthier, happier and sustainable lifestyle. Our decades of farming experience, innovation and traditional practices can serve trusted food products. Be the right choice for healthy diets.
      </p>
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute contents left-0 top-[499px]">
      <div className="absolute h-[248px] left-0 top-[499px] w-[1280px]" data-name="Trendyproductbg">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 248">
          <path d={svgPaths.p21794b00} fill="var(--fill-0, #FFF0E7)" id="Trendyproductbg" />
        </svg>
      </div>
      <div className="absolute flex h-[249px] items-center justify-center left-1/2 top-[706px] translate-x-[-50%] w-[1280px]">
        <div className="flex-none scale-y-[-100%]">
          <div className="h-[249px] relative w-[1280px]" data-name="Trendyproductbg">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 249">
              <path d={svgPaths.p33fdf700} fill="var(--fill-0, #F7FFDF)" id="Trendyproductbg" />
            </svg>
          </div>
        </div>
      </div>
      <Group42 />
      <Group43 />
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute contents left-[551px] top-[80px]" data-name="Group203">
      <p className="absolute font-['HK_Grotesk:SemiBold',sans-serif] leading-[20px] left-[551px] not-italic text-[20px] text-nowrap text-white top-[80px]">
        Most Popular<span>{` Categories`}</span>
      </p>
      <ul className="absolute block font-['Roboto:Regular',sans-serif] font-normal leading-[0] left-[551px] text-[16px] text-nowrap text-white top-[136px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[37px]">Staples</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[37px]">Beverages</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[37px]">Personal Care</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[37px]">Home Care</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[37px]">Baby Care</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[37px]">{`Vegetables & Fruits`}</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[37px]">{`Snacks & Foods`}</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[37px]">{`Dairy & Bakery`}</span>
        </li>
      </ul>
      <div className="absolute h-0 left-[551px] top-[116px] w-[219px]" data-name="Line31">
        <div className="absolute inset-[-3px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 219 3">
            <line id="Line31" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="3" x1="1.5" x2="217.5" y1="1.5" y2="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute contents left-[850px] top-[80px]" data-name="Group202">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-[850px] text-[20px] text-nowrap text-white top-[80px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Customer Services
      </p>
      <ul className="absolute block font-['Roboto:Regular',sans-serif] font-normal leading-[0] left-[850px] text-[16px] text-nowrap text-white top-[136px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[37px]">About Us</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[37px]">{`Terms & Conditions`}</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[37px]">FAQ</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[37px]">Privacy Policy</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[37px]">E-waste Policy</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[37px]">{`Cancellation & Return Policy`}</span>
        </li>
      </ul>
      <div className="absolute h-0 left-[850px] top-[116px] w-[167px]" data-name="Line32">
        <div className="absolute inset-[-3px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 167 3">
            <line id="Line32" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="3" x1="1.5" x2="165.5" y1="1.5" y2="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AntDesignWhatsAppOutlined() {
  return (
    <div className="absolute left-[83px] size-[24px] top-[198px]" data-name="ant-design:whats-app-outlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ant-design:whats-app-outlined">
          <path d={svgPaths.p18202900} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p6ef0e00} fill="var(--fill-0, white)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents left-[83px] top-[198px]" data-name="Group60">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-[118px] text-[16px] text-nowrap text-white top-[220px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        +1 202-918-2132
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-[118px] text-[16px] text-nowrap text-white top-[198px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Whats App
      </p>
      <AntDesignWhatsAppOutlined />
    </div>
  );
}

function IconlyTwoToneCall() {
  return (
    <div className="absolute inset-[10.42%]" data-name="Iconly/Two-tone/Call">
      <div className="absolute inset-[-3.95%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.5001 20.5001">
          <g id="Iconly/Two-tone/Call">
            <g id="Call_2">
              <path clipRule="evenodd" d={svgPaths.p90a5500} fillRule="evenodd" id="Stroke-1_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </g>
            <path d={svgPaths.pb0ba700} id="Stroke-3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Call() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[83px] overflow-clip size-[24px] top-[260px]" data-name="Call">
      <IconlyTwoToneCall />
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents left-[83px] top-[260px]" data-name="Group61">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-[118px] text-[16px] text-nowrap text-white top-[283px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        +1 202-918-2132
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-[118px] text-[16px] text-nowrap text-white top-[261px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Call Us
      </p>
      <Call />
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute contents left-1/2 top-0 translate-x-[-50%]" data-name="Group305">
      <div className="absolute bg-[#7c5f47] h-[592px] left-0 top-0 w-[1283px]" data-name="Rectangle24" />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-[86px] text-[20px] text-nowrap text-white top-[158px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Contact Us
      </p>
      <div className="absolute h-0 left-[calc(50%+0.5px)] top-[517px] translate-x-[-50%] w-[1200px]" data-name="Line34">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1200 1">
            <line id="Line34" stroke="var(--stroke-0, #FFDABC)" x2="1200" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Group39 />
      <Group38 />
      <Group27 />
      <Group28 />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-[476px] text-[20px] text-nowrap text-white top-[542px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        © 2022 All rights reserved. Reliance Retail Ltd.
      </p>
    </div>
  );
}

function Group41() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group40 />
      <div className="absolute h-[49px] left-[calc(50%-477.5px)] top-[80px] translate-x-[-50%] w-[160px]" data-name="Logo_2">
        <img loading="lazy" alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogo2.src} />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute h-[9.032px] left-[92.03px] top-[337.94px] w-[11.174px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.1739 9.03226">
        <g id="Group">
          <path d={svgPaths.p27bf5700} fill="var(--fill-0, #802367)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LogoTwitter() {
  return (
    <div className="absolute contents left-[92.03px] top-[337.94px]" data-name="logo-twitter 2">
      <Group />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute contents left-[83px] top-[328px]" data-name="1">
      <BgBackgroundImage additionalClassNames="left-[83px]" />
      <LogoTwitter />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute h-[12.175px] left-[133.84px] top-[336.13px] w-[6.323px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.32258 12.1749">
        <g id="Group">
          <path d={svgPaths.p16f66d00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LogoFbSimple() {
  return (
    <div className="absolute contents left-[133.84px] top-[336.13px]" data-name="logo-fb-simple 2">
      <Group1 />
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute contents left-[123px] top-[328px]" data-name="2">
      <div className="absolute left-[123px] size-[28px] top-[328px]" data-name="BG">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <circle cx="14" cy="14" fill="var(--fill-0, #802367)" id="BG" r="14" />
        </svg>
      </div>
      <LogoFbSimple />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute h-[13.549px] left-[170.23px] top-[335.23px] w-[13.548px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5484 13.549">
        <g id="Group">
          <path d={svgPaths.pb96a380} fill="var(--fill-0, #802367)" id="Vector" />
          <path d={svgPaths.pb23d800} fill="var(--fill-0, #802367)" id="Vector_2" />
          <path d={svgPaths.p1d3a1c80} fill="var(--fill-0, #802367)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function LogoInstagram() {
  return (
    <div className="absolute contents left-[170.23px] top-[335.23px]" data-name="logo-instagram 1">
      <Group2 />
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute contents left-[163px] top-[328px]" data-name="3">
      <BgBackgroundImage additionalClassNames="left-[163px]" />
      <LogoInstagram />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute h-[12.645px] left-[211.13px] top-[335.23px] w-[12.96px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9598 12.6452">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p2cf07700} fill="var(--fill-0, #802367)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LogoGithub() {
  return (
    <div className="absolute contents left-[211.13px] top-[335.23px]" data-name="logo-github 1">
      <Group3 />
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute contents left-[203px] top-[328px]" data-name="4">
      <BgBackgroundImage additionalClassNames="left-[203px]" />
      <LogoGithub />
    </div>
  );
}

function Social() {
  return (
    <div className="absolute contents left-[83px] top-[328px]" data-name="Social">
      <Component />
      <Component1 />
      <Component2 />
      <Component3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bottom-0 h-[592px] left-[calc(50%+0.5px)] overflow-clip translate-x-[-50%] w-[1283px]">
      <Group41 />
      <Social />
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents left-[83px] not-italic top-[1203px]">
      <p className="absolute font-['Josefin_Sans:SemiBold_Roman',sans-serif] leading-[normal] left-[125px] text-[#151875] text-[22px] text-nowrap top-[1203px]">Free Delivery</p>
      <p className="absolute font-['Lato:Bold',sans-serif] h-[85px] leading-[25.6px] left-[191.5px] text-[16px] text-[rgba(26,11,91,0.3)] text-center top-[1245px] translate-x-[-50%] w-[217px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents left-[56px] top-[1055px]">
      <div className="absolute bg-white h-[320px] left-[56px] shadow-[0px_8px_40px_0px_rgba(49,32,138,0.05)] top-[1055px] w-[270px]" data-name="shopex offers" />
      <Group16 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents left-[679px] not-italic top-[1203px]">
      <p className="absolute font-['Josefin_Sans:SemiBold_Roman',sans-serif] leading-[normal] left-[721px] text-[#151875] text-[22px] text-nowrap top-[1203px]">Quality Product</p>
      <p className="absolute font-['Lato:Bold',sans-serif] h-[85px] leading-[25.6px] left-[787.5px] text-[16px] text-[rgba(26,11,91,0.3)] text-center top-[1245px] translate-x-[-50%] w-[217px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute contents left-[652px] top-[1055px]">
      <div className="absolute bg-white h-[320px] left-[652px] shadow-[0px_8px_40px_0px_rgba(49,32,138,0.05)] top-[1055px] w-[270px]" data-name="shopex offers" />
      <Group17 />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents left-[981px] not-italic top-[1203px]">
      <p className="absolute font-['Josefin_Sans:SemiBold_Roman',sans-serif] leading-[normal] left-[1023px] text-[#151875] text-[22px] text-nowrap top-[1203px]">24/7 Support</p>
      <p className="absolute font-['Lato:Bold',sans-serif] h-[85px] leading-[25.6px] left-[1089.5px] text-[16px] text-[rgba(26,11,91,0.3)] text-center top-[1245px] translate-x-[-50%] w-[217px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute contents left-[954px] top-[1055px]">
      <div className="absolute bg-white h-[320px] left-[954px] shadow-[0px_8px_40px_0px_rgba(49,32,138,0.05)] top-[1055px] w-[270px]" data-name="shopex offers" />
      <Group18 />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents left-[381px] not-italic top-[1203px]">
      <p className="absolute font-['Josefin_Sans:SemiBold_Roman',sans-serif] leading-[normal] left-[423px] text-[#151875] text-[22px] text-nowrap top-[1203px]">100% Cash Back</p>
      <p className="absolute font-['Lato:Bold',sans-serif] h-[85px] leading-[25.6px] left-[489.5px] text-[16px] text-[rgba(26,11,91,0.3)] text-center top-[1245px] translate-x-[-50%] w-[217px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents left-[354px] top-[1055px]">
      <div className="absolute bg-white h-[320px] left-[354px] shadow-[0px_8px_40px_0px_rgba(49,32,138,0.05)] top-[1055px] w-[270px]" data-name="shopex offers" />
      <Group20 />
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute contents left-[354px] top-[1055px]">
      <Group21 />
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute contents left-[354px] top-[1055px]">
      <Group29 />
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute contents left-[354px] top-[1055px]">
      <Group30 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[52.25%_15.07%_27.44%_24.49%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.2905 13.2064">
        <g id="Group">
          <path d={svgPaths.p10704900} fill="var(--fill-0, #8B9BA9)" id="Vector" />
          <path d={svgPaths.p18697100} fill="var(--fill-0, #6C7A88)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[17.03%_0_27.44%_0]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65.0003 36.0974">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p1aad1970} fill="var(--fill-0, #FF7E40)" id="Vector" />
            <path d={svgPaths.p3d680600} fill="var(--fill-0, #FF6344)" id="Vector_2" />
          </g>
          <path d={svgPaths.p1cd5980} fill="var(--fill-0, #8B9BA9)" id="Vector_3" />
          <g id="Group_3">
            <path d={svgPaths.p131b4200} fill="var(--fill-0, #9DC6FB)" id="Vector_4" />
            <path d={svgPaths.p25e1ba00} fill="var(--fill-0, #80B4FB)" id="Vector_5" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[62.16%_19.03%_17.03%_60.16%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5288 13.5283">
        <g id="Group">
          <path d={svgPaths.p2bff5700} fill="var(--fill-0, #4D5967)" id="Vector" />
          <path d={svgPaths.p5af2c00} fill="var(--fill-0, #35404A)" id="Vector_2" />
          <path d={svgPaths.p17bb9100} fill="var(--fill-0, #FFF9EB)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[62.16%_69.56%_17.03%_9.62%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5287 13.5283">
        <g id="Group">
          <path d={svgPaths.p2bff5700} fill="var(--fill-0, #4D5967)" id="Vector" />
          <path d={svgPaths.p2a3be300} fill="var(--fill-0, #35404A)" id="Vector_2" />
          <path d={svgPaths.p15201700} fill="var(--fill-0, #FFF9EB)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[30.67%_21.49%_57.43%_42.51%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.4055 7.73026">
        <g id="Group">
          <path d={svgPaths.p3bef8f00} fill="var(--fill-0, #FFF9EB)" id="Vector" />
          <path d={svgPaths.p31ff6c00} fill="var(--fill-0, #FFF9EB)" id="Vector_2" />
          <path d={svgPaths.p2140f6f0} fill="var(--fill-0, #FFF9EB)" id="Vector_3" />
          <path d={svgPaths.p1e99a780} fill="var(--fill-0, #FFF9EB)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[17.03%_0]" data-name="Group">
      <Group4 />
      <Group5 />
      <Group6 />
      <Group7 />
      <Group8 />
    </div>
  );
}

function FreeDelivery() {
  return (
    <div className="absolute left-[159px] overflow-clip size-[65px] top-[1117px]" data-name="free-delivery 1">
      <Group9 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute bottom-0 left-[12.47%] right-1/2 top-[56.21%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.3958 28.4616">
        <g id="Group">
          <path d={svgPaths.p33067280} fill="var(--fill-0, #80AAFF)" id="Vector" />
          <path d={svgPaths.p29cab200} fill="var(--fill-0, #80AAFF)" id="Vector_2" />
          <path d={svgPaths.p9477380} fill="var(--fill-0, #EAF1FF)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute bottom-0 left-1/2 right-[12.47%] top-[56.21%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.3964 28.4616">
        <g id="Group">
          <path d={svgPaths.p2ba60880} fill="var(--fill-0, #6680FF)" id="Vector" />
          <path d={svgPaths.p3051ce00} fill="var(--fill-0, #6680FF)" id="Vector_2" />
          <path d={svgPaths.p3869a000} fill="var(--fill-0, #B3CCFF)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute inset-[2.93%_18.09%_33.25%_18.09%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.4793 41.4791">
        <g id="Group">
          <path d={svgPaths.p39429580} fill="var(--fill-0, #EAF1FF)" id="Vector" />
          <path d={svgPaths.p18d42c00} fill="var(--fill-0, #F9F9F9)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute inset-[0_15.16%_30.32%_15.16%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.2921 45.2923">
        <g id="Group">
          <path d={svgPaths.p1c9c7400} fill="var(--fill-0, #FDAE02)" id="Vector" />
          <path d={svgPaths.p6d14f00} fill="var(--fill-0, #FDCB02)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-[0_15.16%_30.32%_15.16%]" data-name="Group">
      <Group12 />
      <Group13 />
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute inset-[19.1%_32.47%_51.9%_32.47%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.7945 18.8517">
        <g id="Group">
          <path d={svgPaths.p97e39c0} fill="var(--fill-0, #FD9002)" id="Vector" />
          <path d={svgPaths.p1a050d40} fill="var(--fill-0, #FDAE02)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents inset-[0_12.47%]" data-name="Group">
      <Group10 />
      <Group11 />
      <Group14 />
      <Group15 />
    </div>
  );
}

function PremiumQuality() {
  return (
    <div className="absolute left-[755px] overflow-clip size-[65px] top-[1117px]" data-name="premium-quality 1">
      <Group22 />
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute inset-[0_4.08%_4.51%_0]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62.3497 62.0649">
        <g id="Group">
          <path d={svgPaths.p3ab1bf00} fill="var(--fill-0, #D3CDBF)" id="Vector" />
          <path d={svgPaths.p366bb80} fill="var(--fill-0, #D3CDBF)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute inset-[25.28%_35.16%_32.08%_12.58%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.969 27.7163">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p6678b00} fill="var(--fill-0, #46525E)" id="Vector" />
            <path d={svgPaths.p30571700} fill="var(--fill-0, #46525E)" id="Vector_2" />
          </g>
          <path d={svgPaths.pd218300} fill="var(--fill-0, #46525E)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute inset-[41.84%_0_0.01%_42.08%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.6484 37.7993">
        <g id="Group">
          <path d={svgPaths.p33662840} fill="var(--fill-0, #6C7A88)" id="Vector" />
          <path d={svgPaths.p10491600} fill="var(--fill-0, #596775)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents inset-[0_0_0.01%_0]" data-name="Group">
      <Group23 />
      <Group24 />
      <Group25 />
    </div>
  );
}

function Component24HoursSupport() {
  return (
    <div className="absolute left-[1057px] overflow-clip size-[65px] top-[1117px]" data-name="24-hours-support 1">
      <Group26 />
    </div>
  );
}

function Cashback() {
  return (
    <div className="absolute left-[457px] size-[65px] top-[1117px]" data-name="cashback 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 65">
        <g clipPath="url(#clip0_31_1237)" id="cashback 1">
          <path d={svgPaths.p3bc5fb70} fill="var(--fill-0, #507BE9)" id="Vector" />
          <path d={svgPaths.p375a5480} fill="var(--fill-0, #FFEE78)" id="Vector_2" />
          <path d={svgPaths.p10371600} fill="var(--fill-0, #FCD232)" id="Vector_3" />
          <path d={svgPaths.p2734a480} fill="var(--fill-0, #FCD232)" id="Vector_4" />
          <path d={svgPaths.p2dbfc600} fill="var(--fill-0, #F7B90F)" id="Vector_5" />
          <path d={svgPaths.p60ba200} fill="var(--fill-0, #FCD232)" id="Vector_6" />
          <path d={svgPaths.p12e49900} fill="var(--fill-0, #F7B90F)" id="Vector_7" />
          <path d={svgPaths.p1cceaa00} fill="var(--fill-0, #F7B90F)" id="Vector_8" />
          <path d={svgPaths.p2a9a7d00} fill="var(--fill-0, #FABE8C)" id="Vector_9" />
          <path d={svgPaths.p20031580} fill="var(--fill-0, #E6A578)" id="Vector_10" />
          <path d={svgPaths.p1baa6a80} fill="var(--fill-0, #FFD2AA)" id="Vector_11" />
          <path d={svgPaths.p1389c500} fill="var(--fill-0, #FABE8C)" id="Vector_12" />
          <path d={svgPaths.p2d492100} fill="var(--fill-0, #FABE8C)" id="Vector_13" />
          <path d={svgPaths.p3c7eee00} fill="var(--fill-0, #6496F7)" id="Vector_14" />
          <path d={svgPaths.p1d12e900} fill="var(--fill-0, #E6A578)" id="Vector_15" />
        </g>
        <defs>
          <clipPath id="clip0_31_1237">
            <rect fill="white" height="65" width="65" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group45() {
  return (
    <div className="absolute contents left-[56px] top-[1055px]">
      <Group19 />
      <Group36 />
      <Group37 />
      <Group31 />
      <FreeDelivery />
      <PremiumQuality />
      <Component24HoursSupport />
      <Cashback />
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute contents font-['Lato:SemiBold',sans-serif] inset-[66.03%_44.77%_32.01%_44.92%] leading-[25.6px] not-italic text-nowrap">
      <p className="absolute inset-[66.03%_44.77%_32.91%_44.92%] text-[#802367] text-[22px]">Selina Gomez</p>
      <p className="absolute inset-[66.92%_46.02%_32.01%_46.17%] text-[10px] text-[rgba(128,35,103,0.75)]">Ceo At Webecy Digital</p>
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute contents inset-[66.03%_44.77%_32.01%_44.92%]">
      <Group32 />
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute contents inset-[73.08%_47.19%_26.79%_47.11%]">
      <div className="absolute bg-[#802367] inset-[73.08%_48.98%_26.79%_48.91%] rounded-[3px]" />
      <div className="absolute bg-[rgba(128,35,103,0.75)] inset-[73.08%_47.19%_26.79%_51.41%] rounded-[3px]" />
      <div className="absolute bg-[rgba(128,35,103,0.75)] inset-[73.08%_51.48%_26.79%_47.11%] rounded-[3px]" />
    </div>
  );
}

function Group47() {
  return (
    <div className="absolute contents inset-[66.03%_23.05%_26.79%_23.13%]">
      <Group33 />
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[68.56%_23.05%_27.49%_23.13%] leading-[25.6px] text-[16px] text-[rgba(34,34,34,0.75)] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.
      </p>
      <Group35 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents inset-[62.77%_53.13%_34.99%_42.58%]" data-name="Mask Group">
      <div className="absolute inset-[62.77%_53.13%_34.99%_42.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[55px_55px]" data-name="OhKElOkQ3RE" style={{ maskImage: `url('${imgOhKElOkQ3Re}')` }}>
        <img loading="lazy" alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgOhKElOkQ3Re1.src} />
      </div>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute contents inset-[62.4%_47.81%_35.2%_47.89%]" data-name="Mask Group">
      <div className="absolute inset-[62.4%_47.81%_35.2%_47.89%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[55px_59px]" data-name="GH-mSApoKO0" style={{ maskImage: `url('${imgGhMSApoKo0}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img loading="lazy" alt="" className="absolute h-full left-[-11.69%] max-w-none top-0 w-[161.56%]" src={imgGhMSApoKo1.src} />
        </div>
      </div>
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="absolute contents inset-[62.77%_42.5%_34.99%_53.2%]" data-name="Mask Group">
      <div className="absolute inset-[62.77%_42.5%_34.99%_53.2%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[55px_55px]" data-name="RukI4qZGlQs" style={{ maskImage: `url('${imgOhKElOkQ3Re}')` }}>
        <img loading="lazy" alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRukI4QZGlQs.src} />
      </div>
    </div>
  );
}

function Group46() {
  return (
    <div className="absolute contents inset-[62.4%_42.5%_34.99%_42.58%]">
      <MaskGroup />
      <MaskGroup1 />
      <MaskGroup2 />
    </div>
  );
}

function Group48() {
  return (
    <div className="absolute contents inset-[62.4%_23.05%_26.79%_23.13%]">
      <Group47 />
      <Group46 />
    </div>
  );
}

function Group49() {
  return (
    <div className="absolute contents left-[296px] top-[1443px]">
      <Group48 />
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[normal] left-[calc(50%-116px)] text-[#91086c] text-[35px] text-nowrap top-[1443px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Our Client Say!
      </p>
    </div>
  );
}

export default function About() {
  return (
    <div className="bg-white relative size-full" data-name="About">
      <div className="absolute h-[444px] left-[799px] top-[140px] w-[483px]" data-name="postcard-easter-palm-sunday-palm-leaves-laid-out-background-old-plaster-with-space 1">
        <div className="absolute inset-0 opacity-25 overflow-hidden pointer-events-none">
          <img loading="lazy" alt="" className="absolute h-full left-[-86.59%] max-w-none top-0 w-[186.61%]" src={imgPostcardEasterPalmSundayPalmLeavesLaidOutBackgroundOldPlasterWithSpace1.src} />
        </div>
      </div>
      <p className="absolute bg-clip-text bottom-[2255px] font-['Inter:Semi_Bold',sans-serif] font-semibold h-[67px] leading-[normal] left-[61px] not-italic text-[55px] translate-y-[100%] w-[247px]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(96.2438deg, rgba(145, 8, 108, 0.9) 8.3319%, rgb(180, 66, 149) 75.162%)" }}>
        About Us
      </p>
      <div className="absolute h-[49px] left-[62px] top-[78px] w-[160px]" data-name="Logo">
        <img loading="lazy" alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogo.src} />
      </div>
      <HeroSection />
      <Frame />
      <div className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[0] left-[61px] text-[0px] text-[rgba(128,35,103,0.75)] top-[290px] w-[1113px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[normal] mb-0 text-[35px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Get The Best 100% Natural Products For You
        </p>
        <p className="leading-[30px] text-[20px]">Two generation deeply rooted with farming especially with coconuts. We third generation created the experience into nutrient rich products. Our well experience in the field of coconut farming and coconut processing to copra trigger us to think about making a healthy element contained coconut oil. From 2019 onwards we are satisfying our thousands of customers by giving the best coconut oil. The knowledge passed through two generation help us to develop a baby oil that we can declare as the best baby oil in the world. We are working with local farmers for the last decade.</p>
      </div>
      <Group44 />
      <Frame1 />
      <Group45 />
      <Group49 />
    </div>
  );
}
