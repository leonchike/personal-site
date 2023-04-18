import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useAppState } from "@/context/appContext";
import DownloadButton from "@/components/DownloadButton";

const DownloadResume = () => {
  const state = useAppState();

  if (!state || !state?.appData) {
    return null;
  }

  const url = state.appData.resume.url;

  const handleDownload = () => {
    window.open(url, "_blank");
  };

  return (
    <DownloadButton onClick={handleDownload} disabled={!state}>
      Download Resume
    </DownloadButton>
  );
};

export default DownloadResume;
