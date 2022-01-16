import { useState } from "react";
import styled from "styled-components";

interface containerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<containerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 4px solid ${(props) => props.borderColor};
`;
interface circleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

function Circle({ bgColor, borderColor }: circleProps) {
  const [value, setValue] = useState<string>("");
  return (
    <Container
      bgColor={bgColor}
      borderColor={borderColor ?? bgColor}
    ></Container>
  );
}

export default Circle;
