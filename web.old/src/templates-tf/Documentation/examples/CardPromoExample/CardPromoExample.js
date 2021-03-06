import React from 'react';
import { Box, colors, Grid } from '@mui/material';
import { Headline, CodeHighlighter, PropsHighlighter, SectionBox } from '../../components';
import { CardPromo } from 'components/organisms';

const importCodeString = `
import { CardPromo } from 'components/organisms';
// or
import CardPromo from 'components/organisms/CardPromo';
`;

const dataProperties = [{
  name: 'color',
  type: 'enum',
  default: '',
  description: 'Promo icon color to show inside the card. One of: colors.red, colors.pink, colors.purple, colors.deepPurple, colors.indigo, colors.blue, colors.lightBlue, colors.cyan, colors.teal, colors.green, colors.lightGreen, colors.lime, colors.yellow, colors.amber, colors.orange, colors.deepOrange, colors.brown, colors.grey, colors.blueGrey',
}, {
  name: 'title',
  type: 'string',
  default: '',
  description: 'Promo title to show inside the card',
}, {
  name: 'align',
  type: 'enum',
  default: 'left',
  description: 'The content alignment. One of: left, right, center',
}, {
  name: 'description',
  type: 'string',
  default: '',
  description: 'Promo description to show inside the card',
}, {
  name: 'descriptionProps',
  type: 'object',
  default: '',
  description: 'Additional props to pass to the desciption Typography component',
}, {
  name: 'fontIconClass',
  type: 'string',
  default: '',
  description: 'Promo font icon class name to show inside the card',
}, {
  name: 'iconAlternateProps',
  type: 'object',
  default: '',
  description: 'Additional props to pass to the IconAlternate component',
}, {
  name: 'subtitle',
  type: 'string',
  default: '',
  description: 'Promo subtitle to show inside the card',
}, {
  name: 'subtitleProps',
  type: 'object',
  default: '',
  description: 'Additional props to pass to the subtitle Typography component',
}, {
  name: 'titleColor',
  type: 'string',
  default: '',
  description: 'Title color',
}, {
  name: 'titleProps',
  type: 'object',
  default: '',
  description: 'Additional props to pass to the title Typography component',
}, {
  name: 'className',
  type: 'string',
  default: '',
  description: 'External classes',
}];

const exampleCode1 = `
import React from 'react';
import { Box, Grid, colors } from '@mui/material';
import { CardPromo } from 'components/organisms';

export default function Example() {
  return (
    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">

    </Box>
  );
}
`;

const exampleCode2 = `
import React from 'react';
import { Box, Grid, colors } from '@mui/material';
import { CardPromo } from 'components/organisms';

export default function Example() {
  return (
    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CardPromo
            title="1000+"
            subtitle="Online Courses"
            description="Choose from over 1000+ online video courses."
            fontIconClass="fas fa-pen-nib"
            color={colors.pink}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={4}>
          <CardPromo
            title="800+"
            subtitle="Online Courses"
            description="Choose from over 1000+ online video courses."
            fontIconClass="fas fa-book-open"
            color={colors.purple}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={4}>
          <CardPromo
            title="100K+"
            subtitle="Online Courses"
            description="Choose from over 1000+ online video courses."
            fontIconClass="fas fa-camera-retro"
            color={colors.blue}
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
`;

const exampleCode3 = `
import React from 'react';
import { Box, Grid, colors } from '@mui/material';
import { CardPromo } from 'components/organisms';

export default function Example() {
  return (
    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CardPromo
            title="1000+"
            subtitle="Online Courses"
            description="Choose from over 1000+ online video courses."
            fontIconClass="fas fa-pen-nib"
            color={colors.pink}
            withShadow
            liftUp
          />
        </Grid>
        <Grid item xs={4}>
          <CardPromo
            title="800+"
            subtitle="Online Courses"
            description="Choose from over 1000+ online video courses."
            fontIconClass="fas fa-book-open"
            color={colors.purple}
            withShadow
            liftUp
          />
        </Grid>
        <Grid item xs={4}>
          <CardPromo
            title="100K+"
            subtitle="Online Courses"
            description="Choose from over 1000+ online video courses."
            fontIconClass="fas fa-camera-retro"
            color={colors.blue}
            withShadow
            liftUp
          />
        </Grid>
      </Grid>
    </Box>
  );
}
`;

const exampleCode4 = `
import React from 'react';
import { Box, Grid, colors } from '@mui/material';
import { CardPromo } from 'components/organisms';

export default function Example() {
  return (
    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CardPromo
            title="1000+"
            subtitle="Online Courses"
            description="Choose from over 1000+ online video courses."
            fontIconClass="fas fa-pen-nib"
            color={colors.pink}
            withShadow
            liftUp
            align="center"
          />
        </Grid>
        <Grid item xs={4}>
          <CardPromo
            title="800+"
            subtitle="Online Courses"
            description="Choose from over 1000+ online video courses."
            fontIconClass="fas fa-book-open"
            color={colors.purple}
            withShadow
            liftUp
            align="center"
          />
        </Grid>
        <Grid item xs={4}>
          <CardPromo
            title="100K+"
            subtitle="Online Courses"
            description="Choose from over 1000+ online video courses."
            fontIconClass="fas fa-camera-retro"
            color={colors.blue}
            withShadow
            liftUp
            align="center"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
`;

