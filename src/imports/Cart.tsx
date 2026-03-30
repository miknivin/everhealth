import svgPaths from "./svg-ampvtmyoqe";
import clsx from "clsx";
import imgLogo2 from "@/assets/91af2b2974b632c0dcaf1add2472d0679b8ab69b.png";
import imgBag5 from "@/assets/0cc12c30ffef0466f2779edadcefe9250d10e34e.png";
import imgChatGptImageDec172025045850Pm118 from "@/assets/9002db158f30be1c2630bb19fe5fc7883cdd0ad0.png";
import imgLogo from "@/assets/89f199b8c0610e515928d4b8f3de9b1e7dc1946c.png";
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className={clsx("size-[24px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={additionalClassNames}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        {children}
      </svg>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return <Wrapper1 additionalClassNames={clsx("absolute size-[28px]", additionalClassNames)}>{children}</Wrapper1>;
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className={clsx("flex flex-col justify-center relative shrink-0", additionalClassNames)}>
      <p className="leading-[normal] text-nowrap">{text}</p>
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="content-stretch flex font-['Roboto:Regular',sans-serif] font-normal items-center justify-between leading-[0] relative shrink-0 text-[20px] text-nowrap w-full">
      <Text text={text} additionalClassNames="text-[rgba(0,0,0,0.6)]" />
      <Text text={text1} additionalClassNames="text-black text-right" />
    </div>
  );
}
type BgProps = {
  additionalClassNames?: string;
};

function Bg({ additionalClassNames = "" }: BgProps) {
  return (
    <Wrapper1 additionalClassNames={clsx("absolute size-[28px] top-[328px]", additionalClassNames)}>
      <circle cx="14" cy="14" fill="var(--fill-0, white)" id="BG" r="14" />
    </Wrapper1>
  );
}

function Group8() {
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

function Group7() {
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
    <Wrapper2 additionalClassNames="absolute left-[83px] top-[198px]">
      <g id="ant-design:whats-app-outlined">
        <path d={svgPaths.p18202900} fill="var(--fill-0, white)" id="Vector_6" />
        <path d={svgPaths.p6ef0e00} fill="var(--fill-0, white)" id="Vector_7" />
      </g>
    </Wrapper2>
  );
}

