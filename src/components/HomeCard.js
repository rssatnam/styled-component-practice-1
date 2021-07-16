import styled from "styled-components";
import Checkbox from "./Checkbox";

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  max-width: 700px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${({ theme }) => theme.background};
`;

const H2 = styled.h2`
  color: ${({ theme }) => theme.color};
`;

const P = styled.p`
  color: ${({ theme }) => theme.color};
`;

export default function HomeCard({ theme, setTheme, WebTheme }) {
  return (
    <Wrapper>
      <Checkbox theme={theme} setTheme={setTheme} WebTheme={WebTheme} />
      <div className="homeCard">
        <H2>Testing the Theme Switcher</H2>
        <P>
          <strong>Lorem Ipsum</strong> is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </P>
      </div>
    </Wrapper>
  );
}