const CardPromoExample = ({ ...rest }) => (
  <div {...rest}>
    <SectionBox title="Description" gutterBottom>
      <Headline
        title="CardPromo"
        path="src/components/organisms/CardPromo/CardPromo.js"
        description="Component to display the promo card"
      />
    </SectionBox>
    <SectionBox title="Import" gutterBottom>
      <CodeHighlighter code={importCodeString} />
    </SectionBox>
    <SectionBox title="Props & Methods" gutterBottom>
      <PropsHighlighter dataProperties={dataProperties} />
    </SectionBox>
    <SectionBox title="Basic Example" gutterBottom>
      <>
        <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px" overflow="auto">
          <Box display="flex" justifyContent="space-around" alignItems="center" minWidth="700px">
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <CardPromo
                  title="1000+"
                  subtitle="Online Courses"
                  description="Choose from over 1000+ online video courses."
                  fontIconClass="fas fa-pen-nib"
                  color={colors.pink}
                />
              </Grid>
              <Grid item xs={4}>
                <CardPromo
                  title="800+"
                  subtitle="Online Courses"
                  description="Choose from over 1000+ online video courses."
                  fontIconClass="fas fa-book-open"
                  color={colors.purple}
                />
              </Grid>
              <Grid item xs={4}>
                <CardPromo
                  title="100K+"
                  subtitle="Online Courses"
                  description="Choose from over 1000+ online video courses."
                  fontIconClass="fas fa-camera-retro"
                  color={colors.blue}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <CodeHighlighter code={exampleCode1} />
      </>
    </SectionBox>
    <SectionBox title="Outlined Effect" gutterBottom>
      <>
        <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px" overflow="auto">
          <Box display="flex" justifyContent="space-around" alignItems="center" minWidth="700px">
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <CardPromo
                  title="1000+"
                  subtitle="Online Courses"
                  description="Choose from over 1000+ online video courses."
                  fontIconClass="fas fa-pen-nib"
                  color={colors.pink}
                  variant="outlined"
                  withShadow
                  liftUp
                />
              </Grid>
              <Grid item xs={4}>
                <CardPromo
                  title="800+"
                  subtitle="Online Courses"
                  description="Choose from over 1000+ online video courses."
                  fontIconClass="fas fa-book-open"
                  color={colors.purple}
                  variant="outlined"
                  withShadow
                  liftUp
                />
              </Grid>
              <Grid item xs={4}>
                <CardPromo
                  title="100K+"
                  subtitle="Online Courses"
                  description="Choose from over 1000+ online video courses."
                  fontIconClass="fas fa-camera-retro"
                  color={colors.blue}
                  variant="outlined"
                  withShadow
                  liftUp
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <CodeHighlighter code={exampleCode2} />
      </>
    </SectionBox>
    <SectionBox title="Custom Shadow and LiftUp Effect" gutterBottom>
      <>
        <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px" overflow="auto">
          <Box display="flex" justifyContent="space-around" alignItems="center" minWidth="700px">
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <CardPromo
                  title="1000+"
                  subtitle="Online Courses"
                  description="Choose from over 1000+ online video courses."
                  fontIconClass="fas fa-pen-nib"
                  color={colors.pink}
                />
              </Grid>
              <Grid item xs={4}>
                <CardPromo
                  title="800+"
                  subtitle="Online Courses"
                  description="Choose from over 1000+ online video courses."
                  fontIconClass="fas fa-book-open"
                  color={colors.purple}
                />
              </Grid>
              <Grid item xs={4}>
                <CardPromo
                  title="100K+"
                  subtitle="Online Courses"
                  description="Choose from over 1000+ online video courses."
                  fontIconClass="fas fa-camera-retro"
                  color={colors.blue}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <CodeHighlighter code={exampleCode3} />
      </>
    </SectionBox>
    <SectionBox title="Center Aligned" gutterBottom>
      <>
        <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px" overflow="auto">
          <Box display="flex" justifyContent="space-around" alignItems="center" minWidth="700px">
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <CardPromo
                  title="1000+"
                  subtitle="Online Courses"
                  description="Choose from over 1000+ online video courses."
                  fontIconClass="fas fa-pen-nib"
                  color={colors.pink}
                  withShadow
                  liftUp
                  align="center"
                />
              </Grid>
              <Grid item xs={4}>
                <CardPromo
                  title="800+"
                  subtitle="Online Courses"
                  description="Choose from over 1000+ online video courses."
                  fontIconClass="fas fa-book-open"
                  color={colors.purple}
                  withShadow
                  liftUp
                  align="center"
                />
              </Grid>
              <Grid item xs={4}>
                <CardPromo
                  title="100K+"
                  subtitle="Online Courses"
                  description="Choose from over 1000+ online video courses."
                  fontIconClass="fas fa-camera-retro"
                  color={colors.blue}
                  withShadow
                  liftUp
                  align="center"
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <CodeHighlighter code={exampleCode4} />
      </>
    </SectionBox>
  </div>
);

export default CardPromoExample;
