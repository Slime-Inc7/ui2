'use client';

import { Button, ConfigProvider } from 'antd';
import { useResponsive } from 'antd-style';
import * as LucideIcon from 'lucide-react';
import { memo, useCallback } from 'react';
import { Center, Flexbox } from 'react-layout-kit';
import GradientButton from "../GradientButton";
import GridBackground from "../GridBackground";
import Icon from "../Icon";
import { useStyles } from "./style";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

const Hero = /*#__PURE__*/memo(function (_ref) {
  const {
    title,
    description,
    actions
  } = _ref;

  const { styles } = useStyles();
  const { mobile } = useResponsive();

  const ButtonGroups = useCallback(function () {
    return Boolean(actions?.length) && /*#__PURE__*/_jsx(Flexbox, {
      children: actions.map(function (_ref2, index) {
        const { text, link, openExternal, icon, type } = _ref2;
        const ButtonIcon = icon && LucideIcon[icon];
        return /*#__PURE__*/_jsx("a", {
          children: type === 'primary' ? /*#__PURE__*/_jsx(GradientButton, {
            block: mobile,
            children: text,
            icon: ButtonIcon && /*#__PURE__*/_jsx(Icon, {
              icon: ButtonIcon
            }),
            size: "large"
          }, index) : /*#__PURE__*/_jsx(Button, {
            block: mobile,
            children: text,
            icon: ButtonIcon && /*#__PURE__*/_jsx(Icon, {
              icon: ButtonIcon
            }),
            size: "large",
            type: "primary"
          }, index),
          href: link,
          rel: "noreferrer",
          target: openExternal ? '_blank' : undefined
        }, text);
      }),
      className: styles.actions,
      gap: 24,
      horizontal: true,
      justify: 'center'
    });
  }, [actions]);

  return /*#__PURE__*/_jsx(ConfigProvider, {
    children: /*#__PURE__*/_jsxs(Flexbox, {
      align: 'center',
      children: [
        /*#__PURE__*/_jsxs(Flexbox, {
        children: [
            /*#__PURE__*/_jsx("div", {
          className: styles.canvas
        }),
            /*#__PURE__*/_jsxs(Center, {
          children: [
            title && /*#__PURE__*/_jsx("h1", {
              className: styles.title,
              dangerouslySetInnerHTML: {
                __html: title
              }
            }),
            description && /*#__PURE__*/_jsx("p", {
              className: styles.desc,
              dangerouslySetInnerHTML: {
                __html: description
              }
            }),
                /*#__PURE__*/_jsx(ButtonGroups, {})
          ]
        })
        ],
        className: styles.container,
        distribution: 'center',
        horizontal: true
      }),
        /*#__PURE__*/_jsx(GridBackground, {
        animation: true,
        random: true,
        strokeWidth: 4,
        style: {
          maxWidth: 960,
          width: '120%'
        }
      })
      ],
      theme: {
        token: {
          fontSize: 16
        }
      }
    })
  });
});

export default Hero;
