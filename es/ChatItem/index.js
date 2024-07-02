import { useResponsive } from 'antd-style';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';
import Actions from "./components/Actions";
import Avatar from "./components/Avatar";
import BorderSpacing from "./components/BorderSpacing";
import ErrorContent from "./components/ErrorContent";
import MessageContent from "./components/MessageContent";
import Title from "./components/Title";
import { useStyles } from "./style";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

const _excluded = ["avatarAddon", "onAvatarClick", "avatarProps", "actions", "className", "primary", "loading", "message", "placement", "type", "avatar", "error", "showTitle", "time", "editing", "onChange", "onEditingChange", "messageExtra", "renderMessage", "text", "errorMessage", "onDoubleClick", "fontSize"];

const MOBILE_AVATAR_SIZE = 50;

const ChatItem = /*#__PURE__*/memo(function (_ref) {
  const {
    avatarAddon,
    onAvatarClick,
    avatarProps,
    actions,
    className,
    primary,
    loading,
    message,
    placement = 'left',
    type = 'block',
    avatar,
    error,
    showTitle,
    time,
    editing,
    onChange,
    onEditingChange,
    messageExtra,
    renderMessage,
    text,
    errorMessage,
    onDoubleClick,
    fontSize,
    ...rest
  } = _ref;

  const { mobile } = useResponsive();
  const { cx, styles } = useStyles({
    editing,
    placement,
    primary,
    showTitle,
    time,
    title: avatar.title,
    type
  });

  return /*#__PURE__*/_jsxs(Flexbox, {
    children: [
      /*#__PURE__*/_jsx(Avatar, {
      addon: avatarAddon,
      avatar: avatar,
      loading: loading,
      onClick: onAvatarClick,
      placement: placement,
      size: mobile ? MOBILE_AVATAR_SIZE : 100,
      ...avatarProps
    }),
      /*#__PURE__*/_jsxs(Flexbox, {
      align: placement === 'left' ? 'flex-start' : 'flex-end',
      children: [
          /*#__PURE__*/_jsx(Title, {
        avatar: avatar,
        placement: placement,
        showTitle: showTitle,
        time: time
      }),
          /*#__PURE__*/_jsxs(Flexbox, {
        align: placement === 'left' ? 'flex-start' : 'flex-end',
        children: [
          error ? /*#__PURE__*/_jsx(ErrorContent, {
            error: error,
            message: errorMessage,
            placement: placement
          }) : /*#__PURE__*/_jsx(MessageContent, {
            editing: editing,
            fontSize: fontSize,
            message: message,
            messageExtra: messageExtra,
            onChange: onChange,
            onDoubleClick: onDoubleClick,
            onEditingChange: onEditingChange,
            placement: placement,
            primary: primary,
            renderMessage: renderMessage,
            text: text,
            type: type
          }),
              /*#__PURE__*/_jsx(Actions, {
            actions: actions,
            editing: editing,
            placement: placement,
            type: type
          })
        ],
        className: styles.messageContent,
        direction: type === 'block' ? (placement === 'left' ? 'horizontal' : 'horizontal-reverse') : 'vertical',
        gap: 8
      })
      ],
      className: styles.messageContainer
    }),
      mobile && type === 'block' && /*#__PURE__*/_jsx(BorderSpacing, {
        borderSpacing: MOBILE_AVATAR_SIZE
      })
    ],
    className: cx(styles.container, className),
    direction: placement === 'left' ? 'horizontal' : 'horizontal-reverse',
    gap: mobile ? 6 : 12,
    ...rest
  });
});

export default ChatItem;
