import { type ReactNode } from 'react';
import { DivProps } from "../types";

export interface LobeChatProps extends DivProps {
  /**
   * @description Additional React Node to be rendered next to the logo
   */
  extra?: ReactNode;
  /**
   * @description Size of the logo in pixels
   * @default 32
   */
  size?: number;
  /**
   * @description Type of the logo to be rendered
   * @default '3d'
   */
  type?: '3d' | 'flat' | 'mono' | 'text' | 'combine';
  /**
   * @description Size of the image in pixels
   * @default 32
   */
  imageSize?: number;
  /**
   * @description Size of the text
   * @default '120px'
   */
  textSize?: string;
}

declare const LobeChat: import("react").NamedExoticComponent<LobeChatProps>;
export default LobeChat;
