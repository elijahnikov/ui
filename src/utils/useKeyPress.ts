import { useCallback, useEffect } from "react";

export default function useKeyPress(key: string, execute: () => void) {
  const executeFunction = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === key) {
        execute();
      }
    },
    [execute, key]
  );

  useEffect(() => {
    //register event listener
    document.addEventListener("keydown", executeFunction, false);

    //unregister/remove event listener
    return () => {
      document.removeEventListener("keydown", executeFunction, false);
    };
  }, [executeFunction]);
}
