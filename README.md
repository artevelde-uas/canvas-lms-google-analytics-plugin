# Canvas LMS Course Recycle Bin Plug-in

Plugin for the [Canvas LMS theme app](https://github.com/ahsdile/canvas-lms-app) that adds the Google Analytics scripts to Canvas by providing the tracking id.

## Installation

Using NPM:

    npm install @ahsdile/canvas-lms-google-analytics-plugin

Using Yarn:

    yarn add @ahsdile/canvas-lms-google-analytics-plugin

## Usage

Just import the plug-in and add it to the Canvas app:

```javascript
import canvas from '@ahsdile/canvas-lms-app';
import googleAnalyticsPlugin from '@ahsdile/canvas-lms-google-analytics-plugin';

canvas.addPlugin(googleAnalyticsPlugin, {
    trackingId: 'UA-123456789-0'
});

canvas.run();
```
