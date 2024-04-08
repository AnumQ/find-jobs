import { useGlobalContext } from "~/contexts/GlobalContext";
import { getClassNameBasedOnDarkMode } from "~/utils/utils";

export const useTheme = () => {
  const { isDarkMode } = useGlobalContext();

  const getClassName = (className: string) => {
    return getClassNameBasedOnDarkMode(isDarkMode, className);
  };

  return { getClassName };
};
