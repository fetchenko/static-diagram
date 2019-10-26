import React from "react";
import PropTypes from "prop-types";

function HorizontalBrokenLine({ start, end, breakpoint = {} }) {
  if (breakpoint.position === "center") {
    return (
      <path
        d={`M ${start.x} ${start.y} L ${start.x + (end.x - start.x) / 2} ${
          start.y
        } L ${start.x + (end.x - start.x) / 2} ${end.y} L ${end.x} ${end.y} `}
        stroke="blue"
        fill="none"
        strokeWidth={3}
      />
    );
  }

  if (breakpoint.position === "start") {
    return (
      <path
        d={`M ${start.x} ${start.y} L ${end.x} ${start.y} L ${end.x} ${end.y}`}
        stroke="red"
        fill="none"
        strokeWidth={2}
      />
    );
  }

  if (breakpoint.position === "end") {
    return (
      <path
        d={`M ${start.x} ${start.y} L ${start.x} ${end.y} L ${end.x} ${end.y}`}
        stroke="purple "
        fill="none"
        strokeWidth={2}
      />
    );
  }

  return (
    <path
      d={`M ${start.x} ${start.y} L ${end.x} ${end.y} `}
      stroke="#242424"
      strokeWidth={3}
    />
  );
}

HorizontalBrokenLine.propTypes = {
  start: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  }),
  end: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  }),
  breakpoint: PropTypes.shape({
    direction: PropTypes.oneOf("vertical", "horizontal"),
    position: PropTypes.oneOf("start", "center", "end")
  })
};

export default HorizontalBrokenLine;
