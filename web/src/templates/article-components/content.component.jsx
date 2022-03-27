import React, { useState, useEffect, createElement, Fragment } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';

import rehypeReact from 'rehype-react';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

// icons
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

// utils
import { getFormattedDate } from 'utils';

const photos = [
  {
    src: 'https://assets.maccarianagency.com/backgrounds/img25.jpg',
    rows: 1,
    cols: 2,
  },
  {
    src: 'https://assets.maccarianagency.com/backgrounds/img22.jpg',
    rows: 1,
    cols: 1,
  },
  {
    src: 'https://assets.maccarianagency.com/backgrounds/img24.jpg',
    rows: 1,
    cols: 1,
  },
  {
    src: 'https://assets.maccarianagency.com/backgrounds/img21.jpg',
    rows: 1,
    cols: 2,
  },
];

const Content = ({ data }) => {
  console.log(data);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [content, setContent] = useState(null);

  useEffect(() => {
    if (data) {
      unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeStringify)
        .use(rehypeReact, { createElement, Fragment })
        .process(data.content)
        .then((file) => {
          console.log('result', { file });
          setContent(file.result);
        });
    }
  }, [data]);

  return (
    <Box>
      <Box paddingX={{ xs: 0, sm: 4, md: 6 }}>
        <Typography variant={'subtitle1'}>{content}</Typography>
      </Box>
      <Box marginY={4}>
        <ImageList
          variant="quilted"
          cols={3}
          rowHeight={isMd ? 300 : 220}
          gap={isMd ? 16 : 8}
        >
          {photos.map((item, i) => (
            <ImageListItem key={i} cols={item.cols || 2} rows={item.rows || 1}>
              <LazyLoadImage
                height={'100%'}
                width={'100%'}
                src={item.src}
                alt="..."
                effect="blur"
                style={{
                  objectFit: 'cover',
                  cursor: 'poiner',
                  borderRadius: 8,
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Box paddingX={{ xs: 0, sm: 4, md: 6 }} paddingBottom={4}>
        <Box>
          <Typography variant={'h5'} gutterBottom>
            Small heading for a smaller transition
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Typography>
        </Box>
      </Box>
      <Box paddingX={{ xs: 0, sm: 4, md: 6 }} paddingY={4}>
        <Typography color={'text.secondary'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Typography>
      </Box>
      <Box paddingY={4}>
        <Divider />
      </Box>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        flexWrap={'wrap'}
      >
        <Box display={'flex'} alignItems={'center'}>
          <Avatar
            sx={{ width: 50, height: 50, marginRight: 2 }}
            src={'https://assets.maccarianagency.com/avatars/img3.jpg'}
          />
          <Box>
            <Typography fontWeight={700}>Guest User</Typography>
            <Typography color={'text.secondary'}>
              {getFormattedDate(data.create_date)}
            </Typography>
          </Box>
        </Box>
        <Box display={'flex'} alignItems={'center'}>
          <Typography color={'text.secondary'}>Share:</Typography>
          <Box marginLeft={0.5}>
            <IconButton aria-label="Facebook">
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="Instagram">
              <InstagramIcon />
            </IconButton>
            <IconButton aria-label="Twitter">
              <TwitterIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Content;
