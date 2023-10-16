"use client";

import React from "react";
import DownloadButton from "@/components/DownloadButton";

const DownloadResume = ({ url }: { url: string }) => {
  const handleDownload = () => {
    window.open(url, "_blank");
  };

  return (
    <DownloadButton onClick={handleDownload}>Download Resume</DownloadButton>
  );
};

export default DownloadResume;
