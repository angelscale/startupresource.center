import React from 'react';
import { graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

import {
  Grid,
  Box,
  useMediaQuery,
  styled,
  useTheme,
  Typography,
} from '@mui/material';

import { Breadcrumb, SectionHeader } from 'components';

const PREFIX = 'DetailModal';

const classes = {
  image: `${PREFIX}-image`,
  content: `${PREFIX}-content`,
};

const Root = styled(Box)(({ theme }) => ({
  [`& .${classes.image}`]: {
    maxWidth: 420,
    objectFit: 'cover',
  },

  [`& .${classes.content}`]: {
    padding: 16,
    [theme.breakpoints.up('sm')]: {
      padding: 0,
    },
  },
}));

const Container = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(6),
    marginRight: theme.spacing(6),
  },
}));

const Content = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    paddingLeft: theme.spacing(6),
  },
}));

const Image = styled(GatsbyImage)(({ theme }) => ({
  maxWidth: 420,
  objectFit: 'cover',
  borderRadius: 10,
}));

const PersonTemplate = ({ data, location }) => {
  const person = data.allPeople.nodes[0];

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Root>
      <Breadcrumb location={location} />
      <Container>
        <Grid
          container
          justifyContent="space-between"
          // spacing={isMd ? 4 : 2}
          direction={isMd ? 'row-reverse' : 'column-reverse'}
        >
          <Grid
            item
            container
            alignItems="center"
            justifyContent="flex-start"
            xs
            // md={6}
            data-aos={'fade-in'}
            className={classes.content}
          >
            <Content>
              <SectionHeader
                title={person.name}
                subtitle={person.title}
                align="left"
                disableGutter
                whitespace
              />
              <Typography variant="body1" color="textPrimary">
                {person.bio}
              </Typography>
            </Content>
          </Grid>
          <Grid
            item
            container
            justifyContent="center"
            alignItems="flex-start"
            xs
            // md={6}
            data-aos={'fade-in'}
          >
            <Image
              image={getImage(person.headshotImage)}
              alt={person.name}
              className={classes.image}
            />
          </Grid>
        </Grid>
      </Container>
    </Root>
  );
};

export default PersonTemplate;

export const personQuery = graphql`
  query ($id: String!) {
    allPeople(filter: { id: { eq: $id } }) {
      nodes {
        id
        name
        title
        bio
        headshotImage {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              transformOptions: { fit: COVER, cropFocus: ATTENTION }
              width: 420
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`;
