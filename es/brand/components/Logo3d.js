import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { memo } from 'react';
import Img from "../../Img";
import { jsx as _jsx } from "react/jsx-runtime";

const _excluded = ["size", "style", "alt"];

const Logo3d = /*#__PURE__*/memo(function (_ref) {
  const { size = '1em', style, alt = 'Slime.Inc' } = _ref;
  const rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_jsx(Img, _objectSpread({
    alt: alt,
    height: size,
    src: "https://raw.githubusercontent.com/Slime-Inc7/ui/master/slime2.png",
    style: _objectSpread({
      width: size, // 이미지의 width를 size로 설정
      height: size, // 이미지의 height를 size로 설정
    }, style),
    width: size
  }, rest));
});

export default Logo3d;
