import svgPaths from "./svg-sk3ukfjjvu";
import clsx from "clsx";
import imgLogo2 from "@/assets/91af2b2974b632c0dcaf1add2472d0679b8ab69b.png";
import imgBag5 from "@/assets/0cc12c30ffef0466f2779edadcefe9250d10e34e.png";
import imgChatGptImageDec172025045850Pm118 from "@/assets/0edce0b8b7d3e2823b1bcdc0e9a26ebfc048ec4a.png";
import imgChatGptImageDec172025045850Pm119 from "@/assets/9002db158f30be1c2630bb19fe5fc7883cdd0ad0.png";
import imgLogo from "@/assets/89f199b8c0610e515928d4b8f3de9b1e7dc1946c.png";
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className={additionalClassNames}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        {children}
      </svg>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return <Wrapper2 additionalClassNames={clsx("absolute", additionalClassNames)}>{children}</Wrapper2>;
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[0_2.45%_9.55%_2.45%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.1891 33.4668">
        {children}
      </svg>
    </div>
  );
}
type Group365HelperProps = {
  additionalClassNames?: string;
};

function Group365Helper({ additionalClassNames = "" }: Group365HelperProps) {
  return (
    <div className={clsx("absolute size-[37px] top-[487px]", additionalClassNames)}>
      <Wrapper>
        <path d={svgPaths.p5d1d100} fill="var(--fill-0, #F7B90F)" id="Star 1" />
      </Wrapper>
    </div>
  );
}
type BgProps = {
  additionalClassNames?: string;
};

