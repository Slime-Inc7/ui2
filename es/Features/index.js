'use client';

import { memo } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import SpotlightCard from "../SpotlightCard";
import { default as Item } from "./Item";

const _excluded = ["items", "className", "itemClassName", "itemStyle", "maxWidth", "style"];

const Features = /*#__PURE__*/memo(function (_ref) {
  const {
    items,
    className,
    itemClassName,
    itemStyle,
    maxWidth = 960,
    style,
    ...rest
  } = _ref;

  if (!(items && items.length)) return null;

  return /*#__PURE__*/_jsx(SpotlightCard, _objectSpread({
    className: className,
    items: items,
    renderItem: function renderItem(item) {
      return /*#__PURE__*/_jsx(Item, _objectSpread({
        className: itemClassName,
        style: itemStyle
      }, item), item.title);
    },
    style: _objectSpread({
      maxWidth: maxWidth
    }, style)
  }, rest));
});

export default Features;
