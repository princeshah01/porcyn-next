"use client";

import { SimpleEditor } from "tip-tap-source";
import "tip-tap-source/style.css";

const Editor = () => {
  return (
    <SimpleEditor
      onAiImprove={(value) => {
        console.log(value);
      }}
    />
  );
};

export { Editor };
