import React from 'react';
import About from 'components/Sections/_About';
import Work from 'components/Sections/_Projects';
import WorkExperience from 'components/Sections/_WorkExperience';
import Skill from 'components/Sections/_Skills';
import Contact from 'components/Sections/_Contact';

import Section from 'components/UI/Section';
import TopNav from 'components/UI/NavBar';
import { MySocials, MyEmailSocials } from 'components/UI/Social';
import useScroll from 'hooks/useScroll';

export const _TopNavData = [
  {
    id: 'about',
    label: 'ABOUT',
    subItem: [],
    component: <About />,
    isCenter: true,
    backgroundColor: 'primary',
  },
  {
    id: 'work',
    label: 'PROJECTS',
    subItem: [],
    component: <Work />,
    isCenter: true,
    backgroundColor: 'primary',
  },
  {
    id: 'experience',
    label: 'EXPERIENCES',
    subItem: [],
    component: <WorkExperience />,
    isCenter: true,
    backgroundColor: 'primary',
  },
  {
    id: 'skill',
    label: 'SKILLSET',
    subItem: [],
    component: <Skill />,
    isCenter: true,
    backgroundColor: 'primary',
  },
  {
    id: 'contact',
    label: 'CONTACT',
    subItem: [],
    component: <Contact />,
    isCenter: true,
    backgroundColor: 'primary',
  },
];


const App = () => {
  console.log('test')
  const { scrollRefs, scrollSmoothHandler } = useScroll(_TopNavData);
  return (
    <div>
      <TopNav selectedElements={_TopNavData} scrollSmoothHandler={scrollSmoothHandler} />
      <MySocials />

      <div>
        {_TopNavData.map((item, i) => {
          return (
            <Section
              key={i}
              id={item.id}
              ref={scrollRefs.current[i]}
              backgroundColor={item.backgroundColor}
              isCenter={item.isCenter}
            >
              {item.component}
            </Section>
          );
        })}
      </div>
      <MyEmailSocials />
    </div>
  );
};
export default App;
