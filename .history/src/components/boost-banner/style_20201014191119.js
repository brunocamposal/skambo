import styled from "styled-components";

export const MainBanner = styled.div`
  background: rgb(236, 232, 189);
  background: radial-gradient(
    circle,
    rgba(236, 232, 189, 1) 0%,
    rgba(235, 56, 209, 1) 100%
  );
  background: rgb(251, 237, 186);
  background: linear-gradient(
    180deg,
    rgba(251, 237, 186, 1) 0%,
    rgba(146, 110, 193, 1) 100%
  );
  display: grid;
  width: 900px;
  height: 300px;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
`;

export const Img = styled.img`
  border-radius: 8px;
  box-shadow: 4px 4px 0 0 #224c;
  max-width: 290px;
  max-height: 190px;
  transform: rotate(-12deg);
  transition: transform 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Infos = styled.div`
  display: grid;
  h2 {
    color: transparent;
    background: #7779;
    font-weight: 900;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);
  }
  h3 {
    color: white;
    text-shadow: 2px 2px 2px #200d;
  }
`;
