import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import Item from '../Item';

const useStyles = makeStyles((theme) => ({
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

const CategoryCard = ({ category, data, icon }) => {
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
            {category}
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          {data
            .filter(({ category: _catg }) => _catg === category)
            .map((item, index) => (
              <Item key={index} data={item} />
            ))}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default CategoryCard;
