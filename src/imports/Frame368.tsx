import svgPaths from "./svg-ogfbi766fk";
import clsx from "clsx";

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex items-center justify-between p-[12px] relative w-full">{children}</div>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className="flex flex-col justify-center relative shrink-0 text-[#697386] text-[12px] tracking-[0.18px] w-full">
      <p className="leading-[20px]">{children}</p>
    </div>
  );
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className={additionalClassNames}>
      <p className="leading-[22px]">{children}</p>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return <Wrapper2 additionalClassNames={clsx("flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap tracking-[0.08px]", additionalClassNames)}>{children}</Wrapper2>;
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return <Wrapper2 additionalClassNames={clsx("flex flex-col justify-center relative shrink-0 text-[16px] tracking-[0.08px] w-full", additionalClassNames)}>{children}</Wrapper2>;
}

function Button() {
  return (
    <div className="absolute bg-[#802367] content-stretch flex flex-col items-center justify-center left-[419px] px-[48px] py-[12px] rounded-[6px] shadow-[0px_-1px_1px_0px_rgba(0,0,0,0.12),0px_2px_5px_0px_rgba(0,0,0,0.12),0px_1px_1px_0px_rgba(0,0,0,0.08)] top-[182px] w-[416px]" data-name="Button">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[18px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pay 199.00
      </p>
    </div>
  );
}

function GooglePayLogo() {
  return (
    <div className="h-[24px] relative shrink-0 w-[58.2px]" data-name=".Google Pay logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.2 24">
        <g clipPath="url(#clip0_46_281)" id=".Google Pay logo">
          <path d={svgPaths.p2ac5d200} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.pef80780} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.pd6018b0} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p3fca4b70} fill="var(--fill-0, #4285F4)" id="Vector_4" />
          <path d={svgPaths.p25dad100} fill="var(--fill-0, #34A853)" id="Vector_5" />
          <path d={svgPaths.p32c21f80} fill="var(--fill-0, #FBBC04)" id="Vector_6" />
          <path d={svgPaths.p123e7c00} fill="var(--fill-0, #EA4335)" id="Vector_7" />
        </g>
        <defs>
          <clipPath id="clip0_46_281">
            <rect fill="white" height="24" width="58.2" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-black content-stretch flex flex-col items-center justify-center left-0 px-[48px] py-[12px] rounded-[6px] shadow-[0px_-1px_1px_0px_rgba(0,0,0,0.12),0px_2px_5px_0px_rgba(0,0,0,0.12),0px_1px_1px_0px_rgba(0,0,0,0.08)] top-[182px] w-[416px]" data-name="Button">
      <GooglePayLogo />
    </div>
  );
}

function BaseComponentsRadioButton() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name=".baseComponents/.Radio Button">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)", "--stroke-0": "rgba(26, 31, 54, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <g id=".baseComponents/.Radio Button">
            <rect fill="var(--fill-0, white)" height="11" rx="5.5" width="11" x="0.5" y="0.5" />
            <rect height="11" rx="5.5" stroke="var(--stroke-0, #1A1F36)" width="11" x="0.5" y="0.5" />
            <circle cx="6" cy="6" fill="var(--fill-0, #1A1F36)" id="Selected indicator" r="3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LabelDescription() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal grow items-start justify-center leading-[0] min-h-px min-w-px relative shrink-0" data-name="Label + Description">
      <Wrapper additionalClassNames="text-[#1a1f36]">Prepaid</Wrapper>
      <Wrapper3>2-4 business days</Wrapper3>
    </div>
  );
}

function Leading() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Leading">
      <BaseComponentsRadioButton />
      <LabelDescription />
    </div>
  );
}

function Trailing() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Trailing">
      <Wrapper1 additionalClassNames="text-[#1a1f36]">199.00</Wrapper1>
    </div>
  );
}

function RadioButton() {
  return (
    <div className="bg-white mb-[-1px] relative rounded-tl-[6px] rounded-tr-[6px] shrink-0 w-full" data-name="Radio Button">
      <div aria-hidden="true" className="absolute border border-[rgba(60,66,87,0.12)] border-solid inset-0 pointer-events-none rounded-tl-[6px] rounded-tr-[6px]" />
      <Wrapper4>
        <Leading />
        <Trailing />
      </Wrapper4>
    </div>
  );
}

function BaseComponentsRadioButton1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[12px]" data-name=".baseComponents/.Radio Button">
      <div aria-hidden="true" className="absolute border border-[rgba(60,66,87,0.12)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function LabelDescription1() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Roboto:Regular',sans-serif] font-normal grow items-start justify-center leading-[0] min-h-px min-w-px opacity-80 relative shrink-0" data-name="Label + Description">
      <Wrapper additionalClassNames="text-[#3c4257]">Cash on Delivery</Wrapper>
      <Wrapper3>5-7 business days</Wrapper3>
    </div>
  );
}

function Leading1() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Leading">
      <BaseComponentsRadioButton1 />
      <LabelDescription1 />
    </div>
  );
}

function Trailing1() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-end min-h-px min-w-px opacity-80 relative shrink-0" data-name="Trailing">
      <Wrapper1 additionalClassNames="text-[#3c4257]">249.00</Wrapper1>
    </div>
  );
}

function RadioButton1() {
  return (
    <div className="bg-white mb-[-1px] relative rounded-bl-[6px] rounded-br-[6px] shrink-0 w-full" data-name="Radio Button">
      <div aria-hidden="true" className="absolute border border-[rgba(60,66,87,0.12)] border-solid inset-0 pointer-events-none rounded-bl-[6px] rounded-br-[6px]" />
      <Wrapper4>
        <Leading1 />
        <Trailing1 />
      </Wrapper4>
    </div>
  );
}

function Options() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px pt-0 px-0 relative shadow-[0px_2px_5px_0px_rgba(0,0,0,0.08),0px_1px_1px_0px_rgba(0,0,0,0.04)] shrink-0 w-full" data-name="Options">
      <RadioButton />
      <RadioButton1 />
    </div>
  );
}

function ShippingMethod() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[calc(50%-1px)] top-0 translate-x-[-50%] w-[833px]" data-name="Shipping method">
      <div className="flex flex-col font-['SF_Pro_Display:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#697386] text-[14px] w-full">
        <p className="leading-[20px]">Shipping method</p>
      </div>
      <Options />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[230px] left-0 top-0 w-[835px]">
      <Button />
      <Button1 />
      <ShippingMethod />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <Frame />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="relative size-full">
      <Group1 />
    </div>
  );
}
