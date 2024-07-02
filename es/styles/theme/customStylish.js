import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
import { keyframes } from 'antd-style';
export var generateCustomStylish = function generateCustomStylish(_ref) {
  var css = _ref.css,
    token = _ref.token,
    isDarkMode = _ref.isDarkMode;
  var gradient = keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    0% {\n      background-position: 0% 50%;\n    }\n    50% {\n      background-position: 100% 50%;\n    }\n    100% {\n      background-position: 0% 50%;\n    }\n  "])));
  return {
    blur: css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      backdrop-filter: saturate(180%) blur(10px);\n    "]))),
    blurStrong: css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      backdrop-filter: blur(36px);\n    "]))),
    bottomScrollbar: css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      ::-webkit-scrollbar {\n        width: 0;\n        height: 4px;\n        background-color: transparent;\n\n        &-thumb {\n          background-color: ", ";\n          border-radius: 4px;\n          transition: background-color 500ms ", ";\n        }\n\n        &-corner {\n          display: none;\n          width: 0;\n          height: 0;\n        }\n      }\n    "])), token.colorFill, token.motionEaseOut),
    gradientAnimation: css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      background-image: linear-gradient(\n        -45deg,\n        ", ",\n        ", ",\n        ", ",\n        ", "\n      );\n      background-size: 400% 400%;\n      border-radius: inherit;\n      animation: 5s ", " 5s ease infinite;\n    "])), token.gold, token.magenta, token.geekblue, token.cyan, gradient),
    markdown: css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      --lobe-markdown-font-size: 16px;\n      --lobe-markdown-header-multiple: 1;\n      --lobe-markdown-margin-multiple: 1.5;\n\n      position: relative;\n\n      width: 100%;\n\n      font-size: var(--lobe-markdown-font-size);\n      line-height: 1.6;\n      word-break: break-word;\n\n      p {\n        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);\n        line-height: 1.6;\n        letter-spacing: 0.02em;\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5 {\n        margin-block: max(\n          calc(var(--lobe-markdown-header-multiple) * var(--lobe-markdown-margin-multiple) * 0.5em),\n          var(--lobe-markdown-font-size)\n        );\n        font-weight: 600;\n      }\n\n      h1 {\n        font-size: calc(\n          var(--lobe-markdown-font-size) * (1 + 1.5 * var(--lobe-markdown-header-multiple))\n        );\n      }\n\n      h2 {\n        font-size: calc(\n          var(--lobe-markdown-font-size) * (1 + var(--lobe-markdown-header-multiple))\n        );\n      }\n\n      h3 {\n        font-size: calc(\n          var(--lobe-markdown-font-size) * (1 + 0.5 * var(--lobe-markdown-header-multiple))\n        );\n      }\n\n      h4 {\n        font-size: calc(\n          var(--lobe-markdown-font-size) * (1 + 0.25 * var(--lobe-markdown-header-multiple))\n        );\n      }\n\n      h5 {\n        font-size: calc(var(--lobe-markdown-font-size) * 1);\n      }\n\n      li {\n        margin-block: calc(var(--lobe-markdown-margin-multiple) * 0.5em);\n      }\n\n      ul,\n      ol {\n        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);\n        margin-inline-start: 1em;\n        list-style-position: outside;\n\n        li {\n          margin-inline-start: 1em;\n        }\n      }\n\n      ol {\n        li {\n          &::marker {\n            color: ", ";\n          }\n        }\n      }\n\n      ul {\n        list-style-type: none;\n\n        li {\n          &::before {\n            content: '-';\n            display: inline-block;\n            margin-inline: -1em 0.5em;\n            color: ", ";\n          }\n        }\n      }\n\n      strong {\n        font-weight: 600;\n      }\n\n      code:not(:has(span)) {\n        display: inline-block;\n\n        padding-block: 0.2em;\n        padding-inline: 0.4em;\n\n        font-family: ", ";\n        font-size: 0.875em;\n        line-height: 1;\n        word-break: break-word;\n\n        background: ", ";\n        border: 1px solid ", ";\n        border-radius: ", "px;\n      }\n\n      kbd {\n        cursor: default;\n        user-select: none;\n\n        transform: translateY(-0.2em);\n\n        display: inline-block;\n\n        min-width: 1em;\n        margin-inline: 0.25em;\n        padding-block: 0.2em;\n        padding-inline: 0.4em;\n\n        font-family: ", ";\n        font-size: 0.875em;\n        font-weight: 500;\n        line-height: 1;\n        color: ", ";\n        text-align: center;\n\n        background: ", ";\n        border: 1px solid ", ";\n        border-radius: 0.25em;\n        box-shadow: 0 2px 0 1px ", ";\n\n        &:hover {\n          transform: translateY(0);\n          box-shadow: none;\n        }\n      }\n\n      blockquote {\n        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);\n        margin-inline: 0;\n        padding-block: 0;\n        padding-inline: 1em;\n\n        color: ", ";\n\n        border-inline-start: solid 4px ", ";\n      }\n\n      hr {\n        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1.5em);\n\n        border-color: ", ";\n        border-style: dashed;\n        border-width: 1px;\n        border-block-start: none;\n        border-inline-start: none;\n        border-inline-end: none;\n      }\n\n      details {\n        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);\n        padding-block: 0.75em;\n        padding-inline: 1em;\n\n        background: ", ";\n        border: 1px solid ", ";\n        border-radius: ", "px;\n\n        summary {\n          cursor: pointer;\n          display: flex;\n          align-items: center;\n          list-style: none;\n\n          &::before {\n            content: '';\n\n            position: absolute;\n            inset-inline-end: 1.25em;\n            transform: rotateZ(-45deg);\n\n            display: block;\n\n            width: 0.4em;\n            height: 0.4em;\n\n            font-family: ", ";\n\n            border-block-end: 1.5px solid ", ";\n            border-inline-end: 1.5px solid ", ";\n\n            transition: transform 200ms ", ";\n          }\n        }\n\n        &[open] {\n          padding-block-end: 0;\n\n          summary {\n            padding-block-end: 12px;\n            border-block-end: 1px dashed ", ";\n\n            &::before {\n              transform: rotateZ(45deg);\n            }\n          }\n        }\n      }\n\n      img,\n      video {\n        max-width: 100%;\n      }\n\n      table {\n        overflow: hidden;\n        display: table;\n        border-spacing: 0;\n        border-collapse: collapse;\n\n        box-sizing: border-box;\n        width: 100%;\n        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);\n\n        text-align: start;\n        overflow-wrap: break-word;\n\n        background: ", ";\n        border-radius: ", "px;\n        box-shadow: inset 0 0 0 1px ", ";\n      }\n\n      thead {\n        background: ", ";\n      }\n\n      tr {\n        box-shadow: inset 0 -1px 0 ", ";\n      }\n\n      th,\n      td {\n        padding-block: 0.75em;\n        padding-inline: 1em;\n        text-align: start;\n        vertical-align: top;\n      }\n\n      pre,\n      [data-code-type='highlighter'] {\n        border: none;\n\n        > code {\n          padding: 0 !important;\n\n          font-family: ", ";\n          font-size: 0.875em;\n          line-height: 1.6;\n\n          border: none !important;\n        }\n      }\n    "])), token.colorTextSecondary, token.colorTextDescription, token.fontFamilyCode, token.colorFillSecondary, token.colorBorderSecondary, token.borderRadius, token.fontFamily, token.colorBgLayout, isDarkMode ? token.colorText : '#333', isDarkMode ? token.colorTextSecondary : '#000', isDarkMode ? token.colorTextSecondary : '#000', token.colorTextSecondary, token.colorBorder, token.colorBorderSecondary, token.colorFillTertiary, token.colorBorderSecondary, token.borderRadius, token.fontFamily, token.colorTextSecondary, token.colorTextSecondary, token.motionEaseOut, token.colorBorder, token.colorFillTertiary, token.borderRadius, token.colorBorderSecondary, token.colorFillQuaternary, token.colorBorderSecondary, token.fontFamilyCode),
    noScrollbar: css(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      ::-webkit-scrollbar {\n        display: none;\n        width: 0;\n        height: 0;\n        background-color: transparent;\n      }\n    "]))),
    resetLinkColor: css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      cursor: pointer;\n      color: ", ";\n\n      &:hover {\n        color: ", ";\n      }\n    "])), token.colorTextSecondary, token.colorText)
  };
};