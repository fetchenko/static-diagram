// from - object with properties
// to - object with properties

// properties:  position[start, end, center], direction[top, right, botton, left]

export const getShift = (position, length) => {
  let shift = 0;
  switch (position) {
    case "start":
      shift = 0;
      break;

    case "center":
      shift = length / 2;
      break;

    case "end":
      shift = length;
      break;

    default:
      shift = 0;
  }

  return shift;
};

export const getPoint = (
  element = {},
  position = "center",
  direction = "top"
) => {
  const { coords: { x, y } = {}, size: { width, height } = {} } = element;

  const horizontalShift = getShift(position, width);
  const verticalShift = getShift(position, height);

  switch (direction) {
    case "top":
      return { x: x + horizontalShift, y };

    case "right":
      return { x: x + width, y: y + verticalShift };

    case "bottom":
      return { x: x + horizontalShift, y: y + height };

    case "left":
      return { x, y: y + verticalShift };

    default:
      return { x, y };
  }
};

export const getArrowCoords = (from, to) => {
  const {
    element: fromElement,
    position: fromElPosition,
    direction: fromElDirection
  } = from;
  const {
    element: toElement,
    position: toElPosition,
    direction: toElDirection
  } = to;

  const fromPoint = getPoint(fromElement, fromElPosition, fromElDirection);
  const toPoint = getPoint(toElement, toElPosition, toElDirection);

  return {
    start: fromPoint,
    end: toPoint
  };
};