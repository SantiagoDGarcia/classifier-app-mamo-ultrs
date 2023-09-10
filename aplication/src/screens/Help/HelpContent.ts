import { useTranslation } from "react-i18next";

export default function HelpContent() {
  const { t } = useTranslation();
  const HelpContent: HelpContenDataProps[] = [
    {
      id: 1,
      title: t("common:supportedImageTypes"),
      description: t("common:supportedImageTypesDescription"),
    },
    {
      id: 2,
      title: t("common:unsupportedImageFormats"),
      description: t("common:unsupportedImageFormatsDescription"),
    },
    {
      id: 3,
      title: t("common:analysisDuration"),
      description: t("common:analysisDurationDescription"),
    },
    {
      id: 4,
      title: t("common:improveAnalysisResult"),
      description: t("common:improveAnalysisResultDescription"),
    },
    {
      id: 5,
      title: t("common:whatIsROI"),
      description: t("common:roiDescription"),
    },
    {
      id: 6,
      title: t("common:isRoiExtractionNecessary"),
      description: t("common:roiExtractionDescription"),
    },
    {
      id: 7,
      title: t("common:incorrectRois"),
      description: t("common:incorrectRoisDescription"),
    },
    {
      id: 8,
      title: t("common:deleteAnalysis"),
      description: t("common:deleteAnalysisDescription"),
    },
  ];
  return HelpContent;
}
