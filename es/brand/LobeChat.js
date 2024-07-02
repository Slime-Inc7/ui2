import { memo } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'antd-style';
import { Flexbox } from 'react-layout-kit';
import LogoText from "./components/LobeChatText";
import Logo3d from "./components/Logo3d";
import LogoFlat from "./components/LogoFlat";
import LogoMono from "./components/LogoMono";
import { useStyles } from "./style";
import Divider from "./components/Divider";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

const LobeChat = memo(function ({
  className,
  extra,
  imageSize = 32,
  textHeight = "45px",
  textSize = "120px",
  type = '3d',
  style
}) {
  const theme = useTheme();
  const { styles } = useStyles();
  let logoComponent;

  switch (type) {
    case '3d': {
      logoComponent = /*#__PURE__*/_jsx(Logo3d, { alt: 'LobeChat', size: imageSize });
      break;
    }
    case 'flat': {
      logoComponent = /*#__PURE__*/_jsx(LogoFlat, { size: imageSize, style });
      break;
    }
    case 'mono': {
      logoComponent = /*#__PURE__*/_jsx(LogoMono, { size: imageSize, style });
      break;
    }
    case 'text': {
      logoComponent = /*#__PURE__*/_jsx(LogoText, { height: textHeight, size: textSize, style });
      break;
    }
    case 'combine': {
      logoComponent = /*#__PURE__*/_jsxs(Flexbox, {
        align: 'center',
        children: [
          /*#__PURE__*/_jsx(Logo3d, { alt: "LobeChat", size: imageSize }),
          /*#__PURE__*/_jsx(LogoText, {
          height: textHeight,
          size: textSize,
          style: {
            marginLeft: 8,  // 텍스트와 이미지 사이의 간격을 적절하게 설정
            ...style
          }
        })
        ],
        horizontal: true, // 이미지와 텍스트를 가로로 배치
      });
      break;
    }
  }

  if (!extra) return logoComponent;

  const extraSize = Math.round(imageSize / 3 * 1.9);

  return /*#__PURE__*/_jsxs(Flexbox, {
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
    style
  });
});

LobeChat.propTypes = {
  className: PropTypes.string,
  extra: PropTypes.string,
  imageSize: PropTypes.number,
  textHeight: PropTypes.string,
  textSize: PropTypes.string,
  type: PropTypes.oneOf(['3d', 'flat', 'mono', 'text', 'combine']),
  style: PropTypes.object,
};

export default LobeChat;
