import React, { Dispatch, FC, Fragment, SetStateAction, useState } from "react";
import styled from "styled-components";
import { Button, H5, Body2 } from "ui-neumorphism";
import { RefreshCw } from "react-feather";

interface FilterOption {
  blur: number;
  brightness: number;
  saturate: number;
  sepia: number;
  hueRotate: number;
  grayscale: number;
  contrast: number;
  invert: number;
  opacity: number;
}

type FilterName = keyof FilterOption;

interface Attribute {
  name: FilterName;
  min: number;
  max: number;
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}

const LANGUAGES = ["En", "Ja", "De", "Ru"] as const;

type Lang = typeof LANGUAGES[number];

const profileGreeting: { [lang in Lang]: string } = {
  En: "Nice to meet you! 🚀",
  Ja: "ひとつよしなに 👋",
  De: "Prost! 🍻",
  Ru: "Хорошего дня! 🎉",
} as const;

const profileBody: { [lang in Lang]: string } = {
  En:
    "My name is Kenya (@yahooshiken). I'm a Japanese developer and good at web frontend development a little. I'm also a student at Osaka University. I want to use technology to create interactions that makes the world laugh more.\n\n❤️\tLang: JavaScript, TypeScript, Rust\n⌨️\tTool: VSCode, Ergodox EZ, fish shell\n🔬\tResearch Field: HAI, Dialogue system\n\nIf you want to learn more about me, my work, or where to get the best pork bun in Osaka, feel free to hit me up!\n\nThank you for stopping by!",
  Ja:
    "1996年6月7日生まれ 静岡県出身 \n沼津高専制御情報工学科卒業\n大阪大学基礎工学部 知能ロボティクス研究室\n\n趣味は深夜ラジオを聴くことです．特に Creepy Nutsのオールナイトニッポン0, 沈黙の金曜日, ハライチのターンをよく聴きます．たまにメールを送ります．\n\n割とアイドルが好きです．乃木坂46では4期生の弓木奈於さんを推しています．\n\nこのあとまた夢でお会いしましょう．アディオス",
  De:
    "Ich bin kein großer Fan von Bier. Das tut mir leid, Deutsche. Wenn Sie ein gutes Bier kennen, lassen Sie es mich bitte wissen. Ich werde Ihnen sagen, welchen Sake ich stattdessen empfehle. \n\n・作 / Zaku (Shimizu Sake-Brauerei)\n・紀土 / Kid (Heiwa Sake-Brauerei)\n・天明 / Tenmei (Akebono Sake-Brauerei)\n・ひめぜん / Himezen (Ichinokura Sake-Brauerei)\n・伊根満開 / Ine Mankai (Mukai Sake-Brauerei)\n・くどき上手 / Kudoki Jozu (Kamenoi Sake-Brauerei)\n\nWenn Sie die Gelegenheit haben, Japan zu besuchen, probieren Sie es bitte.",
  Ru:
    "Я не понимаю русского языка, но больше всего я хочу посетить Владивосток, Россия. Владивосток очень близок к Японии, и мне бы хотелось познакомиться с русским Ваней.\n\nВ Японии много саун и жарких источников. Если вы приедете в Японию, пожалуйста, постарайтесь посетить их.",
} as const;

