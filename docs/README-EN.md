<div align="center">
  <img src="../image/logo.svg" alt="Split Lines Logo" width="220"/>
  <h1>Split Lines</h1>
  <p><a href="/docs/README-EN.md">English</a></p>
  <p><a href="https://github.com/BarudakRosul/split-lines/issues/new?assignees=&labels=bug&projects=&template=bug_report.yml">Report Bug</a> · <a href="https://github.com/BarudakRosul/split-lines/issues/new?assignees=&labels=enhancement&projects=&template=feature_request.yml">Request Feature</a></p>
  <p>
    <a href="https://github.com/BarudakRosul/split-lines/actions/workflows/test.yml"><img src="https://github.com/BarudakRosul/split-lines/actions/workflows/test.yml/badge.svg" alt="Testing"/></a>
    <a href="https://npmjs.com/package/@barudakrosul/split-lines"><img src="https://img.shields.io/npm/v/@barudakrosul/split-lines" alt="NPM Version"/></a>
    <a href="/LICENSE"><img src="https://img.shields.io/github/license/BarudakRosul/split-lines" alt="License"/></a>
    <a href="https://npmjs.com/package/@barudakrosul/split-lines"><img src="https://img.shields.io/npm/d18m/%40barudakrosul%2Fsplit-lines" alt="Downloads"/></a>
    <a href="https://github.com/BarudakRosul/split-lines/stargazers"><img src="https://img.shields.io/github/stars/BarudakRosul/split-lines?style=flat" alt="Stars"/></a>
    <a href="https://github.com/BarudakRosul/split-lines/network/members"><img src="https://img.shields.io/github/forks/BarudakRosul/split-lines?style=flat" alt="Forks"/></a>
    <a href="https://github.com/BarudakRosul/split-lines/issues"><img src="https://img.shields.io/github/issues/BarudakRosul/split-lines" alt="Issues"/></a>
  </p>
  <a href="https://techforpalestine.org/learn-more"><img src="https://raw.githubusercontent.com/Safouene1/support-palestine-banner/master/banner-support.svg" width="100%" alt="Support Palestine"/></a>
</div>

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Contribution](#contribution)
6. [License](#license)
7. [Acknowledge](#acknowledge)
8. [Donate](#donate)
9. [Changelog](#changelog)

## Introduction

Split Lines is a JavaScript extension that splits strings into arrays by line, with the option to include or remove line break characters. It is as similar as possible to `splitlines()` in Python.

## Features

Split Lines offers the following features:

- Splits strings into arrays based on line breaks.
- There is an option to include or omit line breaks in the results.
- Can be integrated into TypeScript code.

## Installation

To install Split Lines locally, follow these installation steps:

```shell
npm install @barudakrosul/split-lines
```

## Usage

To start using Split Lines, import the module first:

**1\. CommonJS**
```javascript
require("@barudakrosul/split-lines");
```

**2\. ESM (ECMAScript Modules)**
```javascript
import "@barudakrosul/split-lines";
```

**3\. TypeScript**
```typescript
import "@barudakrosul/split-lines";
```

Example of usage:

```javascript
let text = "List fruit names:\nApple\nBanana\nAvocado\nPapaya\nBlueBerry\netc.";
console.log(text.splitLines());

// Result:
// [
//   'List fruit names:',
//   'Apple',
//   'Banana',
//   'Avocado',
//   'Papaya',
//   'BlueBerry',
//   'etc.'
// ]
```

Example if the `keeplinebreaks` option is set to `true`:

```javascript
let text = "List fruit names:\nApple\nBanana\nAvocado\nPapaya\nBlueBerry\netc.";
console.log(text.splitLines(true));

// Result:
// [
//   'List fruit names:\n',
//   'Apple\n',
//   'Banana\n',
//   'Avocado\n',
//   'Papaya\n',
//   'BlueBerry\n',
//   'etc.'
// ]
```

## Contribution

Contributions to Split Lines are greatly appreciated! Whether reporting bugs, suggesting new features, or contributing to code improvements.

## License

Split Lines is licensed under the Apache-2.0 License - see the [LICENSE](/LICENSE) file for details.

## Acknowledge

Split Lines appreciates the support and contributions of the following individuals and open source projects:

- [@FajarKim](https://github.com/FajarKim) - Lead developer and creator of the application.
- Open source community - For valuable contributions to the tools and libraries used in this project.

## Donate

We really appreciate your support to continue developing this project. If you find this project useful, you can support us with a donation:

[![Ko-fi](https://img.shields.io/badge/Ko%e2%80%91fi-donate-7480ff?logo=ko-fi&logoColor=cyan)](https://ko-fi.com/barudakrosul)
[![Trakteer](https://custom-icon-badges.demolab.com/badge/Trakteer-donate-red?logo=trakteerid&logoColor=pink)](https://trakteer.id/barudakrosul)

Every donation, no matter the amount, means a lot to us. Thank you for your support! ❤️

## Changelog

Keep up with the latest changes and updates of Split Lines by referring to [Changelog](https://github.com/BarudakRosul/split-lines/releases).

Thank you for choosing Split Lines! We aim to provide an easy solution to convert strings into arrays based on line breaks.

[![Stand with Palestine](https://raw.githubusercontent.com/Safouene1/support-palestine-banner/master/StandWithPalestine.svg)](https://techforpalestine.org/learn-more)