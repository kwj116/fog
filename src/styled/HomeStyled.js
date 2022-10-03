import styled from "styled-components";
import nag from "../img/Nag.png";
import main from "../img/main.jpg";
import Colins from "../img/Colins.jpg";
import jull from "../img/jull.jpg";
import hem from "../img/hem.png";
import { ani } from "../animation/Scroll";

const Video = styled.video`
  position: absolute;
  margin-top: 15vh;
  width: 100vw;
  height: 110vh;
  z-index: -1;
`;
const Father = styled.div`
  position: relative;
  justify-content: center;
  height: 100vh;
  display: flex;
`;

const Fog = styled.div`
  display: flex;
  position: fixed;
  margin-top: 1.7%;
  left: 5vw;
  font-size: 3em;
`;

const Bar = styled.div`
  position: fixed;
  width: 100%;
  height: 15vh;
`;

const Bar_left = styled.span`
  position: fixed;
  margin-top: 3.3%;
  font-size: 1em;

  margin-left: 15%;
`;

const Bar_right = styled.span`
  display: flex;
  position: fixed;
  margin-top: 3.3%;
  right: 5vw;
  font-size: 1em;
`;
const Span = styled.span`
  color: white;
  margin-right: 2vw;
  font-weight: bold;

  :hover {
    text-decoration: underline;
  }
`;
const Main = styled.img.attrs({ src: `${main}` })`
  border-radius: 300px 0 300px 0;
  position: absolute;
  margin-top: 15vh;
  width: 100%;
  height: 100vh;
  z-index: -1;
  opacity: 0.9;
`;

const Nag = styled.img.attrs({ src: `${nag}` })`
  position: absolute;
  margin-top: 140vh;
  right: 75%;
  width: 16%;
  height: 15vh;
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.5));
  background-color: white;
  z-index: -1;
`;

const Nag_text = styled.p`
  position: absolute;
  line-height: 6vh;
  color: white;
  font-size: 1.3em;
  top: 160vh;
  right: 70%;
  font-weight: bold;
  width: 22%;

  z-index: -1;
`;

const Col = styled.img.attrs({ src: `${Colins}` })`
  position: absolute;
  margin-top: 180vh;
  right: 43%;
  width: 16%;
  height: 15vh;
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.5));
  z-index: -1;
`;
const Col_text = styled.p`
  line-height: 6vh;
  color: white;
  position: absolute;
  margin-top: 200vh;
  right: 40%;
  width: 20%;
  height: 15vh;
  font-weight: bold;
  font-size: 1.3em;
`;

const Hem = styled.img.attrs({ src: `${hem}` })`
  position: absolute;
  margin-top: 220vh;
  right: 15%;
  width: 16%;
  height: 30vh;
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.5));
  background-color: white;
  z-index: -1;
`;

const Hem_text = styled.p`
  line-height: 6vh;
  color: white;
  position: absolute;
  margin-top: 255vh;
  right: 3%;
  width: 29%;
  height: 15vh;
  font-weight: bold;
  font-size: 1.3em;
`;

const Incense = styled.p`
  position: absolute;
  margin-top: 65vh;
  font-size: 6em;
  color: white;
`;

const Text = styled.p`
  position: absolute;
  margin-top: 80vh;
  font-size: 1em;
  color: white;
`;

export {
  Video,
  Col,
  Nag,
  Father,
  Fog,
  Bar_left,
  Bar_right,
  Span,
  Main,
  Incense,
  Bar,
  Text,
  Nag_text,
  Col_text,
  Hem,
  Hem_text,
};
