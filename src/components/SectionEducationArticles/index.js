import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import EducationArticleCard from 'components/EducationArticleCard';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import {
  Create,
  DeviceHub,
  FlightTakeoff,
  TrendingUp,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
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
