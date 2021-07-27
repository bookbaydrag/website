import {
  color, ColorProps,
  compose,
  flexbox, FlexboxProps,
  layout, LayoutProps,
  order, OrderProps,
  position, PositionProps,
  shadow, ShadowProps,
  space, SpaceProps,
  typography, TypographyProps,
} from 'styled-system';

export const viewProps = compose(
    color,
    flexbox,
    layout,
    order,
    position,
    shadow,
    space,
    typography,
);

export type ViewProps =
  ColorProps &
  FlexboxProps &
  LayoutProps &
  OrderProps &
  PositionProps &
  ShadowProps &
  SpaceProps &
  TypographyProps;
