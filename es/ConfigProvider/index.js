import { createContext, memo, useContext } from 'react';
import { genCdnUrl } from "../utils/genCdnUrl";
import { jsx as _jsx } from "react/jsx-runtime";

export const ConfigContext = /*#__PURE__*/createContext(null);

const ConfigProvider = /*#__PURE__*/memo(function (_ref) {
  const { children, config } = _ref;
  return /*#__PURE__*/_jsx(ConfigContext.Provider, {
    children: children,  // children을 value 앞에 배치
    value: config
  });
});

export const useCdnFn = function useCdnFn() {
  const config = useContext(ConfigContext);

  if (!config) return function (_ref2) {
    const { pkg, version, path } = _ref2;
    if (pkg === '@lobehub/assets-logo') {  // 로고 패키지일 경우 직접 URL 반환
      return 'https://raw.githubusercontent.com/Slime-Inc7/ui/master/slime2.png';
    }
    return genCdnUrl({
      path: path,
      pkg: pkg,
      proxy: 'aliyun',
      version: version
    });
  };

  if (config.proxy !== 'custom') return function (_ref3) {
    const { pkg, version, path } = _ref3;
    if (pkg === '@lobehub/assets-logo') {  // 로고 패키지일 경우 직접 URL 반환
      return 'https://raw.githubusercontent.com/Slime-Inc7/ui/master/slime2.png';
    }
    return genCdnUrl({
      path: path,
      pkg: pkg,
      proxy: config.proxy,
      version: version
    });
  };

  return config.customCdnFn || function (_ref4) {
    const { pkg, version, path } = _ref4;
    if (pkg === '@lobehub/assets-logo') {  // 로고 패키지일 경우 직접 URL 반환
      return 'https://raw.githubusercontent.com/Slime-Inc7/ui/master/slime2.png';
    }
    return genCdnUrl({
      path: path,
      pkg: pkg,
      proxy: 'aliyun',
      version: version
    });
  };
};

export default ConfigProvider;
