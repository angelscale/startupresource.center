import React from 'react';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(() => ({
  image: {
    maxWidth: 560,
  },
}));

const WorkWithus = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
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
              //   subtitle="Send one-off and automated email, push, and in-app messages to people. Create better stories. Send one-off and automated email, push, and in-app messages to people. Create better stories."
              align="left"
              disableGutter
              subtitleProps={{
                color: 'textPrimary',
                variant: 'body1',
              }}
              ctaGroup={[
                <Button
                  color="primary"
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/about-us/src-consulting')}
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
    </div>
  );
};

WorkWithus.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default WorkWithus;
