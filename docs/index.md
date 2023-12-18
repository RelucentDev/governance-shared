# Governance & Standards

## 1. General

### 1.1. The Twelve Factor App

The principles set out by the [Twelve Factor App](https://12factor.net/) are a
great starting point for building modern, scalable, maintainable applications.

### 1.2. OWASP Top 10

The [OWASP Top 10](https://owasp.org/www-project-top-ten/) is a great starting
point for understanding the most common security risks in web applications.

### 1.3. SANS Top 25

The [SANS Top 25](https://www.sans.org/top25-software-errors/) is a great
starting point for understanding the most common software errors.

### 1.4. Directory Structure

See [this StackExchange answer](https://softwareengineering.stackexchange.com/a/392461).

### 1.5. Scripts (`package.json`, `composer.json`, etc.)

We use an aliasing convention for scripts in `package.json` and `composer.json`
files. This allows us to use the same script names across projects, and to
quickly identify the purpose of each script.

```jsonc
{
  "scripts": {
    // use `lint` as an alias for linting scripts
    "lint": "npm-run-all prettier",

    // use `lint:dev` as an alias for linting scripts in development
    "lint:dev": "npm-run-all prettier:dev",

    // use `prettier` as an alias for running prettier in check mode
    "prettier": "prettier --check .",

    // use `prettier:dev` as an alias for running prettier in write mode
    "prettier:dev": "prettier --write .",

    // using naming a naming convention in the format of
    "action:environment": "command",

    // and using aliasing to create a shorthands for lifecycle scripts
    "build:environment": "npm-run-all action:environment"
  }
}
```

### 1.6. `ACKNOWLEDGEMENTS.md`

We include an `ACKNOWLEDGEMENTS.md` file in the root of each project to
acknowledge the contributions of others, and to provide a list of sources of
inspiration and guidance.

```markdown
# Acknowledgements

## Sources

- [general source][] for a reason.

[general source]: https://example.com

### Source Categorisation

- [another source][] for another reason.

[another source]: https://example.com

## Resources

- [general resource][] for a reason.

[general resource]: https://example.com

### Resource Categorisation

- [another resource][] for another reason.

[another resource]: https://example.com
```

### 1.7. File Signature Comments

Supporting clear project authorship, we include file signature comments where
possible to help identify the project, file, and authorship.

We use the following templates when structuring the comments:

```js
/**
 * Project Name.
 *
 * @since     x.x.x
 * @copyright 2023 Author/Owner
 * @author    Author <hello@example.com>
 * @see       https://example.com
 */
```

```css
/*! Project Name | (c) 2023 Author/Owner | https://example.com */
```

```bash
# Project Name.
# (c) 2023 Author/Owner
# https://example.com
```

```html
<!-- Project Name | (c) 2023 Author/Owner | https://example.com -->
```

## 2. Testing

### 2.1. JavaScript Testing Best Practices

The guidance of [`goldbergyoni/javascript-testing-best-practices`](https://github.com/goldbergyoni/javascript-testing-best-practices)
sets out a general style and convention for testing JavaScript code. This
includes naming conventions, categorisation of tests, and certain stylistic
patterns.

## 3. Infrastructure as Code

### 3.1. Google Cloud Platform's Terraform Best Practices Guide

[GCP's Terraform guide](https://cloud.google.com/docs/terraform/best-practices-for-terraform)
for effective use of Terraform. GCP's guidance sets out a general style and
convention for resource naming, module structure, and variable use, in addition
to additional GCP-specific guidance.
