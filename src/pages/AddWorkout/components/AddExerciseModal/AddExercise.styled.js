import styled from "styled-components";
import { COLORS } from "../../../../constants/colors.constants";

const ModalContainer = styled.div`
  top: 50%;
  position: fixed;
  left: 50%;
  transform: translate(-50%, -60%);
  z-index: 1000;
  width: clamp(300px, 30vw, 500px);
  height: clamp(340px, 60vh, 500px);
  border-radius: 12px;
  display: flex;
  gap: 0.6rem;
  align-content: center;
  flex-direction: column;
  padding: 1.3rem;
  background-color: ${COLORS.light};
  box-shadow: ${COLORS.boxShadow};
`;

export { ModalContainer };
