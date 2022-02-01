import styled from "styled-components";

const ModalContainer = styled.div`
  top: 50%;
  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: clamp(300px, 30vw, 500px);
  height: clamp(340px, 30vh, 500px);
  border-radius: 12px;
  display: flex;
  gap: 0.6rem;
  align-content: center;
  flex-direction: column;
  padding: 0.7rem;
  background-color: white;
  border: 2px solid #495a5a;
`;

const OverlayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 600;
`;

export { ModalContainer, OverlayContainer };
