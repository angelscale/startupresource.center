import React from 'react';
import { graphql, Link } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';

import {
  Typography,
  styled,
  Box,
  Grid,
  useMediaQuery,
  Button,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';

// components
import {
  Breadcrumb,
  Container,
  Section,
  Slider,
  SectionHeader,
  CardBase,
  CardBlog,
  DescriptionListIcon,
  Image,
  CoreFourCard,
} from 'components';

import {
  articles as mockArticles,
  products as mockProducts,
  sub_categories,
} from './data';

const PREFIX = 'CategoryTemplate';

const classes = {
  root: `${PREFIX}-root`,
  featureContainer: `${PREFIX}-featureContainer`,
  featureImage: `${PREFIX}-featureImage`,
  featureContent: `${PREFIX}-featureContent`,
  featureSlider: `${PREFIX}-featureSlider`,
  featureTitle: `${PREFIX}-featureTitle`,
  featureText: `${PREFIX}-featureText`,
  featureBtn: `${PREFIX}-featureBtn`,
  categoryImage: `${PREFIX}-categoryImage`,
  descriptionListIcon: `${PREFIX}-descriptionListIcon`,
  cardBase: `${PREFIX}-cardBase`,
};

const Root = styled('div')(({ theme }) => ({
  margin: '0 auto',

  [`& .${classes.featureContainer}`]: {
    width: '100%',
    maxHeight: '70vh',
    position: 'relative',
  },

  [`& .${classes.featureImage}`]: {
    width: '100%',
    aspectRatio: '16/9',
  },

  [`& .${classes.featureContent}`]: {
    width: '24rem',
    padding: theme.spacing(2),
    position: 'absolute',
    right: '10px',
    bottom: '10px',
    background: 'white',
    borderRadius: theme.spacing(0.5),
  },

  [`& .${classes.featureSlider}`]: {
    borderRadius: '8px',
    overflow: 'hidden',
  },

  [`& .${classes.featureTitle}`]: {
    fontSize: theme.typography.pxToRem(18),
    lineHeight: 1.2,
  },

  [`& .${classes.featureText}`]: {
    fontSize: theme.typography.pxToRem(12),
    lineHeight: 1.6,
    marginBlock: theme.spacing(1),
  },

  [`& .${classes.featureBtn}`]: {
    fontSize: theme.typography.pxToRem(14),
    lineHeight: 1.2,
    color: theme.palette.primary,
    cursor: 'pointer',
  },

  [`& .${classes.categoryImage}`]: {
    width: 60,
    height: 60,
    objectFit: 'contain',
    marginBottom: theme.spacing(5),
  },

  [`& .${classes.descriptionListIcon}`]: {
    '& .description-list-icon__title': {
      fontWeight: 400,
      fontSize: 16,
    },
  },

  [`& .${classes.cardBase}`]: {
    borderRadius: theme.spacing(2),
    background: theme.palette.alternate.main,
    cursor: 'pointer',
  },
}));

const useStyles = makeStyles((theme) => ({
  cardBlog: {
    height: '100%',
    borderRadius: theme.spacing(1),
    '& .card-blog__content': {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  img_wrapper: {
    width: '100%',
    height: '100%',
  },
  image: {
    objectFit: 'cover',
    borderRadius: theme.spacing(0, 0, 20, 0),
  },
  blogContent: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  button: {
    minWidth: '100%',
    maxWidth: '100%',
    [theme.breakpoints.up('sm')]: {
      minWidth: 420,
    },
  },
}));

const CategoryTemplate = ({ data, location }) => {
  console.log(data);
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const articles = data.allArticles.nodes.map((node) => (
    <li key={`/${node.category}/${node.subcategory}/${node.fields.slug}`}>
      <Link to={`/${node.category}/${node.subcategory}/${node.fields.slug}`}>
        {node.name}
      </Link>
    </li>
  ));
  const products = data.allProducts.nodes.map((node) => (
    <li
      key={`/${node.category}/${node.subcategory}/core-four/${node.fields.slug}`}
    >
      <Link
        to={`/${node.category}/${node.subcategory}/core-four/${node.fields.slug}`}
      >
        {node.name}
      </Link>
    </li>
  ));

  return (
    <Root>
      <Breadcrumb location={location} />

      <Section disablePadding>
        <Slider
          list={mockArticles}
          Item={FeatureArticle}
          space={0}
          perView="auto"
          perGroup={1}
          navigation={false}
          pagination={{ clickable: true }}
          autoplay={{ delay: 1500 }}
          wrapperClass={classes.featureSlider}
        />
      </Section>

      <Container>
        {/* category description */}
        <Typography variant="h6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam nisi
          expedita neque amet optio sequi facilis. A nam animi quidem, assumenda
          ipsa veniam placeat nesciunt vitae perferendis, unde, voluptas quae.
        </Typography>

        {/* sub category list */}
        <Box sx={{ mt: 4 }}>
          <SectionHeader title="Sub Categories" align="left" />
          <Grid container spacing={2}>
            {sub_categories.map((item, index) => (
              <Grid item xs={6} md={2} key={index} data-aos="fade-up">
                <CardBase noBorder noShadow liftUp className={classes.cardBase}>
                  <DescriptionListIcon
                    className={classes.descriptionListIcon}
                    icon={
                      <Image
                        {...item.icon}
                        alt={item.title}
                        className={classes.image}
                      />
                    }
                    title={item.title}
                  />
                </CardBase>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* Articles */}
      <Container>
        <Grid container spacing={isMd ? 4 : 2}>
          {mockArticles.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} data-aos="fade-up">
              <CardBlog
                withShadow
                liftUp
                className={classes.cardBlog}
                mediaContent={
                  <BlogMediaContent
                    blogImage={item.headerImage}
                    alt={item.name}
                  />
                }
                cardContent={<BlogContent name={item.name} />}
              />
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={isMd ? 4 : 2} mt={1}>
          {mockProducts.slice(0, 2).map((item, index) => (
            <Grid item xs={12} sm={6} key={index} data-aos="fade-up">
              <CoreFourCard data={item} />
            </Grid>
          ))}
        </Grid>

        <Grid container justifyContent="center" mt={3}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
          >
            Load more
          </Button>
        </Grid>
      </Container>

      {/* <Container>
        <Typography variant="h3">Articles:</Typography>
        <ul>{articles}</ul>
      </Container>
      <Container>
        <Typography variant="h3">Products:</Typography>
        <ul>{products}</ul>
      </Container> */}
    </Root>
  );
};

function FeatureArticle({ data }) {
  const headerImageSharp = convertToBgImage(getImage(data.headerImage));

  return (
    <Box className={classes.featureContainer}>
      <BackgroundImage className={classes.featureImage} {...headerImageSharp} />
      <Box className={classes.featureContent}>
        <h4 className={classes.featureTitle}>{data.name}</h4>
        <p className={classes.featureText}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi soluta
          quisquam qui error porro nesciunt ratione reiciendis magnam,
          laboriosam optio ullam odio facilis doloremque illo? Officiis adipisci
          vel sapiente aspernatur?
        </p>
        <Link to={`/${data.category}/${data.subcategory}/${data.fields.slug}`}>
          <span className={classes.featureBtn}>Read more</span>
        </Link>
      </Box>
    </Box>
  );
}

const BlogMediaContent = (props) => {
  const classes = useStyles();
  const image = getImage(props.blogImage);

  return (
    <GatsbyImage
      image={image}
      className={classes.img_wrapper}
      imgClassName={classes.image}
      alt={props.alt}
    />
  );
};

const BlogContent = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.blogContent}>
      <Typography variant="h6" color="textPrimary" gutterBottom>
        {props.name}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi soluta
        quisquam qui error porro nesciunt ratione reiciendis magnam, laboriosam
        optio ullam odio facilis doloremque illo? Officiis adipisci vel sapiente
        aspernatur?
      </Typography>
    </div>
  );
};

export default CategoryTemplate;

export const postQuery = graphql`
  query ($category: String!) {
    allArticles(
      filter: { category: { eq: $category } }
      sort: { fields: create_date, order: ASC }
    ) {
      nodes {
        name
        category
        subcategory
        fields {
          slug
        }
        headerImage {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
    allProducts(
      filter: { category: { eq: $category } }
      sort: { fields: create_date, order: ASC }
    ) {
      nodes {
        name
        category
        subcategory
        fields {
          slug
        }
      }
    }
  }
`;
