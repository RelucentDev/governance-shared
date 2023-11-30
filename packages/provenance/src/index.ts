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
  /**
   * Company Name.
   *
   * @since 1.0.0
   */
  name: "Relucent",

  /**
   * Company Legal Name.
   *
   * @since 1.0.0
   */
  legalName: "Relucent Ltd",

  /**
   * Main Contact Email Address.
   *
   * @since 1.0.0
   */
  emailAddress: "hello@relucent.dev",

  /**
   * Main Contact Telephone Number.
   */
  telephoneNumber: "+447470917011",

  /**
   * Company Registration Number.
   *
   * @since 1.0.0
   */
  crn: {
    number: "13663511",
    get url() {
      return `https://find-and-update.company-information.service.gov.uk/company/${this.number}`;
    },
  },

  /**
   * Company VAT Registration Number.
   */
  vrn: {
    number: "447608178",
    get global() {
      return `GB${this.number}`;
    },
  },

  /**
   * Company Website.
   *
   * @since 1.0.0
   */
  website: {
    url: "https://relucent.dev",
  },

  /**
   * Company GitHub Profile.
   *
   * @since 1.0.0
   */
  github: {
    profile: "relucentdev",
    get url() {
      return `https://github.com/${this.profile}`;
    },
  },

  /**
   * Company Facebook Profile.
   *
   * @since 1.0.0
   */
  facebook: {
    profile: "relucent.dev",
    get url() {
      return `https://www.facebook.com/${this.profile}`;
    },
  },

  /**
   * Company Instagram Profile.
   *
   * @since 1.0.0
   */
  instagram: {
    profile: "relucent.dev",
    get url() {
      return `https://www.instagram.com/${this.profile}`;
    },
  },

  /**
   * Company LinkedIn Profile.
   *
   * @since 1.0.0
   */
  linkedin: {
    profile: "company/relucent",
    get url() {
      return `https://www.linkedin.com/${this.profile}`;
    },
  },

  /**
   * Company NPM Profile.
   *
   * @since 1.0.0
   */
  npm: {
    profile: "relucent.dev",
    get url() {
      return `https://www.npmjs.com/org/${this.profile}`;
    },
  },
};
