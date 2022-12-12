import styled from "styled-components";
import { AnimationControls, motion } from "framer-motion";
import { imagesUrls } from "../models";

interface Props {
  handleImageClick: (event: any) => void;
}

export const Images = ({ handleImageClick }: Props) => {
  return (
    <>
      {imagesUrls.map((imageurl, index) => (
        <motion.img
          key={index}
          src={imageurl}
          alt="Image-gallery"
          id={`image-${index}`}
          className="image-gallery"
          initial={{
            width: "40vmin",
            height: "56vmin",
            objectFit: "cover",
            objectPosition: "0% center",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: `translate(calc(${40 * index}vmin + ${50 * index}px), -50%)`,
            userSelect: "none",
            zIndex: 10,
            opacity: 0,
          }}
          animate={{ opacity: 1, transition: { duration: 0.8, delay: 0.2 * index } }}
          onClick={handleImageClick}
          draggable={false}
        />
      ))}
    </>
  );
};
