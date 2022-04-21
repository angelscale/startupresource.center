import React, { Fragment, createElement } from 'react';
import { Link } from 'gatsby';

import makeStyles from '@mui/styles/makeStyles';
import {
  Grid,
  Typography,
  ListItemText,
  Box,
  Link as MUILink,
  styled,
} from '@mui/material';
// import LaunchIcon from '@mui/icons-material/Launch';
// import ArrowRightIcon from '@mui/icons-material/ArrowRight';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
// import ImageGallery from 'react-image-gallery';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeReact from 'rehype-react';

const Logo = styled(GatsbyImage)(({ theme }) => ({
  height: '100%',
  width: '100%',
  objectFit: 'contain',
}));

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: `0 2px 10px 0 ${theme.palette.cardShadow}`,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(4, 2),
  },
  title: {
    fontSize: '1rem',
    lineHeight: '1.25rem',
    fontWeight: '700',
  },
  subTitle: {
    fontSize: '1.125rem',
    lineHeight: '1.125rem',
    fontWeight: '700',
  },
  list: {
    listStyle: 'none',
    marginTop: '.75rem',
  },
  item: {
    display: 'flex',
    alignItems: 'flex-start',
    '& span': {
      fontSize: '.875rem',
      lineHeight: '1.25rem',
      marginRight: '8px',
      fontWeight: '600',
    },
    '& svg': {
      '&:last-child': {
        width: '16px',
        height: '16px',
        color: '#4051B5',
      },
    },
  },
}));

const Text = styled(Typography)(
  () => `
    font-size: .875rem;
    line-height: 1.125rem;
    font-weight: 400;
    letter-spacing: 0.4px;
    white-space: pre-line;
    margin-bottom: 1.5em;
`,
);

const Itemtext = styled(ListItemText)(
  () => `
    font-size: .875rem;
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

const LinkText = styled(MUILink)(
  () => `
    font-weight: 600;
`,
);
const ProductCard = ({ data }) => {
  const classes = useStyles();

  if (!data) {
    return null;
  }

  return (
    <Box className={classes.root}>
      <Grid container alignItems="flex-start">
        <Grid
          item
          xs={12}
          sm={6}
          md={9}
          justifyContent="flex-end"
          alignItems="flex-start"
        >
          <Typography variant="h4" className={classes.name}>
            {data.name}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Link
            to={`/${data.category}/${data.subcategory}/core-four/${data.fields.slug}`}
          >
            <Logo image={getImage(data.logoImage)} alt={data.name} />
          </Link>
        </Grid>
      </Grid>

      <Grid container sx={{ mt: 2 }}>
        <Grid item xs={12}>
          <Box>
            {
              unified()
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
                .processSync(data.description).result
            }
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductCard;
