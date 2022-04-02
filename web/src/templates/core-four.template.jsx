// import React from 'react';
// import makeStyles from '@mui/styles/makeStyles';
// import { graphql } from 'gatsby';
// import { GatsbyImage, getImage } from 'gatsby-plugin-image';
// import { Typography } from '@mui/material';

// // components
// import { Breadcrumb } from 'components';

// const useStyles = makeStyles((theme) => ({
//   root: {},
//   content: {
//     padding: theme.spacing(4, 2),
//     // background: '#f2f2f2',
//   },
//   container: {
//     margin: '0 auto',
//     maxWidth: theme.layout.contentWidth,
//   },
// }));

// const CoreFourTemplate = ({ data, location }) => {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Breadcrumb location={location} />

//       <div className={classes.container}>
//         {data.allProducts.nodes.each((node) => (
//           <div key={node.name} className={classes.product}>
//             <GatsbyImage image={getImage(node.logoImage)} alt={node.name} />
//             <Typography variant="h1">{node.name}</Typography>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CoreFourTemplate;

// export const postQuery = graphql`
//   query ($id: String!) {
//     allProducts(filter: { category: { eq: $category } }) {
//       nodes {
//         name
//         logoImage {
//           childImageSharp {
//             gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
//           }
//         }
//       }
//     }
//   }
// `;
