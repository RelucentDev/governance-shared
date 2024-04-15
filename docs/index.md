# Governance & Standards

## 1. General

### 1.1. The Twelve Factor App

The principles set out by the [Twelve Factor App](https://12factor.net/) are a
great starting point for building modern, scalable, maintainable applications.

### 1.2. Scripts (`package.json`, `composer.json`, etc.)

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
    "build:environment": "npm-run-all action:environment",
  },
}
```

As a quick reference, the naming follows the format of `<Task>(:<Scope>)*`
where, unless inferred by the alias's naming (like in the case of `build`) the
base alias (such as `lint`) should not write or fix anything, and should only
check for errors.
