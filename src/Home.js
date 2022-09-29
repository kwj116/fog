import styled from "styled-components";
import { Link } from "react-router-dom";
import "./css/reset.css";
import Nag from "./img/Nag.png";
import Colins from "./img/Colins.jpg";

function Home() {
  const Father = styled.div`
    height: 500vh;
    width: 100vw;
    display: flex;
    justify-content: center;
  `;

  const Header = styled.div`
    position: fixed;
    margin-top: 2%;
    font-size: 30px;
    font-weight: 600;
  `;

  const Bar_left = styled.span`
    display: flex;
    position: fixed;
    margin-top: 3%;
    left: 5vw;
    color: black;
  `;

  const Bar_right = styled.span`
    display: flex;
    position: fixed;
    margin-top: 3%;
    right: 5vw;
    color: black;
  `;
  const Span = styled.span`
    color: black;
    margin-right: 2vw;
    font-weight: 600;
  `;
  const Nagch = styled.img.attrs({ src: `${Nag}` })`
    position: absolute;
    margin-top: 30vh;
    width: 150px;
    height: 97px;
  `;

  return (
    <Father>
      <Bar_left>
        <Link to="/sale">
          <Span>Sale</Span>
        </Link>
        <Link to="/event">
          <Span>Event</Span>
        </Link>
        <Link to="/product">
          <Span>Product</Span>
        </Link>
      </Bar_left>
      <Bar_right>
        <Link to="/login">
          <Span>Login</Span>
        </Link>
        <Link to="/login">
          <Span>Service center</Span>
        </Link>
      </Bar_right>

      <Header>Fog</Header>
      <Nagch />
    </Father>
  );
}

export default Home;
