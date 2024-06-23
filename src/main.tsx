import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://25b13b2729488b55f5cc5a849d7cff6c@o4507460587421696.ingest.de.sentry.io/4507478231285840",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
    }),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
