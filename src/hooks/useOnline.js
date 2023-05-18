import { useEffect, useState } from "react";
export default useOnline = function () {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    checkOnline = () => setIsOnline(true);
    checkOffline = () => setIsOnline(false);

    window.addEventListener("online", checkOnline);
    window.addEventListener("offline", checkOffline);

    // doing the clean-up (componentWillUnmount)
    return () => {
      window.removeEventListener("online", checkOnline);
      window.removeEventListener("online", checkOffline);
    };
  }, []);
  return isOnline;
};