function Group4() {
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

function Group5() {
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

function Group9() {
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
      <Group8 />
      <Group7 />
      <Group4 />
      <Group5 />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-[476px] text-[20px] text-nowrap text-white top-[542px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        © 2022 All rights reserved. Reliance Retail Ltd.
      </p>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group9 />
      <div className="absolute h-[49px] left-[calc(50%-477.5px)] top-[80px] translate-x-[-50%] w-[160px]" data-name="Logo_2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogo2.src} />
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
      <Bg additionalClassNames="left-[83px]" />
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
      <Wrapper additionalClassNames="left-[123px] top-[328px]">
        <circle cx="14" cy="14" fill="var(--fill-0, #802367)" id="BG" r="14" />
      </Wrapper>
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
      <Bg additionalClassNames="left-[163px]" />
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
      <Bg additionalClassNames="left-[203px]" />
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

function Frame11() {
  return (
    <div className="absolute bottom-0 h-[592px] left-[calc(50%-1.5px)] overflow-clip translate-x-[-50%] w-[1283px]">
      <Group10 />
      <Social />
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

function Group6() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[10px] mt-[10px] place-items-start relative" data-name="Group89">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[22px]" data-name="bag5">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBag5.src} />
      </div>
    </div>
  );
}

function Cart() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Cart">
      <div className="[grid-area:1_/_1] bg-[#802367] ml-0 mt-0 rounded-[13px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] size-[41px]" data-name="Rectangle35" />
      <Group6 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex gap-[35px] items-center leading-[0] left-[928px] top-[82px]">
      <Searchbar />
      <Cart />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-[#f0eeed] h-[187px] left-[152px] overflow-clip rounded-[13px] top-[304px] w-[140px]">
      <div className="absolute h-[153px] left-[23px] top-[17px] w-[94px]" data-name="ChatGPTImageDec17,2025,04_58_50PM11_8">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgChatGptImageDec172025045850Pm118.src} />
      </div>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute left-[753px] size-[40px] top-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Group 369">
          <circle cx="20" cy="20" fill="var(--fill-0, #F0EEED)" id="Ellipse 75" r="20" />
          <path d={svgPaths.p287f4700} fill="var(--fill-0, #FF3333)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute h-[41px] left-[326px] top-[318px] w-[793px]">
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-0 text-[#222] text-[25px] text-nowrap top-[20.5px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[41px]">Jack Fruit Powder</p>
      </div>
      <Group12 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents left-[325px] top-[368px]">
      <div className="absolute bg-[#f5f5f5] h-[42px] left-[325px] rounded-[13px] top-[368px] w-[137px]" />
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold inset-[22.2%_65.55%_76.75%_27.03%] leading-[18px] lowercase text-[25px] text-[rgba(34,34,34,0.75)] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        250 GRM
      </p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold h-[18px] leading-[18px] left-[329px] text-nowrap top-[438.5px] w-[254px]">
      <p className="absolute left-0 text-[#222] text-[45px] top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        ₹199
      </p>
      <p className="absolute left-[122px] text-[#249b3e] text-[25px] top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Save - ₹160
      </p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute border border-[#802367] border-solid h-[57px] left-[972px] rounded-[13px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.35)] top-[419px] w-[171px]">
      <div className="absolute h-[4px] left-[26px] top-[25.5px] w-[28px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 4">
          <path d={svgPaths.p35b8f000} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[18px] left-[76px] lowercase text-[#802367] text-[30px] text-nowrap top-[18.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        1
      </p>
      <Wrapper additionalClassNames="left-[116px] top-[13.5px]">
        <path d={svgPaths.p140e3200} fill="var(--fill-0, black)" id="Vector" />
      </Wrapper>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex font-['Roboto:Regular',sans-serif] font-normal items-center justify-between leading-[0] relative shrink-0 text-[20px] text-nowrap w-full">
      <Text text="Discount (-52%)" additionalClassNames="text-[rgba(0,0,0,0.6)]" />
      <Text text="-160" additionalClassNames="text-[#f33] text-right" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex font-['Roboto:Medium',sans-serif] font-medium items-center justify-between leading-[0] relative shrink-0 text-black text-nowrap w-full">
      <Text text="Total" additionalClassNames="text-[20px]" />
      <Text text="199" additionalClassNames="text-[24px] text-right" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Helper text="Subtotal" text1="359" />
      <Frame5 />
      <Helper text="Delivery Fee" text1="FREE" />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 894 1">
            <line id="Line 6" stroke="var(--stroke-0, black)" strokeOpacity="0.1" x2="894" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame6 />
    </div>
  );
}

function Frame() {
  return (
    <Wrapper2 additionalClassNames="relative shrink-0">
      <g id="Frame">
        <path d={svgPaths.p22141602} fill="var(--fill-0, black)" fillOpacity="0.4" id="Vector" />
      </g>
    </Wrapper2>
  );
}

function Frame1() {
  return (
    <div className="basis-0 bg-[#f0f0f0] grow min-h-px min-w-px relative rounded-[13px] shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-start px-[16px] py-[12px] relative w-full">
          <Frame />
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.4)] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Add promo code
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#802367] content-stretch flex h-full items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[13px] shrink-0 w-[119px]">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Apply
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full">
      <Frame1 />
      <div className="flex flex-row items-center self-stretch">
        <Frame7 />
      </div>
    </div>
  );
}

function ArrowDownBold() {
  return (
    <Wrapper2 additionalClassNames="relative">
      <g id="arrow-down-bold 1">
        <path d={svgPaths.p4601600} fill="var(--fill-0, white)" id="Vector" />
      </g>
    </Wrapper2>
  );
}

function Frame2() {
  return (
    <div className="bg-[#802367] h-[60px] relative rounded-[13px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[54px] py-[16px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
            Go to Checkout
          </p>
          <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
            <div className="flex-none rotate-[270deg]">
              <ArrowDownBold />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute h-[457px] left-1/2 rounded-[20px] top-[613px] translate-x-[-50%] w-[942px]">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip px-[24px] py-[20px] relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[24px] text-black text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[normal]">Order Summary</p>
        </div>
        <Frame9 />
        <Frame8 />
        <Frame2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

export default function Cart1() {
  return (
    <div className="bg-white relative size-full" data-name="Cart">
      <Frame11 />
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[normal] left-[calc(50%-199px)] text-[#91086c] text-[25px] text-nowrap top-[222px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cart
      </p>
      <p className="absolute bottom-[1515px] font-['Inter:Semi_Bold',sans-serif] font-semibold h-[67px] leading-[normal] left-[61px] not-italic text-[55px] text-[rgba(34,34,34,0.75)] translate-y-[100%] w-[355px]">Our Products</p>
      <div className="absolute h-[49px] left-[62px] top-[78px] w-[160px]" data-name="Logo">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogo.src} />
      </div>
      <HeroSection />
      <Frame10 />
      <div className="absolute h-0 left-[61.99px] top-[539.49px] w-[856.01px]">
        <div className="absolute inset-[-3px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 856.01 3">
            <line id="Line 7" stroke="var(--stroke-0, black)" strokeOpacity="0.1" strokeWidth="3" x2="856.01" y1="1.5" y2="1.5" />
          </svg>
        </div>
      </div>
      <Frame4 />
      <Frame12 />
      <Group11 />
      <Frame13 />
      <Frame14 />
      <Frame3 />
    </div>
  );
}
