
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['aZAgJeRHVephAZyv4qN8vz'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  