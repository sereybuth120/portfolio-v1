import { useState, useEffect } from 'react';

export default function useWindowResize() {
  const [windowSize, setWindowSize] = useState({ mobileView: false });
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 960
        ? setWindowSize((prevState) => ({ ...prevState, mobileView: true }))
        : setWindowSize((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener('resize', () => setResponsiveness());
  }, []);

  return { windowSize };
}
