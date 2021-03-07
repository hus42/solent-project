import styled from "styled-components";
import solentImage from "../../../../public/images/background.jpg";

//responsive - breakpoints
export const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export const Container = styled.div`
  margin: auto;
  text-align: center;
  padding-right: 15px;
  padding-left: 15px;

  @media ${device.laptop} {
    max-width: 800px;
  }

  @media ${device.desktop} {
    max-width: 1400px;
  }
`;

export const HeaderImageContainer = styled.div`
  background-image: url(${solentImage});
  display: flex;
  background-size: cover;
  height: 0;
  align-items: center;
  justify-content: center;
  padding: 200px 0;
  text-align: center;

  margin: auto;
  @media ${device.tablet} {
    text-align: left;
  }

  @media ${device.desktop} {
    max-width: 1400px;
  }
`;

export const HeaderRow = styled.div`
  display: flex;
  // Mobile friendly by default
  flex-direction: column;

  padding: 10px;
  margin: 10px;

  // Switch to rows on large devices
  @media ${device.laptop} {
    flex-direction: row;
  }
`;

export const InputTypeSearch = styled.input`
  height: 20px;
  width: 280px;
  border-radius: 5px 0px 0px 5px;
  padding: 10px;
  font-size: 15px;
  border: 0px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const BackgroundImageText = styled.div`
  color: #ffffff;
  text-justify: left;
`;
export const Heading1 = styled.h1`
  color: #ffffff;
  font-size: 50px;
  margin-bottom: 0;
`;
export const Heading2 = styled.h2`
  color: #ffffff;
  font-size: 15px;
`;
export const Heading3 = styled.h3`
  color: #575757;
  font-size: 28px;
  margin-top: 5px;
`;

export const HeaderRowBs = styled.div`
  display: flex;
  margin-left: -15px;
  margin-right: -15px;
  flex-wrap: wrap;
  align-items: center;
`;

export const HeaderColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;

  @media (min-width: 768px) {
    max-width: 100%;
    display: flex;
    justify-content: center;
  }
`;
//Bootstrap Container
export const ContainerBs = styled.div`
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
  padding-top: 50px;
  padding-bottom: 50px;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`;
