import { space, SpaceProps } from "./space";
import { typography, TypographyProps } from "./typography";
import { layout, LayoutProps } from "./layout";
import { color, ColorProps } from "./color";
import { flex, FlexProps } from "./flex";
import { border, BorderProps } from "./border";
import { position, PositionProps } from "./position";
import { shadow, ShadowProps } from "./shadow";
import { compose, StyledProps } from "./compose";
import { ResponsiveStyle } from "./types";
import { PseudoProps, pseudoMappings, isPseudoProps } from "./pseudo";
import { grid } from "./grid";
import { list } from "./list";
export { StyledKeyType, isStyledProp } from "./keys";

export * from "./types";

export const all = compose(
  space,
  typography,
  layout,
  color,
  flex,
  border,
  position,
  shadow,
  grid,
  list
);

export { pseudoMappings, isPseudoProps };
export type {
  SpaceProps,
  TypographyProps,
  LayoutProps,
  ColorProps,
  FlexProps,
  BorderProps,
  PositionProps,
  ShadowProps,
  StyledProps,
  ResponsiveStyle,
  PseudoProps,
};
