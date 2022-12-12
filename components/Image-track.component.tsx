import { AnimationControls, motion } from "framer-motion";

interface Props {
  children: React.ReactElement | React.ReactElement[];
  animationControl: AnimationControls;
  onCursorDown: (event: any) => void;
  onCusrorUp: (event: any) => void;
  onCursorMove: (event: any) => void;
}

export const ImageTrack = ({ animationControl, children, onCursorDown, onCursorMove, onCusrorUp }: Props) => (
  <motion.div
    initial={{ width: "100vw", height: "100vh", alignItems: "center", overflow: "visible" }}
    animate={animationControl}
    onMouseDown={onCursorDown}
    onTouchStart={onCursorDown}
    onMouseMove={onCursorMove}
    onTouchMove={onCursorMove}
    onMouseUp={onCusrorUp}
    onTouchEnd={onCusrorUp}
  >
    {children}
  </motion.div>
);
