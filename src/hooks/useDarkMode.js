import useLocalStorage from "./useLocalStorage";

const useDarkMode = (initialState) => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", initialState);
  return [darkMode, setDarkMode];
};

export default useDarkMode;
