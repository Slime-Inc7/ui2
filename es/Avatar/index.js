'use client';

import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { forwardRef, isValidElement, useMemo } from 'react';
import { Avatar as AntAvatar } from 'antd';
import FluentEmoji from "../FluentEmoji";
import Img from "../Img";
import { getEmoji } from "../utils/getEmojiByCharacter";
import { useStyles } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";

const Avatar = /*#__PURE__*/forwardRef(function (_ref, ref) {
  const {
    className,
    avatar,
    title,
    animation,
    size = 40,
    shape = 'circle',
    background = 'rgba(0,0,0,0)',
    style,
    unoptimized,
    ...rest
  } = _ref;

  const isStringAvatar = typeof avatar === 'string';
  const isDefaultAntAvatar = Boolean(avatar && (['/', 'http', 'data:'].some(function (index) {
    return isStringAvatar && avatar.startsWith(index);
  }) || /*#__PURE__*/isValidElement(avatar)));

  const emoji = useMemo(function () {
    return avatar && !isDefaultAntAvatar && isStringAvatar && getEmoji(avatar);
  }, [avatar]);

  const { styles, cx } = useStyles({
    background,
    isEmoji: Boolean(emoji),
    size
  });

  const text = String(isDefaultAntAvatar ? title : avatar);

  const avatarProps = _objectSpread({
    className: cx(styles.avatar, className),
    shape,
    size,
    style: rest?.onClick ? style : _objectSpread({
      cursor: 'default'
    }, style)
  }, rest);

  return isDefaultAntAvatar ? /*#__PURE__*/_jsx(AntAvatar, _objectSpread({
    ref,
    src: typeof avatar === 'string' ? /*#__PURE__*/_jsx(Img, {
      alt: avatarProps.alt || title,
      height: size,
      loading: 'lazy',
      src: avatar,
      width: size
    }) : avatar
  }, avatarProps)) : /*#__PURE__*/_jsx(AntAvatar, _objectSpread(_objectSpread({
    ref
  }, avatarProps), {}, {
    children: emoji ? /*#__PURE__*/_jsx(FluentEmoji, {
      emoji,
      size: size * 0.8,
      type: animation ? 'anim' : '3d',
      unoptimized
    }) : text?.toUpperCase().slice(0, 2)
  }));
});

export default Avatar;