const AboutPage: FC = () => {
  const [blur, setBlur] = useState(0);
  const [brightness, setBrightness] = useState(100);
  const [saturate, setSaturate] = useState(100);
  const [sepia, setSepia] = useState(0);
  const [hueRotate, setHueRotate] = useState(0);
  const [grayscale, setGrayscale] = useState(0);
  const [contrast, setContrast] = useState(100);
  const [invert, setInvert] = useState(0);
  const [opacity, setOpacity] = useState(100);

  const [lang, setLang] = useState<Lang>("En");

  const resetAttributes = () => {
    setBlur(0);
    setBrightness(100);
    setSaturate(100);
    setSepia(0);
    setHueRotate(0);
    setGrayscale(0);
    setContrast(100);
    setInvert(0);
    setOpacity(100);
  };

  const attributes: Attribute[] = [
    { name: "blur", min: 0, max: 20, value: blur, setValue: setBlur },
    {
      name: "brightness",
      min: 0,
      max: 500,
      value: brightness,
      setValue: setBrightness,
    },
    {
      name: "saturate",
      min: 100,
      max: 500,
      value: saturate,
      setValue: setSaturate,
    },
    { name: "sepia", min: 0, max: 100, value: sepia, setValue: setSepia },
    {
      name: "hueRotate",
      min: 0,
      max: 360,
      value: hueRotate,
      setValue: setHueRotate,
    },
    {
      name: "grayscale",
      min: 0,
      max: 100,
      value: grayscale,
      setValue: setGrayscale,
    },
    {
      name: "contrast",
      min: 0,
      max: 500,
      value: contrast,
      setValue: setContrast,
    },
    { name: "invert", min: 0, max: 100, value: invert, setValue: setInvert },
    { name: "opacity", min: 0, max: 100, value: opacity, setValue: setOpacity },
  ];

  return (
    <PageWrapper>
      <PhotoWrapper>
        <PhotoOfMe
          width={400}
          height={400}
          src="./assets/images/me.jpg"
          blur={blur}
          brightness={brightness}
          saturate={saturate}
          sepia={sepia}
          hueRotate={hueRotate}
          grayscale={grayscale}
          contrast={contrast}
          invert={invert}
          opacity={opacity}
        />
        <AttributesWrapper>
          <ButtonWrapper>
            <Button onClick={() => resetAttributes()}>
              <RefreshCw size={16} />
              &nbsp;Reset
            </Button>
          </ButtonWrapper>

          {attributes.map(({ name, min, max, value, setValue }) => (
            <SliderWrapper>
              <Slider
                id={name}
                key={name}
                name={name}
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={(e) => setValue(parseInt(e.target.value))}
              />
              <Label htmlFor={name}>{name}</Label>
            </SliderWrapper>
          ))}
        </AttributesWrapper>
      </PhotoWrapper>

      <DescriptionWrapper>
        <LangWrapper>
          {LANGUAGES.map((language, i) => (
            <Fragment key={language}>
              {i !== 0 && " / "}
              <LangLink
                onClick={() => setLang(language)}
                active={lang === language}
              >
                {language}
              </LangLink>
            </Fragment>
          ))}
        </LangWrapper>
        <GreetingWrapper>
          <H5>
            <b>{profileGreeting[lang]}</b>
          </H5>
        </GreetingWrapper>
        <Body2>{profileBody[lang]}</Body2>
      </DescriptionWrapper>
    </PageWrapper>
  );
};

const LangWrapper = styled.div`
  margin-bottom: 28px;
`;

const LangLink = styled.span<{ active: boolean }>`
  cursor: pointer;
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  &:hover {
    text-decoration: underline;
  }
`;

const GreetingWrapper = styled.div`
  margin-bottom: 12px;
`;

const PageWrapper = styled.div`
  display: flex;
  max-width: 800px;
  margin: 0 auto;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const PhotoWrapper = styled.div`
  @media (max-width: 767px) {
    text-align: center;
    margin-bottom: 48px;
  }
`;

const PhotoOfMe = styled.img<FilterOption>`
  max-width: 400px;
  height: auto;
  filter: blur(${({ blur }) => blur}px)
    brightness(${({ brightness }) => brightness}%)
    saturate(${({ saturate }) => saturate}%) sepia(${({ sepia }) => sepia}%)
    hue-rotate(${({ hueRotate }) => hueRotate}deg)
    grayscale(${({ grayscale }) => grayscale}%)
    contrast(${({ contrast }) => contrast}%) invert(${({ invert }) => invert}%)
    opacity(${({ opacity }) => opacity}%) drop-shadow(16px 16px 20px #666);
  @media (max-width: 767px) {
    max-width: 320px;
  }
`;

const AttributesWrapper = styled.div`
  max-width: 400px;
  padding: 32px 48px 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  padding-bottom: 20px;
  justify-content: space-around;
`;

const SliderWrapper = styled.div`
  text-align: left;
`;

const Slider = styled.input`
  width: calc(100% - 92px);
  margin-right: 12px;
`;

const Label = styled.label`
  min-width: 80px;
`;

const DescriptionWrapper = styled.div`
  padding: 0 0 20px 48px;
  white-space: pre-wrap;
  @media (max-width: 767px) {
    padding: 0 20px 40px;
  }
`;

export default AboutPage;
