import React from 'react';
import { Link, graphql } from 'gatsby';
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';

import {
  useMediaQuery,
  Grid,
  Button,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  styled,
  useTheme,
} from '@mui/material';

import { Breadcrumb, Section, SectionHeader, CardBase } from 'components';
import WorkingOnSofa from 'assets/images/about/working-on-sofa.inline.svg';
import PeopleInSofa from 'assets/images/about/people-in-sofa.inline.svg';

const PREFIX = 'AboutUsContent';

const classes = {
  root: `${PREFIX}-root`,
  sectionNoPaddingTop: `${PREFIX}-sectionNoPaddingTop`,
  sectionPartners: `${PREFIX}-sectionPartners`,
  hero_root: `${PREFIX}-hero_root`,
  hero_image: `${PREFIX}-hero_image`,
  hero_title: `${PREFIX}-hero_title`,
  store_image: `${PREFIX}-store_image`,
  work_image: `${PREFIX}-work_image`,
  cardBase: `${PREFIX}-cardBase`,
  avatar: `${PREFIX}-avatar`,
  listItem: `${PREFIX}-listItem`,
  listItemAvatar: `${PREFIX}-listItemAvatar`,
  listItemText: `${PREFIX}-listItemText`,
  team_title: `${PREFIX}-team_title`,
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    height: '100%',
    width: '100%',
  },

  [`& .${classes.sectionNoPaddingTop}`]: {
    paddingTop: 0,
  },

  [`& .${classes.sectionPartners}`]: {
    boxShadow: '0 5px 20px 0 rgba(90, 202, 157, 0.05)',
    '& .section-alternate__content': {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
  },

  [`& .${classes.hero_root}`]: {
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    padding: 0,
  },

  [`& .${classes.hero_image}`]: {
    maxHeight: 400,
    objectFit: 'cover',
    objectPosition: 'center',
  },

  [`& .${classes.hero_title}`]: {
    position: 'absolute',
    top: '50%',
    left: '8%',
    transform: 'translate(-8%, -50%)',
    paddingBottom: '10px',
    fontWeight: 'bold',
    color: 'white',
  },

  [`& .${classes.store_image}`]: {
    maxWidth: 420,
  },

  [`& .${classes.work_image}`]: {
    maxWidth: 560,
  },

  [`& .${classes.cardBase}`]: {
    boxShadow: 'none',
    background: theme.palette.alternate.main,
    borderRadius: theme.spacing(1),
    '& .card-base__content': {
      padding: theme.spacing(1),
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(3),
      },
    },
    cursor: 'pointer',
  },

  [`& .${classes.avatar}`]: {
    width: 110,
    height: 110,
    border: `4px solid ${theme.palette.alternate.dark}`,
    borderRadius: '100%',
    boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.1)',
  },

  [`& .${classes.listItem}`]: {
    padding: 0,
    [theme.breakpoints.down('lg')]: {
      flexDirection: 'column',
    },
  },

  [`& .${classes.listItemAvatar}`]: {
    marginRight: theme.spacing(3),
    [theme.breakpoints.down('lg')]: {
      marginRight: 0,
      marginBottom: theme.spacing(2),
    },
  },

  [`& .${classes.listItemText}`]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    margin: 0,
    height: '100%',
  },

  [`& .${classes.team_title}`]: {
    fontWeight: 'bold',
  },
}));

const Image = styled(GatsbyImage)({
  objectFit: 'cover',
});

