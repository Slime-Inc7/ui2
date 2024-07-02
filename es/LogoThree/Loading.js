import { Loader2 } from 'lucide-react';
import { memo } from 'react';
import { Center } from 'react-layout-kit';
import Icon from "../Icon";
import { jsx as _jsx } from "react/jsx-runtime";

const Loading = /*#__PURE__*/memo(function (_ref) {
  const {
    size = 32
  } = _ref;
  return /*#__PURE__*/_jsx(Center, {
    children: /*#__PURE__*/_jsx(Icon, {
      icon: Loader2,
      size: {
        fontSize: size
      },
      spin: true
    }),
    height: '100%',
    justify: 'center',
    style: {
      position: 'absolute'
    },
    width: '100%',
  });
});

export default Loading;
