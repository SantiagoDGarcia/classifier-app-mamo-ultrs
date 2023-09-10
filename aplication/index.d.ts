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

interface CustomFullScreenImageProps {
  uri: string[];
  size: number;
  indexImage: number;
}

interface CustomFullScreenInfoProps {
  actionableText: string;
  titlecustomView?: string;
  customView: React.ReactNode;
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
  refreshData: () => void;
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

// Screens and Services
type HelpContenDataProps = {
  id: number;
  title: string;
  description: string;
};

interface FirebaseSendResetEmailProps {
  email: string;
  doAfterRequest: () => void;
}

interface FirebaseLoginProps {
  email: string;
  password: string;
}

interface FirebaseRegisterAuthProps {
  email: string;
  password: string;
  name: string;
  organization: string;
}

interface FirebaseRegisterFirestoreProps {
  email: string;
  name: string;
  organization: string;
  user: UserCredential;
}

interface FirebaseChangePasswordProps {
  oldPassword: string;
  newPassword: string;
}

interface FirebaseGetResultProps {
  idResult: string;
}

interface FirebaseHideResultProps {
  idResult: string;
}

interface ApiAnalizeImageProps {
  typeAnalysis: string;
  extractRoi: boolean;
  source: any;
}

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
