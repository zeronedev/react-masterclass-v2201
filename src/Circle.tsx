import styled from "styled-components";

interface circleProps {
  bgColor: string;
}

const Container = styled.div<circleProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
`;

function Circle({ bgColor }: circleProps) {
  return <Container bgColor={bgColor} />;
}

export default Circle;
