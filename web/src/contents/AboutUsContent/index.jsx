import React, { useState } from 'react';
import { Link } from 'gatsby';

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

import { Section, SectionHeader, Image, CardBase } from 'components';
import TeamModal from './TeamModal';

import { paragraphs, newTeam } from './data';

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

const AboutUsContent = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [isOpen, setIsOpen] = useState(false);
  const [personData, setPersonData] = useState(null);

  const handleClick = (_data) => {
    setPersonData(_data);
    setIsOpen(true);
  };

  return (
    <Root className={classes.root}>
      <Section className={classes.hero_root}>
        <Image
          src="https://logobly.com/wp-content/uploads/97_amazing_freebie_sites_for_founders_logobly_03.jpg"
          srcSet="https://logobly.com/wp-content/uploads/97_amazing_freebie_sites_for_founders_logobly_03.jpg"
          alt="About"
          className={classes.hero_image}
          lazyProps={{
            width: '100%',
            height: '100%',
          }}
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
                subtitle={paragraphs.who_are_we}
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
            <Image
              src="https://assets.maccarianagency.com/the-front/illustrations/working-on-sofa.svg"
              alt="Our story"
              className={classes.image}
            />
          </Grid>
        </Grid>
      </Section>

      <Section className={classes.sectionNoPaddingTop}>
        <Grid container spacing={isMd ? 4 : 2}>
          <Grid item xs={12} sm={6} data-aos="fade-up">
            <SectionHeader
              title="Our process"
              subtitle={paragraphs.our_process}
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
              subtitle={paragraphs.our_story}
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
            <Image
              src="https://assets.maccarianagency.com/the-front/illustrations/people-in-sofa.svg"
              alt="people in sofa"
              className={classes.image}
            />
          </Grid>
        </Grid>
      </Section>

      <Section className={classes.sectionNoPaddingTop}>
        <SectionHeader title="Meet the Team" />
        <Grid container spacing={isMd ? 2 : 1}>
          {newTeam.map((item, index) => (
            <Grid
              item
              xs={6}
              sm={6}
              md={4}
              key={index}
              data-aos="fade-up"
              onClick={() => handleClick(item)}
            >
              <CardBase className={classes.cardBase} liftUp>
                <ListItem disableGutters className={classes.listItem}>
                  <ListItemAvatar className={classes.listItemAvatar}>
                    <Avatar
                      {...item.authorPhoto}
                      className={`${classes.avatar} ${
                        item?.posTop ? 'obj-top' : ''
                      }`}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    className={classes.listItemText}
                    primary={item.authorName}
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
            </Grid>
          ))}
        </Grid>
        <TeamModal open={isOpen} setOpen={setIsOpen} content={personData} />
      </Section>
    </Root>
  );
};

export default AboutUsContent;
