import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { memo } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";

const _excluded = ["size", "style"];

const Divider = /*#__PURE__*/memo(function (_ref) {
  const { size = '1em', style } = _ref;
  const rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_jsx("svg", _objectSpread(_objectSpread({
    fill: "none",
    height: size,
    shapeRendering: "geometricPrecision",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: _objectSpread({
      flex: 'none',
      lineHeight: 1
    }, style),
    viewBox: "0 0 24 24",
    width: size
  }, rest), {}, {
    children: /*#__PURE__*/_jsx("path", {
      d: "M16.88 3.549L7.12 20.451"
    })
  }));
});

export default Divider;
