import React from 'react';

import { Grid, Modal, Fade, Box, Backdrop, useMediaQuery, styled, useTheme } from '@mui/material';

import { SectionHeader, Image } from 'components';

// icon
import CloseIcon from '@mui/icons-material/Close';

const PREFIX = 'DetailModal';

const classes = {
  image: `${PREFIX}-image`,
  content: `${PREFIX}-content`
};

const Root = styled('div')((
  {
    theme
  }
) => ({
  [`& .${classes.image}`]: {
    maxWidth: 420,
    objectFit: 'cover',
  },

  [`& .${classes.content}`]: {
    padding: 16,
    [theme.breakpoints.up('sm')]: {
      padding: 0,
    },
  }
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  // boxShadow: 24,
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



  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Root>
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
              // spacing={isMd ? 4 : 2}
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
                className={classes.content}
              >
                <div>
                  <SectionHeader
                    title={content?.authorName || 'Author'}
                    subtitle={
                      <>
                        <div>{content?.bioOne}</div>
                        <br />
                        <div>{content?.bioTwo}</div>
                      </>
                    }
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
                  src={content?.authorPhoto?.src || 'loader.gif'}
                  alt="Our story"
                  className={classes.image}
                  lazy={false}
                />
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </Root>
  );
};

export default DetailModal;
