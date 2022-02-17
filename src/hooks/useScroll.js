import { createRef, useRef } from 'react';

export default function useScroll(data) {
  const scrollRefs = useRef([]);

  // Populate scrollable refs, only create them once
  // if the selectedElements array length is expected to change there is a workaround
  scrollRefs.current = [...Array(data.length).keys()].map((_, i) => {
    return scrollRefs.current[i] ?? createRef();
  });

  // Curried handler to take index and return click handler
  const scrollSmoothHandler = (index) => () => {
    return scrollRefs.current[index].current.scrollIntoView({ behavior: 'smooth' });
  };

  return { scrollRefs, scrollSmoothHandler };
}
