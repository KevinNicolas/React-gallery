export const vh = (percent: number) => {
  const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return (percent * h) / 100;
};

export const vw = (percent: number) => {
  const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return (percent * w) / 100;
};

export const vmin = (percent: number) => {
  return Math.min(vh(percent), vw(percent));
};

export const vmax = (percent: number) => {
  return Math.max(vh(percent), vw(percent));
};
