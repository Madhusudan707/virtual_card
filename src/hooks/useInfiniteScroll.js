import { useEffect, useState } from "react";

export const useInfiniteScroll = () => {
  const [isBottom, setIsBottom] = useState(false);
  const [last, setLast] = useState(10);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isBottom) {
      setLast((prev) => prev + 10);
    }
  }, [isBottom]);

  const handleScroll = () => {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    const scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;
    if (scrollTop + window.innerHeight + 50 >= scrollHeight) {
      setIsBottom((prev) => !prev);
    }
  };
  return { last };
};
