"use client";

import Script from "next/script";
import { useState } from "react";

export default function Home() {
  const [loadNormalScript, setLoadNormalScript] = useState(false);
  const [loadNextjsScript, setLoadNextjsScript] = useState(false);
  return (
    <>
      <button onClick={() => setLoadNormalScript(!loadNormalScript)}>
        Load normal script
      </button>
      <button onClick={() => setLoadNextjsScript(!loadNormalScript)}>
        Load NextJS script
      </button>
      {loadNormalScript && (
        <script src="http://localhost:8080/script.js" defer />
      )}
      {loadNextjsScript && (
        <Script src="http://localhost:8080/script.js" defer />
      )}
    </>
  );
}
