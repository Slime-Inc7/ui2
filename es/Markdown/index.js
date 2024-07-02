'use client';

import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "className", "style", "fullFeaturedCodeBlock", "onDoubleClick", "enableImageGallery", "componentProps", "allowHtml", "fontSize", "headerMultiple", "marginMultiple", "variant", "lineHeight"];
import { memo, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import ImageGallery from "../Image/ImageGallery";
import Image from "../mdx/Image";
import Link from "../mdx/Link";
import Video from "../mdx/Video";
import { CodeFullFeatured, CodeLite } from "./CodeBlock";
import { useStyles as useMarkdownStyles } from "./markdown.style";
import { useStyles } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
var Markdown = /*#__PURE__*/memo(function (_ref) {
  var children = _ref.children,
    className = _ref.className,
    style = _ref.style,
    fullFeaturedCodeBlock = _ref.fullFeaturedCodeBlock,
    onDoubleClick = _ref.onDoubleClick,
    _ref$enableImageGalle = _ref.enableImageGallery,
    enableImageGallery = _ref$enableImageGalle === void 0 ? true : _ref$enableImageGalle,
    componentProps = _ref.componentProps,
    allowHtml = _ref.allowHtml,
    fontSize = _ref.fontSize,
    headerMultiple = _ref.headerMultiple,
    marginMultiple = _ref.marginMultiple,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'normal' : _ref$variant,
    lineHeight = _ref.lineHeight,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useStyles = useStyles({
      fontSize: fontSize,
      headerMultiple: headerMultiple,
      lineHeight: lineHeight,
      marginMultiple: marginMultiple
    }),
    cx = _useStyles.cx,
    styles = _useStyles.styles;
  var _useMarkdownStyles = useMarkdownStyles({
      fontSize: fontSize,
      headerMultiple: headerMultiple,
      marginMultiple: marginMultiple
    }),
    mdStyles = _useMarkdownStyles.styles;
  var isChatMode = variant === 'chat';
  var components = useMemo(function () {
    return {
      a: function a(props) {
        return /*#__PURE__*/_jsx(Link, _objectSpread(_objectSpread({}, props), componentProps === null || componentProps === void 0 ? void 0 : componentProps.a));
      },
      img: enableImageGallery ? function (props) {
        var _componentProps$img, _componentProps$img2;
        return /*#__PURE__*/_jsx(Image, _objectSpread(_objectSpread(_objectSpread({}, props), componentProps === null || componentProps === void 0 ? void 0 : componentProps.img), {}, {
          style: isChatMode ? _objectSpread({
            height: 'auto',
            maxWidth: 640
          }, componentProps === null || componentProps === void 0 || (_componentProps$img = componentProps.img) === null || _componentProps$img === void 0 ? void 0 : _componentProps$img.style) : componentProps === null || componentProps === void 0 || (_componentProps$img2 = componentProps.img) === null || _componentProps$img2 === void 0 ? void 0 : _componentProps$img2.style
        }));
      } : undefined,
      pre: function pre(props) {
        return fullFeaturedCodeBlock ? /*#__PURE__*/_jsx(CodeFullFeatured, _objectSpread(_objectSpread({}, props), componentProps === null || componentProps === void 0 ? void 0 : componentProps.pre)) : /*#__PURE__*/_jsx(CodeLite, _objectSpread(_objectSpread({}, props), componentProps === null || componentProps === void 0 ? void 0 : componentProps.pre));
      },
      video: function video(props) {
        return /*#__PURE__*/_jsx(Video, _objectSpread(_objectSpread({}, props), componentProps === null || componentProps === void 0 ? void 0 : componentProps.video));
      }
    };
  }, [componentProps, enableImageGallery, fullFeaturedCodeBlock]);
  var rehypePlugins = useMemo(function () {
    return [allowHtml && rehypeRaw, rehypeKatex].filter(Boolean);
  }, [allowHtml]);
  var remarkPlugins = useMemo(function () {
    return [remarkGfm, remarkMath, isChatMode && remarkBreaks].filter(Boolean);
  }, [isChatMode]);
  return /*#__PURE__*/_jsx("article", {
    className: cx(styles.root, className),
    "data-code-type": "markdown",
    onDoubleClick: onDoubleClick,
    style: style,
    children: /*#__PURE__*/_jsx(ImageGallery, {
      enable: enableImageGallery,
      children: /*#__PURE__*/_jsx(ReactMarkdown, _objectSpread(_objectSpread({
        className: cx(mdStyles.__root, mdStyles.a, mdStyles.blockquote, mdStyles.code, mdStyles.details, mdStyles.header, mdStyles.hr, mdStyles.img, mdStyles.kbd, mdStyles.list, mdStyles.p, mdStyles.pre, mdStyles.strong, mdStyles.table, mdStyles.video, isChatMode && styles.chat),
        components: components,
        rehypePlugins: rehypePlugins,
        remarkPlugins: remarkPlugins
      }, rest), {}, {
        children: children
      }))
    })
  });
});
export default Markdown;