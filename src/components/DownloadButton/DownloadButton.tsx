import React from "react";
import Icon from "@/components/Icon";
import styles from "./DownloadButton.module.css";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

export default function DownloadButton({ children, ...props }: Props) {
  return (
    <button
      className="flex items-center border-2 border-gray-900 text-gray-900 rounded px-2 py-2 gap-2 hover:bg-gray-800 hover:text-white transition-all duration-500"
      {...props}
    >
      <span>{children}</span>
      <div className="">
        <Icon id="arrowDown" size="1.2rem" strokeWidth="2px" />
      </div>
    </button>
  );
}
