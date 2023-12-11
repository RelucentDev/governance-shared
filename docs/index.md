# Governance & Standards

## 1. General

### 1.1. The Twelve Factor App

The principles set out by the [Twelve Factor App](https://12factor.net/) are a
great starting point for building modern, scalable, maintainable applications.

### 1.2 - Directory Structure

See [this StackExchange answer](https://softwareengineering.stackexchange.com/a/392461).

### 1.3. File Signature Comments

Supporting clear project authorship, we include file signature comments where
possible to help identify the project, file, and authorship.

We use the following templates when structuring the comments:

```js
/**
 * Project Name.
 *
 * @since     0.0.0
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
for effective use of Terraform. GCP's guidance sets out a general style and convention for resource naming,
module structure, and variable use, in addition to additional GCP-specific
guidance.
