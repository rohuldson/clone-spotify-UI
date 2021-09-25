import styled from "styled-components";

const FooterComponet = styled.footer`
  width: 100vw;
  height: 95px;
  border-top: 1px solid #eaeaea;
  background-color: #181818;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
      color: #fff;
  }
`;


// export default Footer;
export default function Footer() {
    return (
        <FooterComponet>
            <p>Este é o footer</p>
        </FooterComponet>
    );
}
