import { useAnimation } from "framer-motion";
import { BaseSyntheticEvent, useState } from "react";
import { ImageTrack, Images, Title } from "../components";
import { vmin } from "../utils";

export const Gallery = () => {
  const imageTrackController = useAnimation();

  const [imagesIsExpanded, setimagesIsExpanded] = useState(false);

  const [isCusorDown, setisCusorDown] = useState(false);
  const [cursorDownLocation, setcursorDownLocation] = useState(0);
  const [currentPercentage, setcurrentPercentage] = useState(0);
  const [storedPercentage, setstoredPercentage] = useState(0);

  const handleImageClick = (event: BaseSyntheticEvent): void => {
    const clickedImage = document.getElementById(event.target.id);
    if (!clickedImage) return;

    clickedImage.style.zIndex = "10";
    clickedImage.animate(
      {
        width: "100vw",
        height: "calc(100vh - 220px)",
        transform: "translate(-50%, -50%)",
        top: "40%",
        left: "50%",
        objectPosition: "center",
      },
      { duration: 800, fill: "forwards", easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
    );

    const images = document.getElementsByClassName("image-gallery");
    const imageIds = [];
    for (let i = 0; i < images.length; i++) if (images[i].id !== clickedImage.id) imageIds.push(images[i].id);
    console.info(imageIds);

    let boxCount = images.length - 2;
    let delayCount = 1;
    for (let i = 0; i < imageIds.length; i++) {
      const currentImage = document.getElementById(imageIds[i]);
      if (!currentImage || currentImage.id === clickedImage.id) continue;
      currentImage.style.zIndex = "15";
      currentImage.animate(
        {
          width: "100px",
          height: "100px",
          left: "calc(100% - 110px)",
          top: "calc(100% - 20px)",
          transform: `translate(${boxCount * -110}px, -100%)`,
          objectPosition: "center",
        },
        { duration: 500, fill: "forwards", delay: imagesIsExpanded ? 0 : delayCount * 30, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
      );

      boxCount--;
      delayCount++;
    }

    setimagesIsExpanded(true);
  };

  const handleCursorDown = (event: unknown) => {
    const clientX = (event as MouseEvent).clientX ?? (event as TouchEvent).changedTouches[0].clientX;
    setcursorDownLocation(clientX);
    setisCusorDown(true);
  };

  const handleCursorUp = () => {
    setstoredPercentage(currentPercentage);
    setisCusorDown(false);
  };

  const handleCursorMove = (event: unknown) => {
    if (!isCusorDown) return;
    setimagesIsExpanded(false);
    const clientX = (event as MouseEvent).clientX ?? (event as TouchEvent).changedTouches[0].clientX;

    const maxDelta = window.innerWidth / 2;
    const cursorDelta = cursorDownLocation - clientX;

    let percentage = (cursorDelta / maxDelta) * -60 + storedPercentage;
    percentage = Math.min(percentage, 0);
    percentage = Math.max(percentage, -100);
    setcurrentPercentage(percentage);

    const images = document.getElementsByClassName("image-gallery");
    const maxPercentage = vmin(40) * images.length + 50 * images.length;

    for (let i = 0; i < images.length; i++)
      images[i].animate(
        {
          transform: `translate(calc(${vmin(40) * i + maxPercentage * (percentage / 100)}px + ${50 * i}px), -50%)`,
          width: "40vmin",
          height: "56vmin",
          left: "50%",
          top: "50%",
          objectFit: "cover",
          objectPosition: `${Math.abs(percentage)}% center`,
        },
        {
          duration: 1200,
          fill: "forwards",
        }
      );
  };

  return (
    <div>
      <Title />
      <ImageTrack animationControl={imageTrackController} onCursorDown={handleCursorDown} onCursorMove={handleCursorMove} onCusrorUp={handleCursorUp}>
        <Images handleImageClick={handleImageClick} />
      </ImageTrack>
    </div>
  );
};

export default Gallery;
