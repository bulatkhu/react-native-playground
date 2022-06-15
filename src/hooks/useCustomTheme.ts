import { useTheme } from "native-base";
import { CustomTheme } from "../theme";

const useCustomTheme = () => {
  return useTheme() as CustomTheme;
};

export default useCustomTheme;
