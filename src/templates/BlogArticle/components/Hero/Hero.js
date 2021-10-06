import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Grid,
} from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';

import SecondaryAuthors from '../SecondaryAuthors';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWdith: theme.layout.contentWidth,
    height: '100%',
    maxHeight: '400px',
    position: 'relative',
    background: 'white',
    overflow: 'hidden',
    borderRadius: theme.spacing(1),
  },
  sectionWrapper: {
    // display: 'flex',
    // flex: 'column nowrap',
    height: 400,
    width: '100%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#00000050',
  },
  textWhite: {
    color: 'white',
  },
  title: {
    fontWeight: 'bold',
  },
  section: {
    display: 'flex',
    flexFlow: 'column nowrap',
    padding: theme.spacing(4),
    height: '100%',
  },
  spacer: {
    flexGrow: 1,
  },
  byline: {},
  listItemAvatar: {
    marginRight: theme.spacing(2),
  },
  avatar: {
    height: 60,
    width: 60,
    backgroundColor: '#FFFFFF50',
  },
  secondaryAvatar: {
    height: 40,
    width: 40,
  },
  imageContainer: {
    position: 'absolute',
    top: '0%',
    right: '0%',
    padding: 0,
    // zIndex: -1,
  },
  image: {
    objectFit: 'cover',
    objectPosition: '50% 0px',
    // zIndex: -1,
  },
}));

const Hero = (props) => {
  const {
    className,
    cover,
    title,
    subtitle,
    authors,
    published,
    updated,
    ...rest
  } = props;
  const classes = useStyles();

  return (
    <div className={classes.root} {...rest}>
      {cover ? (
        <GatsbyImage
          image={cover}
          alt={title}
          className={classes.imageContainer}
          imgClassName={classes.image}
          loading="eager"
          layout="constrained"
        />
      ) : (
        <StaticImage
          src="../../../../assets/images/placeholder.png"
          alt={title}
          className={classes.imageContainer}
          imgClassName={classes.image}
          loading="eager"
          layout="constrained"
        />
      )}
      <div className={classes.sectionWrapper}>
        <Section className={classes.section}>
          <SectionHeader
            title={title}
            subtitle={subtitle}
            align="left"
            titleProps={{
              className: clsx(classes.title, classes.textWhite),
              variant: 'h3',
            }}
            subtitleProps={{
              className: classes.textWhite,
            }}
          />
          <div className={classes.spacer} />
          <Grid container className={classes.byline}>
            <Grid item xs={12} md={4}>
              <List disablePadding>
                <ListItem disableGutters>
                  <ListItemAvatar className={classes.listItemAvatar}>
                    <Avatar
                      src={authors.primary.photo}
                      alt={authors.primary.name}
                      className={classes.avatar}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={`By ${authors.primary.name}`}
                    secondary={`Last updated at ${updated}`}
                    primaryTypographyProps={{
                      className: classes.textWhite,
                      variant: 'subtitle1',
                    }}
                    secondaryTypographyProps={{
                      className: classes.textWhite,
                      variant: 'subtitle1',
                    }}
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={8}>
              <SecondaryAuthors classes={classes} authors={authors} />
            </Grid>
          </Grid>
        </Section>
      </div>
    </div>
  );
};

export default Hero;