function Bg({ additionalClassNames = "" }: BgProps) {
  return (
    <Wrapper2 additionalClassNames={clsx("absolute size-[28px] top-[328px]", additionalClassNames)}>
      <circle cx="14" cy="14" fill="var(--fill-0, white)" id="BG" r="14" />
    </Wrapper2>
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
      <Wrapper1 additionalClassNames="left-[123px] size-[28px] top-[328px]">
        <circle cx="14" cy="14" fill="var(--fill-0, #802367)" id="BG" r="14" />
      </Wrapper1>
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

function Frame1() {
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

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[35px] items-center leading-[0] left-[928px] top-[82px]">
      <Searchbar />
      <Cart />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents left-[199px] top-[428px]">
      <div className="absolute h-[49.5px] left-[226.5px] top-[753px] w-[289.5px]">
        <div className="absolute inset-[0_-1.38%_-16.16%_-1.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 297.5 57.5">
            <g filter="url(#filter0_d_35_1333)" id="Vector 77">
              <path d={svgPaths.p38de72c0} fill="var(--fill-0, #D9D9D9)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="57.5" id="filter0_d_35_1333" width="297.5" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_35_1333" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_35_1333" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute aspect-[492/800] left-[29.38%] right-[58.36%] top-[536px]" data-name="ChatGPTImageDec17,2025,04_58_50PM11_8">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgChatGptImageDec172025045850Pm118.src} />
      </div>
      <div className="absolute aspect-[492/800] left-[15.55%] right-[64.92%] top-[428px]" data-name="ChatGPTImageDec17,2025,04_58_50PM11_8">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgChatGptImageDec172025045850Pm119.src} />
      </div>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents left-[672px] top-[716px]">
      <div className="absolute bg-[#f5f5f5] h-[42px] left-[672px] rounded-[13px] top-[716px] w-[137px]" />
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold inset-[30.67%_38.44%_68.58%_54.14%] leading-[18px] lowercase text-[25px] text-[rgba(34,34,34,0.75)] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        250 GRM
      </p>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents left-[817px] top-[716px]">
      <div className="absolute bg-[#f5f5f5] h-[42px] left-[817px] rounded-[13px] top-[716px] w-[137px]" />
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold inset-[30.67%_27.11%_68.58%_65.47%] leading-[18px] lowercase text-[25px] text-[rgba(34,34,34,0.75)] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        500 GRM
      </p>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents left-[672px] top-[787px]">
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold inset-[33.99%_40.08%_65.25%_58.52%] leading-[18px] lowercase text-[#802367] text-[30px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        1
      </p>
      <Wrapper1 additionalClassNames="inset-[33.78%_36.25%_65.04%_61.56%]">
        <path d={svgPaths.p140e3200} fill="var(--fill-0, black)" id="Vector" />
      </Wrapper1>
      <div className="absolute inset-[34.29%_43.2%_65.54%_54.61%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 4">
          <path d={svgPaths.p35b8f000} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <div className="absolute border border-[#802367] border-solid h-[57px] left-[672px] rounded-[13px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.35)] top-[787px] w-[171px]" data-name="Rectangle39" />
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents left-[1038px] top-[787px]">
      <div className="absolute bg-[#802367] left-[1038px] rounded-[13px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] size-[57px] top-[787px]" data-name="Rectangle38" />
      <div className="absolute left-[1053px] size-[28px] top-[802px]" data-name="bag5_2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBag5.src} />
      </div>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents left-[855px] top-[787px]">
      <div className="absolute border border-[#802367] border-solid h-[57px] left-[855px] rounded-[13px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.35)] top-[787px] w-[171px]" data-name="Rectangle39" />
      <div className="absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[893px] text-[#802367] text-[24px] text-nowrap top-[816px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Buy Now</p>
      </div>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents left-[672px] top-[487px]">
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold inset-[20.94%_15.55%_78.31%_69.69%] leading-[18px] text-[25px] text-[rgba(34,34,34,0.75)] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        3.9 (124 Review)
      </p>
      <Group365Helper additionalClassNames="left-[672px]" />
      <Group365Helper additionalClassNames="left-[714px]" />
      <div className="absolute h-[37px] left-[756px] top-[487px] w-[36px]">
        <div className="absolute inset-[0_2.45%_9.55%_2.45%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.238 33.4668">
            <path d={svgPaths.p1c682200} fill="var(--fill-0, #F7B90F)" id="Star 3" />
          </svg>
        </div>
      </div>
      <Group365Helper additionalClassNames="left-[797px]" />
      <div className="absolute left-[839px] size-[37px] top-[487px]">
        <Wrapper>
          <path d={svgPaths.p5d1d100} fill="var(--fill-0, #F5F5F5)" id="Star 5" />
        </Wrapper>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="absolute h-[584px] left-1/2 top-[978px] translate-x-[-50%] w-[1180.002px]" data-name="Component 16">
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold inset-[0_82.63%_95.03%_6.44%] leading-[normal] text-[#802367] text-[25px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Description
      </p>
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold inset-[0_62.12%_95.03%_31.02%] leading-[normal] text-[25px] text-[rgba(34,34,34,0.75)] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Review
      </p>
      <div className="absolute inset-[9.59%_0_90.41%_0]">
        <div className="absolute inset-[-3px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1180 3">
            <line id="Line 123" stroke="var(--stroke-0, #222222)" strokeOpacity="0.1" strokeWidth="3" x2="1180" y1="1.5" y2="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[9.59%_82.37%_90.41%_5.68%]">
        <div className="absolute inset-[-3px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 141 3">
            <line id="Line 124" stroke="var(--stroke-0, #802367)" strokeLinecap="round" strokeWidth="3" x1="1.5" x2="139.5" y1="1.5" y2="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[19.86%_35.42%_0_6.19%] leading-[0] text-[16px] text-[rgba(34,34,34,0.75)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[25.6px] mb-0">Jackfruit Powder is made from carefully selected jackfruit that is naturally dried and finely ground to retain its nutritional value. It is rich in dietary fiber and known for supporting digestion and overall gut health. With a mild, natural taste, it easily blends into daily meals without altering flavor.</p>
        <p className="leading-[25.6px] mb-0">This powder is processed without additives, preservatives, or artificial colors, making it a clean and wholesome choice for everyday wellness. Ideal for health-conscious users looking for a natural, plant-based supplement.</p>
        <p className="leading-[25.6px] mb-0">Key Benefits</p>
        <ul className="list-disc mb-0">
          <li className="mb-0 ms-[24px]">
            <span className="leading-[25.6px]">High in natural dietary fiber</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span className="leading-[25.6px]">Supports healthy digestion</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span className="leading-[25.6px]">Helps maintain balanced nutrition</span>
          </li>
          <li className="ms-[24px]">
            <span className="leading-[25.6px]">100% natural and plant-based</span>
          </li>
        </ul>
        <p className="leading-[25.6px] mb-0">How to Use</p>
        <p className="leading-[25.6px] mb-0">Add to smoothies, porridge, curries, chapati dough, or health drinks as part of your daily diet.</p>
        <p className="leading-[25.6px] mb-0">Why Choose This Product</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[24px]">
            <span className="leading-[25.6px]">No chemicals or preservatives</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span className="leading-[25.6px]">Traditional, hygienic processing</span>
          </li>
          <li className="ms-[24px]">
            <span className="leading-[25.6px]">Suitable for daily use</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <div className="bg-white relative size-full" data-name="Products">
      <Frame1 />
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[normal] left-[calc(50%-201px)] text-[#91086c] text-[25px] text-nowrap top-[222px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Products
      </p>
      <p className="absolute bottom-[2177px] font-['Inter:Semi_Bold',sans-serif] font-semibold h-[67px] leading-[normal] left-[61px] not-italic text-[55px] text-[rgba(34,34,34,0.75)] translate-y-[100%] w-[355px]">Our Products</p>
      <div className="absolute h-[49px] left-[62px] top-[78px] w-[160px]" data-name="Logo">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogo.src} />
      </div>
      <HeroSection />
      <Frame />
      <div className="absolute bg-[#f5f5f5] h-[543px] left-[125px] rounded-[13px] top-[359px] w-[482px]" />
      <Group11 />
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold inset-[17.57%_14.22%_80.67%_51.41%] leading-[41px] text-[#222] text-[50px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jack Fruit Powder
      </p>
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold inset-[27.51%_39.61%_71.74%_52.5%] leading-[18px] text-[#222] text-[45px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        ₹199
      </p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] absolute decoration-solid font-['Roboto:SemiBold',sans-serif] font-semibold inset-[27.51%_31.25%_71.74%_63.44%] leading-[18px] line-through text-[30px] text-[rgba(34,34,34,0.75)] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        ₹359
      </p>
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold inset-[24.09%_26.33%_75.15%_63.36%] leading-[18px] text-[#249b3e] text-[25px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Save - ₹160
      </p>
      <div className="absolute bg-[#802367] inset-[23.29%_37.81%_74.47%_51.64%] rounded-bl-[16px] rounded-tr-[16px]" data-name="Rectangle13_8" />
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold inset-[24.14%_38.59%_74.98%_52.5%] leading-[16px] text-[25px] text-center text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        56% OFF
      </p>
      <Group13 />
      <Group12 />
      <Group14 />
      <Group16 />
      <Group15 />
      <Group17 />
      <Component4 />
    </div>
  );
}
