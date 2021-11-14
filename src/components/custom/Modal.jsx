import * as React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Icon, Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';

import {
  Grid,
  Button,
  Typography,
  Modal,
  Fade,
  Box,
  Backdrop,
  useMediaQuery,
} from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(() => ({
  image: {
    maxWidth: 420,
    objectFit: 'cover',
  },
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
};

const iconStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  cursor: 'pointer',
  zIndex: 99,
};

const DetailModal = ({ open, setOpen, content }) => {
  const handleClose = () => setOpen(false);

  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style} className="modal__wrapper">
            <span style={iconStyle} onClick={handleClose}>
              <CloseIcon />
            </span>
            <Grid
              container
              justifyContent="space-between"
              spacing={isMd ? 4 : 2}
              direction={isMd ? 'row-reverse' : 'column-reverse'}
            >
              <Grid
                item
                container
                alignItems="center"
                justifyContent="flex-start"
                xs={12}
                md={6}
                data-aos={'fade-in'}
              >
                <div>
                  <SectionHeader
                    title={content?.authorName}
                    subtitle={content?.bioOne}
                    align="left"
                    disableGutter
                    whitespace
                    subtitleProps={{
                      color: 'textPrimary',
                      variant: 'body1',
                    }}
                  />
                </div>
                <div>
                  <SectionHeader
                    // title="Our story"
                    subtitle={content?.bioTwo}
                    align="left"
                    disableGutter
                    whitespace
                    subtitleProps={{
                      color: 'textPrimary',
                      variant: 'body1',
                    }}
                  />
                </div>
              </Grid>
              <Grid
                item
                container
                justifyContent={isMd ? 'flex-start' : 'center'}
                alignItems="flex-start"
                xs={12}
                md={6}
                data-aos={'fade-in'}
              >
                <Image
                  src="https://assets.maccarianagency.com/the-front/illustrations/working-on-sofa.svg"
                  src={content?.authorPhoto?.src}
                  alt="Our story"
                  className={classes.image}
                  lazy={false}
                />
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default DetailModal;
