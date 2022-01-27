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
}));

const Content = ({ author, date, subtitle, title }) => {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <Typography variant="h6" color="textPrimary" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {subtitle}
      </Typography>
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
