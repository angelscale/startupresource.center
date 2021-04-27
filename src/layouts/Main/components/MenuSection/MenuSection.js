import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { MenuGroup } from '..';

const MenuSection = ({ id, tags, children, onClose, classes }) => {
  const theme = useTheme();
  const columns = useMediaQuery(theme.breakpoints.up('sm')) ? 3 : 1;

  const childrenLength =
    children === undefined
      ? 0
      : children
          .map((child) => child.tags.length)
          .reduce((a, b) => a + b + 1, 0);

  const tagsLength = tags === undefined ? 0 : tags.length;
  const itemsPerColumn = (childrenLength + tagsLength) / columns;

  let sections = [];
  let column = [];

  let count = 0;
  if (tags !== undefined) {
    column.push(
      <MenuGroup
        key={id}
        id={undefined}
        tags={tags}
        onClose={onClose}
        classes={classes}
      />,
    );
  }
  if (children !== undefined) {
    for (let child of children) {
      column.push(
        <MenuGroup
          key={child.id}
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
