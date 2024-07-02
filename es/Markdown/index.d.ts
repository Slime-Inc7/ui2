import type { AnchorProps } from 'antd';
import { CSSProperties } from 'react';
import { type ImageProps } from "../mdx/Image";
import type { PreProps } from "../mdx/Pre";
import { type VideoProps } from "../mdx/Video";
import type { AProps } from "../types";
import type { TypographyProps } from './Typography';
export interface MarkdownProps extends TypographyProps {
    allowHtml?: boolean;
    children: string;
    className?: string;
    componentProps?: {
        a?: Partial<AProps & AnchorProps>;
        img?: Partial<ImageProps>;
        pre?: Partial<PreProps>;
        video?: Partial<VideoProps>;
    };
    enableImageGallery?: boolean;
    fullFeaturedCodeBlock?: boolean;
    onDoubleClick?: () => void;
    style?: CSSProperties;
    variant?: 'normal' | 'chat';
}
declare const Markdown: import("react").NamedExoticComponent<MarkdownProps>;
export default Markdown;
