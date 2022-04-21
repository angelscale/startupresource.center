import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import {
  useMediaQuery,
  Grid,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import { SectionHeader } from 'components/molecules';
import { red } from '@mui/material/colors';

import { toast } from 'react-toastify';

// request
import { sendMail } from 'utils/request';

// assets
import LoaderGif from 'assets/images/loader.gif';

const useStyles = makeStyles((theme) => ({
  form: {
    maxWidth: 550,
    margin: `0 auto`,
    '& .MuiTextField-root': {
      background: theme.palette.background.paper,
    },
    '& .MuiOutlinedInput-input': {
      background: theme.palette.background.paper,
    },
  },
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1),
  },
  errorText: {
    color: red[500],
  },
  btn: {
    transition: 'all .25s ease',
  },
}));

const Form = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  // state
  const [formData, setFormData] = useState({
    name: { value: '', isError: false },
    email: { value: '', isError: false },
    message: { value: '', isError: false },
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (
      formData.name.value === '' ||
      formData.email.value === '' ||
      formData.message.value === ''
    ) {
      setFormData({
        name: {
          ...formData.name,
          isError: formData.name.value === '',
        },
        email: {
          ...formData.email,
          isError: formData.email.value === '',
        },
        message: {
          ...formData.message,
          isError: formData.message.value === '',
        },
      });
    } else {
      setLoading(true);
      let data = {
        from: formData.email.value,
        to: 'shahroonfarooqi@gmail.com',
        subject: `Request from ${formData.name.value}`,
        text: formData.message.value,
      };

      sendMail(data)
        .then((res) => {
          console.log(res);
          toast.success('request submitted!');
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          toast.error('request not submitted');
          setLoading(false);
        });
    }
  };

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title="Contact SRC"
        // subtitle="Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world. Keep track of what's happening with your data, change permissions."
        subtitleProps={{
          variant: 'body1',
          color: 'textPrimary',
        }}
        data-aos="fade-up"
        align={isMd ? 'center' : 'left'}
      />
      <div className={classes.form}>
        <Grid container spacing={isMd ? 4 : 2}>
          <Grid item xs={12} data-aos="fade-up">
            <Typography
              variant="subtitle1"
              color="textPrimary"
              className={classes.inputTitle}
            >
              Full name
            </Typography>
            <TextField
              placeholder="Your full name"
              variant="outlined"
              size="medium"
              name="fullname"
              fullWidth
              type="text"
              value={formData.name.value}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  name: {
                    value: e.target.value,
                    isError: false,
                  },
                });
              }}
            />
            {formData.name.isError && (
              <Typography variant="caption" className={classes.errorText}>
                Please enter your name.
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} data-aos="fade-up">
            <Typography
              variant="subtitle1"
              color="textPrimary"
              className={classes.inputTitle}
            >
              E-mail
            </Typography>
            <TextField
              placeholder="Your e-mail address"
              variant="outlined"
              size="medium"
              name="email"
              fullWidth
              type="email"
              value={formData.email.value}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  email: {
                    value: e.target.value,
                    isError: false,
                  },
                });
              }}
            />
            {formData.email.isError && (
              <Typography variant="caption" className={classes.errorText}>
                Please enter your valid email.
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} data-aos="fade-up">
            <Typography
              variant="subtitle1"
              color="textPrimary"
              className={classes.inputTitle}
            >
              Message
            </Typography>
            <TextField
              placeholder="Your question about our services"
              variant="outlined"
              name="message"
              fullWidth
              multiline
              rows={4}
              value={formData.message.value}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  message: {
                    value: e.target.value,
                    isError: false,
                  },
                });
              }}
            />
            {formData.message.isError && (
              <Typography variant="caption" className={classes.errorText}>
                Please enter your message.
              </Typography>
            )}
          </Grid>
          <Grid item container justifyContent="center" xs={12}>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              size="large"
              className={classes.btn}
              onClick={handleSubmit}
            >
              {!loading ? 'submit' : 'submitting...'}
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

Form.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Form;
