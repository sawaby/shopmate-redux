import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Redux Shopping Cart`
  }, [title])
  return null;
}
