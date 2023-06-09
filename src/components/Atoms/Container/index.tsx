import { CSSProperties, FC, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './index.module.css';

interface PaddingObject {
  top?: undefined | number | string;
  right?: undefined | number | string;
  bottom?: undefined | number | string;
  left?: undefined | number | string;
  x?: undefined | number | string;
  y?: undefined | number | string;
}

type Padding = undefined | number | string | PaddingObject;

interface Props {
  /**
   * タグの指定
   */
  as?: keyof JSX.IntrinsicElements;

  /**
   * クラス名
   */
  className?: string;

  /**
   * 最大幅
   */
  maxWidth?: number | string | undefined;

  /**
   * 余白の指定
   */
  padding?: Padding;

  /**
   * 子要素
   */
  children: ReactNode;
}

export const Container: FC<Props> = ({
  as: Tag = 'div',
  className,
  maxWidth,
  padding,
  children
}) => {
  const containerStyle: CSSProperties = {
    maxWidth: "none",
  };

  /**
   * paddingの指定
   */
  const setStyles = (padding: Padding): CSSProperties => {
    const style: CSSProperties = { ...containerStyle };

    if (typeof padding === "number") {
      style.padding = `${padding}px`;
    } else if (typeof padding === "string") {
      style.padding = padding;
    } else if (typeof padding === "object") {
      style.paddingTop = padding.top ?? padding.y;
      style.paddingBottom = padding.bottom ?? padding.y;
      style.paddingLeft = padding.left ?? padding.x;
      style.paddingRight = padding.right ?? padding.x;
    }

    return style;
  };

  /**
   * 最大幅の指定
   */
  if (typeof maxWidth === "number") {
    containerStyle.maxWidth = `${maxWidth}px`;
  } else if (typeof maxWidth === "string") {
    containerStyle.maxWidth = maxWidth;
  }

  const containerClasses = clsx(
    className,
    styles.container,
  )

  return (
    <Tag
      className={containerClasses}
      style={setStyles(padding)}
    >
      {children}
    </Tag>
  )
}