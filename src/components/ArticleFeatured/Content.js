import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
  avatar: {
    marginRight: theme.spacing(1),
  },
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  list: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  tag: {
    padding: theme.spacing(1 / 2, 1),
    borderRadius: theme.spacing(1 / 2),
    background: theme.palette.secondary.light,
    color: 'white',
    margin: theme.spacing(0, 1, 1, 0),
    cursor: 'pointer',
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(0, 2, 2, 0),
    },
  },
}));

const Content = ({ author, date, subtitle, tags, title }) => {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <Typography variant="h5" color="textPrimary" gutterBottom>
        {title}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        {subtitle}
      </Typography>
      <div className={classes.tags}>
        {tags.map((item, index) => (
          <Typography
            variant="caption"
            color="primary"
            className={classes.tag}
            key={index}
          >
            {item}
          </Typography>
        ))}
      </div>
      <div style={{ flexGrow: 1 }} />
      <Divider className={classes.divider} />
      <div className={classes.list}>
        <div className={classes.avatarContainer}>
          <Avatar {...author.photo} className={classes.avatar} />
          <Typography variant="body2" color="textPrimary">
            {author.name}
          </Typography>
        </div>
        <Typography variant="overline" color="textSecondary">
          {date}
        </Typography>
      </div>
    </div>
  );
};

export default Content;
