import React, { createElement, Fragment, useEffect } from 'react';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeReact from 'rehype-react';

import {
  Typography,
  ListItemText,
  styled,
  Link,
  Avatar,
  Box,
} from '@mui/material';
import { alpha } from '@mui/material/styles';

// components
import { Container } from 'components';

// helper
import { getFormattedDate } from './utils/helper';

const Text = styled(Typography)(
  () => `
    font-size: 1.125rem;
    line-height: 1.125rem;
    font-weight: 400;
    letter-spacing: 0.4px;
    white-space: pre-line;
    margin-bottom: 1.5em;
`,
);

const Itemtext = styled(ListItemText)(
  () => `
    font-size: 1.125rem;
    line-height: 1.125rem;
    font-weight: 600;
    letter-spacing: 0.4px;
    white-space: pre-line;

    span {
      all: inherit;
      margin: 0;
    }
`,
);

const LinkText = styled(Link)(
  () => `
    font-weight: 600;
`,
);

const ArticleDetailContent = ({ data }) => {
  const { name, content, create_date } = data.allArticles.nodes[0];

  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll('.jarallax');
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }

      const { jarallax } = await import('jarallax');
      jarallax(jarallaxElems, { speed: 0.2 });
    };

    jarallaxInit();
  });

  const parseContent = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .use(rehypeReact, {
      createElement,
      Fragment,
      components: {
        p: Text,
        li: Itemtext,
        a: LinkText,
      },
    })
    .processSync(content);

  return (
    <div>
      <Box
        className={'jarallax'}
        data-jarallax
        data-speed="0.2"
        position={'relative'}
        minHeight={{ xs: 400, sm: 500, md: 600 }}
        display={'flex'}
        paddingTop={13}
        alignItems={'center'}
        id="agency__portfolio-item--js-scroll"
      >
        <Box
          className={'jarallax-img'}
          sx={{
            position: 'absolute',
            objectFit: 'cover',
            fontFamily: 'object-fit: cover;',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundImage:
              'url(https://assets.maccarianagency.com/backgrounds/img3.jpg)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: 1,
            height: 1,
            background: alpha('#161c2d', 0.6),
            zIndex: 1,
          }}
        />
        <Container position={'relative'} zIndex={2}>
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 400,
                color: 'common.white',
                marginBottom: 2,
              }}
            >
              {name}
            </Typography>
            <Box display={'flex'} alignItems={'center'}>
              <Avatar
                sx={{ width: 60, height: 60, marginRight: 2 }}
                src={'https://assets.maccarianagency.com/avatars/img3.jpg'}
              />
              <ListItemText
                sx={{ margin: 0 }}
                primary={'Guest User'}
                secondary={getFormattedDate(create_date)}
                primaryTypographyProps={{
                  variant: 'h6',
                  sx: { color: 'common.white' },
                }}
                secondaryTypographyProps={{
                  sx: { color: alpha('#ffffff', 0.8) },
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      <Container>
        <div>{parseContent.result}</div>
      </Container>
    </div>
  );
};

export default ArticleDetailContent;
