import React from 'react';
import { Button, styled } from '@mui/material';
import { LearnMoreLink, Section, SectionHeader } from 'components';

const PREFIX = 'ServerError';

const classes = {
  formContainer: `${PREFIX}-formContainer`,
  section: `${PREFIX}-section`,
  label: `${PREFIX}-label`
};

const Root = styled('div')((
  {
    theme
  }
) => ({
  [`& .${classes.formContainer}`]: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: `calc(100vh - ${theme.mixins.toolbar['@media (min-width:600px)'].minHeight}px)`,
    maxWidth: 500,
    margin: `0 auto`,
  },

  [`& .${classes.section}`]: {
    paddingTop: 0,
    paddingBottom: 0,
  },

  [`& .${classes.label}`]: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
}));

const ServerError = ({ pageContext: { code } }) => {


  const handleClick = () => {
    window.history.back();
  };

  const status = {
    400: {
      title: 'Bad Request',
      subtitle:
        'There seems to be something wrong with your request.  If you feel this is an error please',
      link: {
        title: 'let us know',
        href: '/contact',
      },
    },
    401: {
      title: 'Unauthorized',
      subtitle:
        'You do not have permission to view this document.  If you feel this is an error please',
      link: {
        title: 'let us know',
        href: '/contact',
      },
    },
    403: {
      title: 'Forbidden',
      subtitle:
        'You do not have permission to view this document.  If you feel this is an error please',
      link: {
        title: 'let us know',
        href: '/contact',
      },
    },
    404: {
      title: 'Not Found',
      subtitle:
        'That document was not found.  If you feel this is an error please',
      link: {
        title: 'let us know',
        href: '/contact',
      },
    },
    500: {
      title: 'Internal Server Error',
      subtitle: 'We are having problems right now.  Please try again later, or',
      link: {
        title: 'contact us',
        href: '/contact',
      },
    },
  };

  return (
    <Root>
      <Section className={classes.section}>
        <div className={classes.formContainer}>
          <SectionHeader
            label={code}
            title={status[Number(code)].title}
            subtitle={
              <span>
                {status[code].subtitle}{' '}
                <LearnMoreLink
                  title={status[code].link.title}
                  href={status[code].link.href}
                  typographyProps={{ variant: 'h6' }}
                />
              </span>
            }
            titleProps={{
              variant: 'h3',
            }}
            labelProps={{
              color: 'secondary',
              className: classes.label,
              variant: 'h5',
            }}
            ctaGroup={[
              <Button
                size="large"
                variant="contained"
                color="primary"
                onClick={handleClick}
              >
                Go Back
              </Button>,
            ]}
            disableGutter
          />
        </div>
      </Section>
    </Root>
  );
};

export default ServerError;
