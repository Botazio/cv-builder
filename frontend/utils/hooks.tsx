import { useCallback, useState } from "react";

/**
 * Hook to get the size and relative position of a rect
 */
export function useClientRect() {
  const [rect, setRect] = useState(null);
  const ref = useCallback(node => {
    if (node !== null) {
      setRect(node.getBoundingClientRect());
    }
  }, []);
  return [rect, ref];
}