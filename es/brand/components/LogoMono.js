import { memo } from 'react';
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { jsx as _jsx } from "react/jsx-runtime";

const _excluded = ["size", "style"];

const LogoMono = /*#__PURE__*/memo(function (_ref) {
  const {
    size = '1em',
    style,
    ...rest
  } = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_jsx("img", {
    alt: "LogoMono",
    height: size,
    src: "https://raw.githubusercontent.com/Slime-Inc7/ui/master/slime2.png",
    style: _objectSpread({
      flex: 'none',
      lineHeight: 1
    }, style),
    width: size,
    ...rest
  });
});

export default LogoMono;
