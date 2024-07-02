import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { memo } from 'react';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

const _excluded = ["size", "style"];

const LobeHubText = /*#__PURE__*/memo(function (_ref) {
  const { size: _size = '100%', style } = _ref;
  const rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_jsxs("svg", _objectSpread(_objectSpread({
    fill: "currentColor",
    fillRule: "evenodd",
    height: "45px", // 높이를 비율에 맞게 설정
    style: _objectSpread({
      flex: 'none',
      lineHeight: 1
    }, style),
    viewBox: "0 0 120 45", // viewBox를 조정하여 비율을 맞춤
    width: "120px", // 너비를 120px로 설정
    xmlns: "http://www.w3.org/2000/svg"
  }, rest), {}, {
    children: [
      /*#__PURE__*/_jsx("title", {
      children: "Slime.Inc"
    }),
      /*#__PURE__*/_jsx("text", {
      children: "Slime.Inc",
      dominantBaseline: "middle",
      dy: ".35em",
      fill: "currentColor",
      fontFamily: "Roboto, sans-serif",
      fontSize: "23.5", // 폰트 크기를 23.5px로 설정
      fontWeight: "900",
      style: { textShadow: "2px 2px 4px rgba(0,0,0,0.2)" },
      textAnchor: "middle",
      x: "50%",
      y: "50%"
    })
    ]
  }));
});

export default LobeHubText;
