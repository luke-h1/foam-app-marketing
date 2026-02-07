import { useEffect } from "react";

export function NewRelic() {
  useEffect(() => {
    const accountId = import.meta.env.PUBLIC_NEW_RELIC_ACCOUNT_ID;
    const applicationId = import.meta.env.PUBLIC_NEW_RELIC_APPLICATION_ID;
    const licenseKey = import.meta.env.PUBLIC_NEW_RELIC_LICENSE_KEY;

    if (!accountId || !applicationId || !licenseKey) {
      if (import.meta.env.DEV) {
        console.warn("New Relic: Missing required environment variables");
      }
      return;
    }

    import("@newrelic/browser-agent/loaders/browser-agent").then(
      ({ BrowserAgent }) => {
        new BrowserAgent({
          init: {
            distributed_tracing: { enabled: true },
            privacy: { cookies_enabled: true },
            ajax: { deny_list: ["bam.eu01.nr-data.net"] },
          },
          info: {
            beacon: "bam.eu01.nr-data.net",
            errorBeacon: "bam.eu01.nr-data.net",
            licenseKey,
            applicationID: applicationId,
            sa: 1,
          },
          loader_config: {
            accountID: accountId,
            trustKey: accountId,
            agentID: applicationId,
            licenseKey,
            applicationID: applicationId,
          },
        });
      }
    );
  }, []);

  return null;
}
