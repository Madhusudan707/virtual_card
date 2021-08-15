import { useEffect, useState, useMemo } from "react";

export const useInfiniteScroll = (targetRef) => {

  //Infinite scrolling using  intersection observer
  const [last, setLast] = useState(10);

  const callback = (entries) => {
    const [entry] = entries;

    if (entry.isIntersecting) {
      setTimeout(() => {
        setLast((prev) => prev + 10);
      }, 500);
    }
  };

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    const currentTarget = targetRef?.current;

    if (currentTarget) observer.observe(currentTarget);
    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [targetRef, options]);
  return { last };
  //Windows Event Listener Implementation
  // const [isBottom, setIsBottom] = useState(false);
  // const [last, setLast] = useState(10);
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // useEffect(() => {
  //   if (isBottom) {
  //     setLast((prev) => prev + 10);
  //   }
  // }, [isBottom]);

  // const handleScroll = () => {
  //   const scrollTop =
  //     (document.documentElement && document.documentElement.scrollTop) ||
  //     document.body.scrollTop;
  //   const scrollHeight =
  //     (document.documentElement && document.documentElement.scrollHeight) ||
  //     document.body.scrollHeight;
  //   if (scrollTop + window.innerHeight + 50 >= scrollHeight) {
  //     setIsBottom((prev) => !prev);
  //   }
  // };
  // return { last };
};
