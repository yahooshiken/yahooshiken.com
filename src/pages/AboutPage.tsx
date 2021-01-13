import React, { Dispatch, FC, SetStateAction, useState } from "react";
import styled from "styled-components";
import { Button } from "ui-neumorphism";
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

      <DescriptionWrapper>Some description here...</DescriptionWrapper>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  display: flex;
  max-width: 800px;
  margin: 0 auto;
`;

const PhotoWrapper = styled.div``;

const PhotoOfMe = styled.img<FilterOption>`
  max-width: 400px;
  filter: blur(${({ blur }) => blur}px)
    brightness(${({ brightness }) => brightness}%)
    saturate(${({ saturate }) => saturate}%) sepia(${({ sepia }) => sepia}%)
    hue-rotate(${({ hueRotate }) => hueRotate}deg)
    grayscale(${({ grayscale }) => grayscale}%)
    contrast(${({ contrast }) => contrast}%) invert(${({ invert }) => invert}%)
    opacity(${({ opacity }) => opacity}%) drop-shadow(16px 16px 20px #666);
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

const SliderWrapper = styled.div``;

const Slider = styled.input`
  width: calc(100% - 92px);
  margin-right: 12px;
`;

const Label = styled.label`
  min-width: 80px;
`;

const DescriptionWrapper = styled.div`
  padding: 20px;
`;

export default AboutPage;
