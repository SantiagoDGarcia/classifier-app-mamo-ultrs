declare module "@env";

// Custom Components....
interface CustomActivityIndicatorProps {
  actionText: string;
  indicatorActive: boolean;
}

interface CustomCardProps {
  positionLeft?: boolean;
  title: string;
  imgSource: ImageSourcePropType;
  iconSource: ImageSourcePropType;
  navigation: any;
}

interface CustomDividerTextProps {
  positionLeft?: boolean;
  text: string;
}

interface CustomFullScreenLayerProps {
  uri: string[];
  size: number;
  indexImage: number;
}

interface CustomHorizontalRowProps {
  label?: string;
  description?: string;
  iconSource?: ImageSourcePropType;
  isText?: boolean;
}

interface CustomListItemHistProps {
  item: any;
  navigation: any;
  t: any;
}

interface CustomLogoProps {
  color?: string;
}

interface CustomNavHeaderProps {
  back?: boolean;
  navigation: any;
}

interface CustomNavIconProps {
  name: any;
  size?: number;
  focused: boolean;
}

interface CustomPressablesProps {
  text: string;
  onPress?: () => void;
  disable?: boolean;
}

interface CustomRowTextProps {
  label?: string;
  description?: string;
  iconSource: ImageSourcePropType;
}

interface CustomTextInputProps {
  value: string;
  onChangeValue: (text: string) => void;
  textPlaceholder: string;
  secureTextEntry?: boolean;
  onBlur?: any;
  stateOnBlur?: boolean;
  error?: string;
  icon?: ImageSourcePropType;
}

// Hooks
interface contextProps {
  userData: any | null;
  isLoading: [
    isLoading: boolean | null,
    setMaskImg: (e: boolean | null) => void
  ];
  activatedFullScreen: [
    activatedFullScreen: boolean | null,
    setActivatedFullScreen: (e: boolean | null) => void,
    fullScreenIndex: number | null,
    setFullScreenIndex: (e: number | null) => void
  ];
}

// Screens
type ItemData = {
  id: number;
  title: string;
  description: string;
};

// Constants
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

interface ImageRequireSource {
  uri: string;
}

type ContaineProps = {
  styles: CSSProperties;
};
