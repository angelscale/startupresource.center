/* eslint-disable camelcase */
import React, { createElement, Fragment, useEffect } from 'react';
import clsx from 'clsx';
import _ from 'lodash';
import { graphql } from 'gatsby';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeReact from 'rehype-react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';
import {
  Typography,
  ListItemText,
  styled,
  Link,
  Avatar,
  Box,
  alpha,
} from '@mui/material';

// components
import { Breadcrumb, Container, SEO } from 'components';
import { getFormattedDate } from 'utils/helpers';

const PREFIX = 'ArticleTemplate';

const classes = {
  root: `${PREFIX}-root`,
  heroContainer: `${PREFIX}-heroContainer`,
  heroImage: `${PREFIX}-heroImage`,
};

const Root = styled('div')(({ theme }) => ({
  [`& .${classes.root}`]: {},

  [`& .${classes.heroContainer}`]: {
    aspectRatio: 2.4,
  },

  [`& .${classes.heroImage}`]: {
    position: 'absolute',
    objectFit: 'cover',
    fontFamily: 'object-fit: cover;',
    zIndex: -1,
    backgroundPosition: 'top center',
  },
}));

const Text = styled('div')(
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

const ArticleTemplate = ({ data, location }) => {
  const { name, content, create_date, headerImage } = data.allArticles.nodes[0];

  const headerImageSharp = convertToBgImage(getImage(headerImage));

  const InlineImage = ({ src, alt, ...rest }) => {
    const imgName = src.substring(
      src.lastIndexOf('/') + 1,
      src.lastIndexOf('.'),
    );
    const imgIndex = _.findIndex(
      data.allFile.nodes,
      (node) => node.name === imgName,
    );

    if (imgIndex === -1) {
      console.log(
        `WARN: No image found for ${imgName} - assuming header image!`,
      );
      return <GatsbyImage image={getImage(headerImage)} alt={alt} {...rest} />;
    }
    const imgSharp = getImage(data.allFile.nodes[imgIndex]);
    if (!imgSharp) {
      console.log(
        `WARN: No sharp processed images found for ${imgName} - will not be rendered!`,
      );
      return null;
    }
    return <GatsbyImage image={imgSharp} alt={alt} {...rest} />;
  };

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
        img: InlineImage,
      },
    })
    .processSync(content);

  return (
    <Root>
      <SEO data={data.allArticles.nodes[0]} />
      <Breadcrumb location={location} />
      <Box
        className={clsx('jarallax', classes.heroContainer)}
        data-jarallax
        data-speed="0.1"
        position={'relative'}
        display={'flex'}
        alignItems={'center'}
        id="agency__portfolio-item--js-scroll"
      >
        <BackgroundImage
          className={clsx('jarallax-img', classes.heroImage)}
          {...headerImageSharp}
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
    </Root>
  );
};

export default ArticleTemplate;

export const postQuery = graphql`
  query ($id: String!) {
    allArticles(filter: { id: { eq: $id } }) {
      nodes {
        id
        name
        status
        category
        subcategory
        title_tag
        meta_description
        headerImage {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        images
        content
        create_date
      }
    }
    allFile(filter: { parent: { id: { eq: $id } } }) {
      nodes {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
        name
      }
    }
  }
`;
