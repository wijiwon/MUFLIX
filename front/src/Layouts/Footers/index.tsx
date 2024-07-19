import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FooterContainer, IconBox, LinkBox, CopyrightBox } from "./style";

const Footer = () => {
  return (
    <FooterContainer>
      <IconBox>
        <a href="https://github.com/wijiwon/MUFLIX" target="_blank">
          <FaGithub style={{ width: "36px", height: "25px", color: "white" }} />
        </a>
        <a style={{ marginLeft: "15px" }}>
          <FaFacebook
            style={{
              width: "36px",
              height: "25px",
              color: "white",
              cursor: "pointer",
            }}
          />
        </a>
        <a style={{ marginLeft: "15px" }}>
          <FaInstagram
            style={{
              width: "36px",
              height: "25px",
              color: "white",
              cursor: "pointer",
            }}
          />
        </a>
        <a style={{ marginLeft: "15px" }}>
          <FaTwitter
            style={{
              width: "36px",
              height: "25px",
              color: "white",
              cursor: "pointer",
            }}
          />
        </a>
        <a style={{ marginLeft: "15px" }}>
          <FaYoutube
            style={{
              width: "36px",
              height: "25px",
              color: "white",
              cursor: "pointer",
            }}
          />
        </a>
      </IconBox>
      <LinkBox>
        <li>
          <a>화면 해설</a>
        </li>
        <li>
          <a>고객 센터</a>
        </li>
        <li>
          <a>기프트카드</a>
        </li>
        <li>
          <a>미디어센터</a>
        </li>
        <li>
          <a>투자 정보(IR)</a>
        </li>
        <li>
          <a>입사 정보</a>
        </li>
        <li>
          <a>이용 약관</a>
        </li>
        <li>
          <a>개인정보</a>
        </li>
        <li>
          <a>법적 고지</a>
        </li>
        <li>
          <a>쿠키 설정</a>
        </li>
        <li>
          <a>회사 정보</a>
        </li>
        <li>
          <a>문의 하기</a>
        </li>
      </LinkBox>
      <CopyrightBox>
        <div>
          뮤플릭스서비시스코리아 통신판매업신고번호: 제2024-뮤플릭스-0719호
          전화번호: 010-0000-0000 (수신자 부담)
        </div>
        <div>대표: 위지원</div>
        <div>이메일 주소: dnlwldnjs@gmail.com</div>
        <div>
          주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층
          우편번호 03161
        </div>
        <div>© 2024. Weeji. All rights reserved.</div>
      </CopyrightBox>
    </FooterContainer>
  );
};

export default Footer;
