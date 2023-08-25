import React, { useState, useEffect } from "react";

const useDOMLoaded = (): boolean => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return isLoaded;
};

export default useDOMLoaded;
