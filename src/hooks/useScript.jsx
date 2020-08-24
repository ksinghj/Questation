import { useEffect } from "react";

const useScript = (url, isAsync) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = url;
    isAsync ? (script.async = true) : (script.async = false);

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

export default useScript;
