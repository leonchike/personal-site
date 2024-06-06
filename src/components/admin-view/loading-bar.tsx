import { useState, useEffect } from "react";

export default function LoadingBar({ isLoading }: { isLoading: boolean }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isLoading) {
      setVisible(true);
      setProgress(0);

      timer = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress < 50) {
            return prevProgress + 1;
          } else {
            clearInterval(timer);
            return prevProgress;
          }
        });
      }, 50); // Progress from 0 to 50 in 2.5 seconds (50 * 50ms)
    } else {
      setProgress(50);

      timer = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress < 100) {
            return prevProgress + 1;
          } else {
            clearInterval(timer);
            setTimeout(() => setVisible(false), 500); // Allow some time before hiding
            return prevProgress;
          }
        });
      }, 20); // Progress from 50 to 100 in 2.5 seconds (50 * 50ms)
    }

    return () => clearInterval(timer);
  }, [isLoading]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${progress}%`,
        height: "4px",
        backgroundColor: "rgb(34 197 94)",
        transition: "width 0.1s",
        visibility: visible ? "visible" : "hidden",
        zIndex: 1000,
      }}
    />
  );
}
