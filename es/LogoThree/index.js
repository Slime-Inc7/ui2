'use client';

import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { memo, useState, useCallback } from 'react';
import { Flexbox } from 'react-layout-kit';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

const LOGO_URL = 'https://raw.githubusercontent.com/Slime-Inc7/ui/master/logo-3d.png';

const LogoThree = /*#__PURE__*/memo(function (_ref) {
  const { className, style, size = 128 } = _ref;
  const [_useState, _useState2] = _slicedToArray(useState(true), 2);
  const [loading, setLoading] = _useState;
  const handleLoad = useCallback(() => {
    setLoading(false);
  }, []);

  return /*#__PURE__*/_jsxs(Flexbox, {
    align: 'center',
    children: [ // 모든 객체 키를 알파벳 순으로 정렬
      loading && /*#__PURE__*/_jsx("img", {
        alt: 'logo',
        height: size * 0.75,
        onLoad: handleLoad,
        src: LOGO_URL,
        style: {
          position: 'absolute'
        },
        width: size * 0.75
      }),
      !loading && /*#__PURE__*/_jsx("img", {
        alt: 'logo',
        height: size,
        src: LOGO_URL,
        style: {
          flex: 'none',
          height: size,
          width: size
        }
      })
    ],
    className: className,
    flex: 'none',
    justify: 'center',
    style: _objectSpread({
      height: size,
      overflow: 'hidden',
      position: 'relative',
      width: size
    }, style)
  });
});

export default LogoThree;
