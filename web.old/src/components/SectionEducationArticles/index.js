import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import makeStyles from '@mui/styles/makeStyles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import EducationArticleCard from 'components/EducationArticleCard';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {
  Create,
  DeviceHub,
  FlightTakeoff,
  TrendingUp,
} from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('lg')]: {
      margin: '0 auto',
    },
  },
  accordion: {
    border: 0,
    boxShadow: 'none',
    justifyContent: 'center',
  },
  categoryTitle: {
    cursor: 'pointer',
    fontWeight: 700,
  },
  circle: {
    background: theme.palette.primary.main,
    cursor: 'pointer',
    marginRight: theme.spacing(1),
  },
  details: {
    '&> div': {
      display: 'block',
    },
  },
  titleContainer: {
    marginBottom: theme.spacing(2),
    '& svg': {
      color: 'white',
      margin: theme.spacing(1),
    },
  },
}));

const ArticleByCategory = ({ cat, data, icon }) => {
  const classes = useStyles();

  return (
    <Accordion className={classes.accordion}>
      <AccordionSummary className={classes.details}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          className={classes.titleContainer}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="50%"
            className={classes.circle}
          >
            {icon}
          </Box>
          <Typography
            variant="h6"
            align="center"
            className={classes.categoryTitle}
          >
            {cat}
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          {data
            .filter(({ category }) => category === cat)
            .map((item, index) => (
              <EducationArticleCard key={index} data={item} />
            ))}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

const SectionEducationArticles = (props) => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={6} lg={3} data-aos="fade-up">
          <ArticleByCategory
            cat="Plan"
            data={data}
            icon={<Create fontSize="large" />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3} data-aos="fade-up">
          <ArticleByCategory
            cat="Launch"
            data={data}
            icon={<FlightTakeoff fontSize="large" />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3} data-aos="fade-up">
          <ArticleByCategory
            cat="Manage"
            data={data}
            icon={<DeviceHub fontSize="large" />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3} data-aos="fade-up">
          <ArticleByCategory
            cat="Grow"
            data={data}
            icon={<TrendingUp fontSize="large" />}
          />
        </Grid>
      </Grid>
    </div>
  );
};

SectionEducationArticles.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default SectionEducationArticles;
