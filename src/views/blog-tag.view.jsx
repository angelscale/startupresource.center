import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import VerticalCard from 'components/VerticalCard/vertical-card.component';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    padding: theme.spacing(2, 2),
  },
}));

const BlogTagView = ({ data }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        {data.allGhostPost.edges.map((post, index) => (
          <Grid key={index} item xs={12} md={4}>
            <VerticalCard key={index} item={post.node} index={index} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BlogTagView;
