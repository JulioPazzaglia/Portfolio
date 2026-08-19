"use client";

import { useState } from "react";
import Button from "../ui/Button";

export default function CopyEmailButton({ email }) {
  const [wasCopied, setWasCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setWasCopied(true);
      setTimeout(() => setWasCopied(false), 2000);
    } catch (error) {
      setWasCopied(false);
    }
  };

  return (
    <Button variant="secondary" onClick={handleCopy} aria-live="polite">
      {wasCopied ? "Copiado" : "Copiar email"}
    </Button>
  );
}
