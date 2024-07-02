import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { memo, useState, useCallback } from 'react';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

const LOGO_URL = 'https://raw.githubusercontent.com/Slime-Inc7/ui/master/logo-3d.png';

const LogoSpline = /*#__PURE__*/memo(function (_ref) {
  const { className, style, width, height } = _ref;
  const [_useState, _useState2] = _slicedToArray(useState(true), 2);
  const [loading, setLoading] = _useState;
  const handleLoad = useCallback(() => {
    setLoading(false);
  }, []);

  return /*#__PURE__*/_jsxs("div", {
    children: [ // children을 가장 먼저 배치
      loading && /*#__PURE__*/_jsx("img", {
        alt: 'logo',
        height: height * 0.75,
        onLoad: handleLoad,
        src: LOGO_URL,
        style: {
          position: 'absolute'
        },
        width: width * 0.75
      }),
      !loading && /*#__PURE__*/_jsx("img", {
        alt: 'logo',
        height: height,
        src: LOGO_URL,
        style: {
          flex: 'none',
          height: height,
          width: width
        }
      })
    ],
    className: className, // className을 style 앞에 배치
    style: _objectSpread({
      height: height,
      position: 'relative',
      width: width
    }, style)
  });
});

export default LogoSpline;
