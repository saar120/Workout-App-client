import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants/colors.constants";

const Title = styled.div`
  display: inline-block;
  color: ${COLORS.secondary};
  font-size: 1.2rem;
  margin-right: 1rem;
  text-align: center;
`;

const Text = styled.div`
  display: inline-block;
  color: ${COLORS.primary};
  font-size: 1rem;
`;

function Description({ title, body }) {
  return (
    <div>
      <Title>{title}</Title>

      <Text>{body}</Text>
    </div>
  );
}

export default Description;
