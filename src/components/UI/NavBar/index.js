import React from 'react';

import DesktopNav from './_DesktopNav';
import MobileNavView from './_MobileView';
import useWindowResize from 'hooks/useWindowResize';

const TopNav = ({ selectedElements, scrollSmoothHandler }) => {
  const { windowSize } = useWindowResize();
  return (
    <>
      {windowSize.mobileView ? (
        <MobileNavView selectedElements={selectedElements} scrollSmoothHandler={scrollSmoothHandler} />
      ) : (
        <DesktopNav selectedElements={selectedElements} scrollSmoothHandler={scrollSmoothHandler} />
      )}
    </>
  );
};

export default TopNav;