const AboutUsPage = ({ data, location }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Root className={classes.root}>
      <Breadcrumb location={location} />
      <Section className={classes.hero_root}>
        <StaticImage
          src="../../assets/images/about/97_amazing_freebie_sites_for_founders_logobly_03.jpeg"
          alt="About"
          className={classes.hero_image}
        />
        <SectionHeader
          title="About us"
          align="left"
          data-aos="fade-up"
          disableGutter
          titleProps={{
            className: classes.hero_title,
            variant: 'h3',
          }}
        />
      </Section>

      <Section>
        <Grid
          container
          justifyContent="space-between"
          spacing={isMd ? 4 : 2}
          direction={isMd ? 'row' : 'column-reverse'}
        >
          <Grid
            item
            container
            alignItems="center"
            justifyContent="flex-start"
            xs={12}
            md={6}
            data-aos={'fade-up'}
          >
            <div>
              <SectionHeader
                title="Who are we?"
                subtitle={`Angel Scale is committed to helping startup and pre-startup entrepreneurs navigate the path from ideation to activation; from startup, to profitability, and beyond. Startup Resource Center was created as part of Angel Scale’s arsenal of resources to expedite entrepreneurs to success, offering new entrepreneurs the information, data, and actual resources needed to take their idea to market, all through an easy-to-access digital site. SRC further recognizes that great ideas are only a starting point, and thus aims to connect entrepreneurs with people and companies that can provide the tools, software, and expertise needed to pave the way to success.`}
                align="left"
                disableGutter
                whitespace
                subtitleProps={{
                  color: 'textPrimary',
                  variant: 'body1',
                }}
              />
            </div>
          </Grid>
          <Grid
            item
            container
            justifyContent={isMd ? 'flex-end' : 'flex-start'}
            alignItems="center"
            xs={12}
            md={6}
            data-aos={'fade-up'}
          >
            <WorkingOnSofa alt="Our story" className={classes.image} />
          </Grid>
        </Grid>
      </Section>

      <Section className={classes.sectionNoPaddingTop}>
        <Grid container spacing={isMd ? 4 : 2}>
          <Grid item xs={12} sm={6} data-aos="fade-up">
            <SectionHeader
              title="Our process"
              subtitle={`Angel Scale and SRC are run by a small team of experts with first-hand experience in entrepreneurial pursuits. As business owners, we understand the excitement, concerns, and challenges new startups face, and we want to help. Angel Scale is committed to taking young entrepreneurs through the process of starting and growing a business.  We offer different levels of support, from valuable content and product/service reviews, to one-on-one consulting relationships. Each of us have been there, facing the obstacles that come with starting and developing new businesses, so we know what to expect and can serve as navigators for those entering what could otherwise be a bumpy road.  We fully believe in the path from living room to CEO suite, and that, with proper guidance, any strong idea can become a successful business entity.`}
              disableGutter
              align="left"
              subtitleProps={{
                variant: 'body1',
                color: 'textPrimary',
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} data-aos="fade-up">
            <SectionHeader
              title="Our story"
              subtitle={`Angel Scale, LLC, and Startup Resource Center (SRC) were created to support those who are relatively new to starting, owning, and running a successful business. Founded in March of 2021, Angel Scale began by helping five new businesses hit the ground running: Grey and Bash Teas -- a loose-leaf tea company, Honey Sweet Collective -- a company that manufactures and sells fun coffee mugs, Insomnia PJ -- a high-end line of women's loungewear, Hot Fit NYC -- a Mixed Martial Arts fitness facility in NYC, and Medical Doorway -- an International Education firm that helps high school graduates enroll in Medical schools in six countries throughout Europe and Asia.  Each of these companies is now thriving, thanks in part to the resources, insight, and support offered by Angel Scale’s business experts.`}
              disableGutter
              align="left"
              subtitleProps={{
                variant: 'body1',
                color: 'textPrimary',
              }}
            />
          </Grid>
        </Grid>
      </Section>

      <Section className={classes.sectionNoPaddingTop}>
        <Grid
          container
          justifyContent="space-between"
          spacing={isMd ? 4 : 2}
          direction={isMd ? 'row' : 'column-reverse'}
        >
          <Grid
            item
            container
            alignItems="center"
            justifyContent="flex-start"
            xs={12}
            md={6}
            data-aos={'fade-up'}
          >
            <div>
              <SectionHeader
                title="Want to work with us?"
                align="left"
                disableGutter
                subtitleProps={{
                  color: 'textPrimary',
                  variant: 'body1',
                }}
                ctaGroup={[
                  <Button
                    component={Link}
                    to="/about-us/src-consulting"
                    color="primary"
                    variant="contained"
                    size="large"
                  >
                    SRC Consulting
                  </Button>,
                ]}
              />
            </div>
          </Grid>
          <Grid
            item
            container
            justifyContent={isMd ? 'flex-end' : 'flex-start'}
            alignItems="center"
            xs={12}
            md={6}
            data-aos={'fade-up'}
          >
            <PeopleInSofa alt="people in sofa" className={classes.image} />
          </Grid>
        </Grid>
      </Section>

      <Section className={classes.sectionNoPaddingTop}>
        <SectionHeader title="Meet the Team" />
        <Grid container spacing={isMd ? 2 : 1}>
          {data.allPeople.nodes.map((item, index) => (
            <Grid item xs={6} sm={6} md={4} key={index} data-aos="fade-up">
              <Link to={`/about-us/${item.fields.slug}`}>
                <CardBase className={classes.cardBase} liftUp>
                  <ListItem disableGutters className={classes.listItem}>
                    <ListItemAvatar className={classes.listItemAvatar}>
                      <Avatar
                        className={`${classes.avatar} ${
                          item?.posTop ? 'obj-top' : ''
                        }`}
                      >
                        <Image
                          image={getImage(item.headshotImage)}
                          alt={item.name}
                        />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      className={classes.listItemText}
                      primary={item.name}
                      secondary={item.title}
                      primaryTypographyProps={{
                        className: classes.team_title,
                        variant: 'h6',
                        align: isMd ? 'left' : 'center',
                      }}
                      secondaryTypographyProps={{
                        color: 'textPrimary',
                        align: isMd ? 'left' : 'center',
                      }}
                    />
                  </ListItem>
                </CardBase>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Section>
    </Root>
  );
};

export default AboutUsPage;

export const peopleQuery = graphql`
  query {
    allPeople {
      nodes {
        id
        name
        title
        bio
        fields {
          slug
        }
        headshotImage {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 110
              height: 110
              transformOptions: { fit: OUTSIDE, cropFocus: SOUTH }
              placeholder: NONE
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`;

// transformOptions: {
//   fit: COVER;
//   cropFocus: ATTENTION;
//   trim: 50;
//   position: CENTER;
// }
