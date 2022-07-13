import GlitchedWriter from "glitched-writer";

import React, { useEffect } from "react";

const DynamicText = () => {
  useEffect(() => {
    const target = document.getElementById("text-target");
    const array = ["Développeur", "Créatif", "Curieux"];
    const writer = new GlitchedWriter(target);

    writer.queueWrite(array, 4000, true);
  }, []);

  return (
    <span className="dynamic-text">
      <span id="text-target"></span>
    </span>
  );
};

export default DynamicText;
