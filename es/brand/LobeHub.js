'use client';

import { useTheme } from 'antd-style';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';
import Divider from "./components/Divider";
import LogoText from "./components/LobeHubText";
import Logo3d from "./components/Logo3d";
import LogoFlat from "./components/LogoFlat";
import LogoMono from "./components/LogoMono";
import { useStyles } from "./style";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

const _excluded = ["type", "size", "style", "extra", "className"];

const LobeHub = /*#__PURE__*/memo(function (_ref) {
  const { type = '3d', size = 32, style, extra, className } = _ref;
  const rest = _objectWithoutProperties(_ref, _excluded);
  const theme = useTheme();
  const { styles } = useStyles();
  let logoComponent;

  switch (type) {
    case '3d': {
      logoComponent = /*#__PURE__*/_jsx(Logo3d, _objectSpread({ size: size }, rest));
      break;
    }
    case 'flat': {
      logoComponent = /*#__PURE__*/_jsx(LogoFlat, { size: size, style: style });
      break;
    }
    case 'mono': {
      logoComponent = /*#__PURE__*/_jsx(LogoMono, { size: size, style: style });
      break;
    }
    case 'text': {
      logoComponent = /*#__PURE__*/_jsx(LogoText, _objectSpread({ className: className, size: size, style: style }, rest));
      break;
    }
    case 'combine': {
      logoComponent = /*#__PURE__*/_jsxs(_Fragment, {
        children: [
          /*#__PURE__*/_jsx(Logo3d, { alt: "KingSlime", size: size }),
          /*#__PURE__*/_jsx(LogoText, {
          size: size,
          style: {
            marginLeft: Math.round(size / 4)
          }
        })
        ]
      });
      if (!extra) {
        logoComponent = /*#__PURE__*/_jsx(Flexbox, {
          align: 'center',
          children: logoComponent,
          className: className,
          flex: 'none',
          horizontal: true,
          style: style
        });
      }
      break;
    }
    default:
      break;
  }
  if (!extra) return logoComponent;
  const extraSize = Math.round(size / 3 * 1.9);
  return /*#__PURE__*/_jsxs(Flexbox, _objectSpread(_objectSpread({
    align: 'center',
    children: [
      logoComponent,
      /*#__PURE__*/_jsx(Divider, { size: extraSize, style: { color: theme.colorFill } }),
      /*#__PURE__*/_jsx("div", {
        children: extra,
        className: styles.extraTitle,
        style: { fontSize: extraSize }
      })
    ],
    className: className,
    flex: 'none',
    horizontal: true,
    style: style
  }, rest)));
});

export default LobeHub;
