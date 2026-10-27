import { createContext, useContext } from "react";

export const PreviewContext = createContext({
  device: "desktop",
  scrollTop: () => {},
});

export function usePreview() {
  return useContext(PreviewContext);
}
