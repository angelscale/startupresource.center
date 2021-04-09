import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { MenuGroup } from '..';

const MenuSection = ({ id, children, onClose, classes }) => {
  const theme = useTheme();
  const columns = useMediaQuery(theme.breakpoints.up('sm')) ? 3 : 1;

  const items = children
    .map((child) => child.tags.length)
    .reduce((a, b) => a + b + 1, 0);

  const itemsPerColumn = items / columns;

  let sections = [];
  let column = [];

  let count = 0;
  for (let child of children) {
    column.push(
      <MenuGroup
        id={child.id}
        tags={child.tags}
        onClose={onClose}
        classes={classes}
      />,
    );
    count += child.tags.length + 1;
    if (count >= itemsPerColumn) {
      sections.push(column);
      column = [];
      count = 0;
    }
  }
  if (column.length > 0) {
    sections.push(column);
  }

  return (
    <div className={classes.menu}>
      {sections.map((section, idx) => (
        <div key={`section-${idx}`} className={classes.menuItem}>
          {section}
        </div>
      ))}
    </div>
  );
};
export default MenuSection;
