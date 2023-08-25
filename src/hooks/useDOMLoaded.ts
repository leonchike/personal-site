import React, { useState, useEffect } from "react";

const useDOMLoaded = (): boolean => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const handleContentLoaded = () => {
      setIsLoaded(true);
    };

    if (document.readyState === "complete") {
      setIsLoaded(true);
    } else {
      window.addEventListener("DOMContentLoaded", handleContentLoaded);
      return () =>
        window.removeEventListener("DOMContentLoaded", handleContentLoaded);
    }
  }, []);

  return isLoaded;
};

export default useDOMLoaded;
