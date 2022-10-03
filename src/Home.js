import { Link } from "react-router-dom";
import "./css/reset.css";
import video from "./img/video.mp4";
import {
  Father,
  Fog,
  Bar_left,
  Bar_right,
  Span,
  Main,
  Incense,
  Nag,
  Col,
  Video,
  Bar,
  Text,
  Nag_text,
  Col_text,
  Hem,
  Hem_text,
} from "./styled/HomeStyled";
import { useRef } from "react";

import useScrollFadeIn from "./animation/hook";
function Home() {
  const animatedItem = useScrollFadeIn();

  return (
    <Father {...animatedItem}>
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
      <Incense>Incense</Incense>
      <Text>'불태우다, 밝게 하다'</Text>

      <Main />

      <Nag />
      <Nag_text>
        "1964년 뭄바이(MUM)에서 탄생한 세계인이 사랑하는 향, 나그참파"
      </Nag_text>
      <Col />
      <Col_text>
        "당신의 사소하지만 소중한 순간 그 순간을 채우는 분위기"
      </Col_text>
      <Hem />
      <Hem_text>
        "인도 고급 향료와 핸드메이드 공법으로 완성한 100가지 이상의 다양한
        인센스를 보유"
      </Hem_text>
    </Father>
  );
}

export default Home;
