const path = require('path');
const fetch = require(`node-fetch`)
const crypto = require('crypto');

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  // get data
  const result = await fetch(`http://localhost:5000/api/grants`)
  const { data, size } = await result.json()

  data.map((grant) => {
    const grantNode = {
      // Required fields
      id: grant._id,
      parent: `__SOURCE__`,
      internal: {
        type: `Grants`,
      },
      children: [],
      title: grant.title,
      postedDate: grant.postedDate,
      agencyName: grant.agencyName,
      image: grant.image,
      category: grant.category,
      cfda: grant.cfda,
      matchingRequired: grant.matchingRequired,
      dateDue: grant.dateDue,
      totalFunding: grant.totalFunding,
      awardCeiling: grant.awardCeiling,
      awardFloor: grant.awardFloor,
      applicants: grant.applicants,
      eligibilityapplicants: grant.eligibilityapplicants,
      informationEligibility: grant.informationEligibility,
      opportunityNumber: grant.opportunityNumber,
      agencyDescription: grant.agencyDescription,
      agencyContact: grant.agencyContact
    }
    // Get content digest of node. (Required field)
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(grantNode))
      .digest(`hex`);
    // add it to userNode
    grantNode.internal.contentDigest = contentDigest;

    // Create node with the gatsby createNode() API
    createNode(grantNode);
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve('src/templates/post.jsx');

    resolve(
      graphql(
        `
        query grantsDetails{
          allGrants {
            edges {
              node {
                agencyContact
                agencyDescription
                agencyName
                applicants
                awardCeiling
                awardFloor
                category
                cfda
                dateDue
                eligibilityapplicants
                id
                image
                informationEligibility
                matchingRequired
                opportunityNumber
                postedDate
                title
              }
            }
          }
        }        
    `
      ).then(result => {
        if (result.errors) {
          return reject(result.errors);
        }

        const grants = result.data.allGrants.edges;

        //create detail of grants
        grants.forEach(({ node }, index) => {
          const prev = index === 0 ? null : grants[index - 1].node;
          const next =
            index === grants.length - 1 ? null : grants[index + 1].node;
          createPage({
            path: `/grant/${node.id}/`,
            component: postTemplate,
            context: {
              grant: { ...node },
              prev,
              next,
            },
          });
        });
      })
    );
  });
};

/* Allows named imports */
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};
