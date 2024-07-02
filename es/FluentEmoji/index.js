'use client';

import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { memo, useState } from 'react';
import { Center } from 'react-layout-kit';
import Img from "../Img";
import { useStyles } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";

const FluentEmoji = /*#__PURE__*/memo(function (_ref) {
  const {
    emoji,
    className,
    style,
    _ref$type = '3d',
    type = _ref$type,
    _ref$size = 40,
    size = _ref$size,
    unoptimized
  } = _ref;

  const [loadingFail, setLoadingFail] = useState(false);

  const { cx, styles } = useStyles();

  // 고정된 이미지 URL
  const fixedImageUrl = 'https://raw.githubusercontent.com/Slime-Inc7/ui/master/logo-3d.png';

  if (type === 'pure' || loadingFail) {
    return /*#__PURE__*/_jsx(Center, {
      className: cx(styles.container, className),
      flex: 'none',
      height: size,
      style: _objectSpread({
        fontSize: size * 0.9
      }, style),
      width: size,
      children: emoji
    });
  }

  return /*#__PURE__*/_jsx(Img, {
    alt: emoji,
    className: className,
    height: size,
    loading: 'lazy',
    onError: function onError() {
      return setLoadingFail(true);
    },
    src: fixedImageUrl,
    style: _objectSpread({
      flex: 'none'
    }, style),
    unoptimized: unoptimized,
    width: size
  });
});

export default FluentEmoji;
