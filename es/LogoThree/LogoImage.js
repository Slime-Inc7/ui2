import { memo } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";

const LogoImage = /*#__PURE__*/memo(function ({ className, style, size = 128, alt = 'Logo Image' }) {
  const imgStyle = {
    display: 'block',
    maxHeight: '100%',
    maxWidth: '100%',
    ...style
  };

  return /*#__PURE__*/_jsx("img", {
    alt: alt,
    className: className,
    height: size,
    src: 'https://raw.githubusercontent.com/Slime-Inc7/ui/master/logo-3d.png',
    style: imgStyle,
    width: size
  });
});

export default LogoImage;
