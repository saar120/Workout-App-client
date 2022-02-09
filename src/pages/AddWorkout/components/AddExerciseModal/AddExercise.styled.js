import styled from "styled-components";
import { COLORS } from "../../../../constants/colors.constants";

const ModalContainer = styled.div`
  top: 50%;
  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: clamp(340px, 30vw, 500px);
  height: clamp(350px, 70vh, 600px);
  border-radius: 12px;
  display: flex;
  gap: 0.6rem;
  align-content: center;
  flex-direction: column;
  padding: 1.3rem;
  background-color: ${COLORS.light};
  box-shadow: ${COLORS.boxShadow};
  outline: 0;
`;

export { ModalContainer };
