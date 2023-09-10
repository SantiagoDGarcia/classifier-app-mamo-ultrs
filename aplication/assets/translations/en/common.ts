export default {
  //Analysis
  initMessage: "Select the type of image to analyze",
  ultrasound: "Ultrasound",
  mammography: "Mammography",
  // Profile
  myProfile: "My profile",
  name: "Name",
  email: "Email",
  organization: "Organization",
  creationDate: "Creation date",
  language: "Language",
  changePassword: "Change password.",
  completeFieldsToResetPassword: "Complete the fields to reset the password",
  logout: "Log out",
  spanish: "Spanish",
  english: "English",
  selectLanguage: "Select the language",
  // Login
  enterEmail: "Enter your email to reset your password.",
  currentPassword: "Current password",
  newPassword: "New password",
  modify: "Modify",
  cancel: "Cancel",
  password: "Password",
  login: "Log in",
  noAccount: "Don't have an account? Sign up.",
  forgotPassword: "Forgot your password?",
  reset: "Reset",
  allRightsReserved:
    "All rights reserved and belonging to the Universidad Tecnica Particular de Loja.",
  // Register
  completeAllFields: "Complete all fields to register.",
  register: "Register",
  alreadyHaveAccount: "Already have an account? Log in.",
  iAcceptTerms: "I accept the ",
  termsandConditions: "Terms and Conditions",
  // Hist
  previousAnalysisHistory: "Previous analysis history",
  results: "Results",
  noHistResults: "No previous information.",
  durationAnalysis: "Analysis duration",
  // Test
  extractMasksAndRegionsOfInterest: "Extract masks and regions of interest",
  loadImage: "Load image",
  weRecommend:
    "We recommend that you keep the following points in mind to achieve the best result:",
  cropImage:
    "- If possible, when selecting the image, use the tool to make a manual crop, so the application will not analyze irrelevant content and will have greater accuracy.",
  imageResolution: "- A high-resolution image with little distortion.",
  supportedFormats: "- The image format must be JPG, JPEG or PNG.",
  moreInformation: "More information? Check out the Help.",
  startEvaluation: "Start evaluation",
  // Results
  analysisOf: "Analysis of",
  regionOfInterest: "Region of Interest (ROI)",
  algorithmEvaluation:
    "The result of the analysis carried out was done through Deep Learning algorithms, the same are based on ResNet18, for more information visit the Help module.",
  algorithmEvaluation2: "The detected ROIs are marked with a white border.",
  idontLikeResult: "Incorrect result? See Help.",
  benign: "BENIGN",
  malignant: "MALIGNANT",
  date: "Date",
  duration: "Duration",
  type: "Type",
  roiExtracted: "ROI and masks",
  cant: "Quantity",
  yes: "Yes",
  no: "No",
  approx: " approx",
  // Help
  whatIsROI: "What does ROI (Region of Interest) mean?",
  roiDescription:
    "It is the search and detection of the most important areas of the image, in this way a more precise analysis is carried out.",
  isRoiExtractionNecessary: "Is it necessary to extract the ROI from my image?",
  roiExtractionDescription:
    "If your image is of high quality, it is recommended to select the option 'Extract masks and regions of interest', otherwise you can extract the ROIs but it is possible that the detected regions are not correct.",
  incorrectRois:
    "The ROIs extracted by the application are not correct. What should I do?",
  incorrectRoisDescription:
    "This usually happens depending on the type of image, quality, existence of noise among other factors. If this is the case, it is most likely that the analysis was erroneous, for this consider redoing the analysis with a higher quality image or doing it without extracting the masks, if not only by doing the manual crop when selecting the image.",
  analysisDuration: "How long does it take to analyze an image?",
  analysisDurationDescription:
    "If you do not activate the option 'Extract masks and regions of interest' the application will return the result in 1-2 minutes, otherwise it will take 3-6 minutes.",
  supportedImageTypes: "What types of images does the application support?",
  supportedImageTypesDescription:
    "The application supports various types of images with a maximum size of 10MB, including JPG, PNG, JPEG.",
  unsupportedImageFormats:
    "What can I do if my image is not in a format supported by the application?",
  unsupportedImageFormatsDescription:
    "You can use an external image conversion program to transform your image into a supported format.",
  improveAnalysisResult: "How to get the best result for my analysis?",
  improveAnalysisResultDescription:
    "The quality and definition of the image are the most important factors to consider but they are not the only ones, one of the best recommendations is always to manually crop the most important region of the image. This can be done when selecting the image, so that information that is not relevant to the image is not analyzed, reducing evaluation time and improving results.",
  needMoreHelp:
    "Do you need more information? Contact us at our email support_branet@gmail.com",
  deleteAnalysis: "How can I delete an analysis?",
  deleteAnalysisDescription:
    "To delete an analysis, go to the history tab and press and hold on the analysis until a notification appears. Press 'OK' to delete content.",
};
