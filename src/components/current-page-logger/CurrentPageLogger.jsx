import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function CurrentPageLogger() {
  const location = useLocation();

  return (
    <span>{location.pathname.replace(/^\//, '')}</span>
  )
}

export default CurrentPageLogger;