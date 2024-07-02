import urlJoin from 'url-join';

const UNPKG_API = 'https://unpkg.com';
const ALIYUN_API = 'https://registry.npmmirror.com';

export const genCdnUrl = function genCdnUrl(_ref) {
  const { pkg, version = 'latest', path, proxy } = _ref;
  switch (proxy) {
    case 'unpkg':
      return urlJoin(UNPKG_API, `${pkg}@${version}`, path);
    default:
      return urlJoin(ALIYUN_API, pkg, version, 'files', path);
  }
};

// export type JsdelivrCDN = 'jsdelivr' | 'Slime-INC';
//
// const JSDELIVR_API = 'https://fastly.jsdelivr.net';
// const LOBEHUB_API = 'https://jsdelivr.lobeobjects.space';
//
// export interface JsdelivrApi {
//   path: string;
//   proxy?: JsdelivrCDN;
//   repo: string;
// }
//
// export const genJsdelivrUrl = ({ path, proxy, repo }: JsdelivrApi): string => {
//   switch (proxy) {
//     case 'jsdelivr': {
//       return urlJoin(JSDELIVR_API, 'gh', repo, path);
//     }
//     default: {
//       return urlJoin(LOBEHUB_API, 'gh', repo, path);
//     }
//   }
// };
