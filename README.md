# Canvas LMS Google Analytics Plug-in

Plugin for the [Canvas LMS theme app](https://www.npmjs.com/package/@artevelde-uas/canvas-lms-app) that adds the Google
Analytics scripts to Canvas by providing the tracking id.

[![NPM version](https://img.shields.io/npm/v/@artevelde-uas/canvas-lms-google-analytics-plugin.svg)](https://www.npmjs.com/package/@artevelde-uas/canvas-lms-google-analytics-plugin)
[![License](https://img.shields.io/github/license/artevelde-uas/canvas-lms-google-analytics-plugin.svg)](https://spdx.org/licenses/MIT)
[![Downloads](https://img.shields.io/npm/dt/@artevelde-uas/canvas-lms-google-analytics-plugin.svg)](https://www.npmjs.com/package/@artevelde-uas/canvas-lms-google-analytics-plugin)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/artevelde-uas/canvas-lms-google-analytics-plugin/pulls)

## Installation

Using NPM:

    npm install @artevelde-uas/canvas-lms-google-analytics-plugin

Using Yarn:

    yarn add @artevelde-uas/canvas-lms-google-analytics-plugin

## Usage

Just import the plug-in and add it to the Canvas app:

```javascript
import canvas from '@artevelde-uas/canvas-lms-app';
import googleAnalyticsPlugin from '@artevelde-uas/canvas-lms-google-analytics-plugin';

canvas.addPlugin(googleAnalyticsPlugin, {
    trackingId: 'UA-123456789-0'
});

canvas.run();
```
