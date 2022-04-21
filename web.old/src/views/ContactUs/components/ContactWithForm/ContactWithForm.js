import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@mui/styles/makeStyles';
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from '@mui/material';
import { SectionHeader } from 'components/molecules';
import { LeftRightContainer } from 'components/custom';

import Form from '../Form';

const useStyles = makeStyles(() => ({
  map: {
    zIndex: 9,
  },
  icon: {
    background: 'transparent',
    borderRadius: 0,
  },
}));

const ContactWithForm = (props) => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <LeftRightContainer
        leftSide={
          <div>
            <SectionHeader
              title="Contact details"
              subtitle="At Angel-Scale, we’re always here to support your business journey. Fill out the form below and someone will get back to you ASAP!"
              subtitleProps={{
                variant: 'body1',
                color: 'textPrimary',
              }}
              data-aos="fade-up"
              align="left"
            />
            <List disablePadding>
              <ListItem disableGutters data-aos="fade-up">
                <ListItemAvatar>
                  <Avatar
                    src="https://assets.maccarianagency.com/the-front/illustrations/contact-icon-mail.png"
                    srcSet="https://assets.maccarianagency.com/the-front/illustrations/contact-icon-mail@2x.png 2x"
                    className={classes.icon}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Email"
                  secondary="contact@startupresource.center"
                  primaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textSecondary',
                  }}
                  secondaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textPrimary',
                  }}
                />
              </ListItem>
            </List>
          </div>
        }
        rightSide={<Form />}
      />
    </div>
  );
};

ContactWithForm.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default ContactWithForm;
