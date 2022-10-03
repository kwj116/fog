import {
  Father,
  Fog,
  Bar_left,
  Bar_right,
  Span,
  Bar,
} from "../styled/HomeStyled";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Father>
      <Bar>
        <Bar_left>
          <Link to="/event">
            <Span>소식</Span>
          </Link>
          <Link to="/product">
            <Span>스토어</Span>
          </Link>
          <Link to="/community">
            <Span>커뮤니티</Span>
          </Link>
        </Bar_left>
        <Bar_right>
          <Link to="/login">
            <Span>로그인</Span>
          </Link>
          <Link to="/mypage">
            <Span>마이페이지</Span>
          </Link>
        </Bar_right>
        <Fog>
          <Link style={{ color: "white" }} to="/">
            Fog
          </Link>
        </Fog>
      </Bar>
    </Father>
  );
}

export default Header;
