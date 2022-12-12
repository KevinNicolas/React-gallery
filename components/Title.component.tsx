import { motion } from "framer-motion";
import styled from "styled-components";

const TitleStyles = styled(motion.div)`
  position: fixed;
  top: 10px;
  width: 100vw;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: "Montserrat", sans-serif;
  }
`;

export const Title = () => (
  <TitleStyles animate={{ opacity: 1, transition: { duration: 1 } }}>
    <h1>REACT GALLERY</h1>
  </TitleStyles>
);
