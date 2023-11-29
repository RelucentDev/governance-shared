/**
 * Relucent Governance.
 *
 * @since     1.0.0
 * @module    Relucent\Governance
 * @copyright 2023 Relucent Ltd
 * @author    Relucent Ltd <hello@relucent.dev>
 * @see       https://relucent.dev
 */

module.exports = {
  name: "Relucent",
  legalName: "Relucent Ltd",
  emailAddress: "hello@relucent.dev",
  telephoneNumber: "+447470917011",
  website: {
    url: "https://relucent.dev",
  },
  github: {
    profile: "relucentdev",
    get url() {
      return `https://github.com/${this.profile}`;
    },
  },
  facebook: {
    profile: "relucent.dev",
    get url() {
      return `https://www.facebook.com/${this.profile}`;
    },
  },
  instagram: {
    profile: "relucent.dev",
    get url() {
      return `https://www.instagram.com/${this.profile}`;
    },
  },
  linkedin: {
    profile: "company/relucent",
    get url() {
      return `https://www.linkedin.com/${this.profile}`;
    },
  },
  npm: {
    profile: "relucent.dev",
    get url() {
      return `https://www.npmjs.com/org/${this.profile}`;
    },
  },
  crn: {
    number: "13663511",
    get url() {
      return `https://find-and-update.company-information.service.gov.uk/company/${this.number}`;
    },
  },
  vrn: {
    number: "447608178",
    get global() {
      return `GB${this.number}`;
    },
  },
};
