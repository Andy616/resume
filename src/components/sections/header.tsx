'use client'

import { FC, memo, useState, useMemo, useCallback } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { SectionId } from '@/data/data';
import { useNavObserver } from '@/hooks/useNavObserver';


function samePageLinkNavigation(
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

interface LinkTabProps {
  label?: string;
  href?: string;
  selected?: boolean;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      aria-current={props.selected && 'page'}
      {...props}
    />
  );
}


const Header: FC = memo(function Header() {
  const headerId = 'headerNav';

  const [currentSection, setCurrentSection] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== 'click' ||
      (event.type === 'click' &&
        samePageLinkNavigation(
          event as React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        ))
    ) {
      setCurrentSection(newValue);
    }
  };

  const navSections = useMemo(
    () => Object.values(SectionId),
    [],
  );

  const intersectionHandler = useCallback(
    (section: number) => setCurrentSection(section),
    [],
  );

  useNavObserver(
    navSections.map(section => `#${section}`).join(','), 
    headerId,
    intersectionHandler,
  );

  return (
    <AppBar color="transparent" sx={{ backdropFilter: 'blur(4px)' }} id={headerId}>
      <Toolbar sx={{ alignSelf: 'center' }}>

        <Tabs
          value={currentSection}
          onChange={handleChange}
          aria-label="nav tabs"
          role="navigation"
        >
          {Object.values(SectionId).map((section) => (
            <LinkTab key={section} label={section} href={`#${section}`}/>
          ))}
        </Tabs>

      </Toolbar>
    </AppBar>
  )
})

export default Header;