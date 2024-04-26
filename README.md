## # Breadcrumb with SEO [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Implement breadcrumbs with SEO benefits for enhanced navigation and search engine visibility.

## Description

This breadcrumb package seamlessly integrates with search engine optimization (SEO) strategies through structured schema implementation. By leveraging schema markup, it enhances a website's technical configuration, content relevance, and link popularity, resulting in improved visibility and accessibility in search engine results.

### SEO Benefits

Breadcrumbs provided by this package not only enhance user experience by offering clear navigation paths but also deliver substantial SEO advantages. Search engines like Google utilize breadcrumbs, along with schema markup, to better comprehend website structures. This comprehensive understanding leads to enhanced indexing, increased visibility in search results, and improved rankings. Additionally, breadcrumbs aided by schema markup assist users and search engines in identifying page relationships, contributing to a more organized and accessible website.

## Installation

To install the package, use npm:

```bash
npm install breadcrumbs-seo
```

## Usage

```bash
const breadcrumbItems = [
  {
    title: "Videos",
    link: "/videos",
    colorDisable: false
  },
  {
    title: "(eg: video title - Create Html file on the vs code for the first time)",
    link: "/videoId",
    colorDisable: false
  }
];
```

Import the BreadcrumbSeo component from the package and use it with your breadcrumbItems array in any component where you want to display breadcrumbs:

```bash
import { BreadcrumbSeo } from "breadcrumbs-seo";

// In your component JSX
<>
  <BreadcrumbSeo items={breadcrumbItems} />
</>
```
