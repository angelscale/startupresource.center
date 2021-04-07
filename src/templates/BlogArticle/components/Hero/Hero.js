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
import { Section, Parallax } from 'components/organisms';

import SecondaryAuthors from '../SecondaryAuthors';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    position: 'relative',
    background: 'white',
    overflow: 'hidden',
  },
  sectionWrapper: {
    height: 400,
    backgroundColor: theme.palette.primary.main + '80',
  },
  textWhite: {
    color: 'white',
  },
  title: {
    fontWeight: 'bold',
  },
  section: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    paddingTop: 0,
    paddingBottom: 0,
  },
  listItemAvatar: {
    marginRight: theme.spacing(2),
  },
  avatar: {
    height: 60,
    width: 60,
  },
  secondaryAvatar: {
    height: 40,
    width: 40,
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
    <div className={clsx(classes.root, className)} {...rest}>
      <Parallax backgroundImage={cover}>
        <div className={classes.sectionWrapper}>
          <Section className={classes.section}>
            <>
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
              <Grid container>
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
            </>
          </Section>
        </div>
      </Parallax>
    </div>
  );
};

export default Hero;
