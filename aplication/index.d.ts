declare module "@env";

interface TypeColor {
  primary: string;
  secondary: string;
  tertiary: string;
  positiveResult: string;
  negativeResult: string;
  gray: string;
}

interface TypeSize {
  base: number;
  small: number;
  normal: number;
  medium: number;
  large: number;
  extraLarge: number;
}

interface TypeFont {
  primary: string;
  secondary: string;
  tertiary: string;
}

type ContaineProps = {
  styles: CSSProperties;
};
