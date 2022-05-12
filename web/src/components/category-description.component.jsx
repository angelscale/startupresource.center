import React, { useEffect, useState, useCallback } from 'react';
import { Typography, styled } from '@mui/material';

const CHARACTER_LIMIT = 220;

const MoreButton = styled('span')({
  color: '#3f51b5',
  fontSize: '.75rem',
  cursor: 'pointer',
  marginLeft: '.5rem',
  whiteSpace: 'nowrap',
});

const CategoryDescription = ({ content }) => {
  const [text, setText] = useState(null);
  const [seeMore, setSeeMore] = useState(false);
  const [isTrim, setIsTrim] = useState(false);

  const handleResize = useCallback(() => {
    if (window.innerWidth < 640) {
      setIsTrim(true);
      setText(trimText(content, CHARACTER_LIMIT));
    } else {
      setText(content);
      setIsTrim(false);
    }
  }, [content]);

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  const trimText = (_text, _limit) => {
    return _text.substring(0, _limit) + '...';
  };

  const handleClick = () => {
    setSeeMore(!seeMore);
  };

  return isTrim ? (
    <Typography variant="h6" sx={{ display: 'inline' }}>
      {!seeMore ? text : content}
      <MoreButton onClick={handleClick}>
        {!seeMore ? 'Read More' : 'Show Less'}
      </MoreButton>
    </Typography>
  ) : (
    <React.Fragment>
      {text && <Typography variant="h6">{text}</Typography>}
    </React.Fragment>
  );
};

export default CategoryDescription;
