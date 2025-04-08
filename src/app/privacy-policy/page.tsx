import React from "react";
import styles from "./privacy-policy.module.css";

const PrivacyPolicy = () => {
  return (
    <div className={styles.container}>
      <h1>Privacy Policy</h1>
      <p>
        Foam is an open-source Twitch client designed for iOS and Android. We
        are committed to respecting your privacy. Foam does not collect or share
        any personal data. However, we may collect anonymous usage statistics
        and crash reports to improve the app&apos;s performance and
        functionality. Please review the sections below for more details.
      </p>

      <h2>Third-party Services</h2>
      <p>
        Foam integrates with the following services to provide a seamless and
        enhanced user experience:
      </p>

      <h3>Twitch</h3>
      <p>
        Foam uses the official Twitch API to display live streams, enable chat
        functionality, and offer additional features. You can choose to log in
        with your Twitch account to access personalized features, such as
        sending chat messages and viewing your followed channels. Alternatively
        you can choose to use the app logged out
      </p>
      <p>
        When you log in with Twitch, Foam only requests the permissions
        necessary for its functionality. Your OAuth access token is securely
        stored and encrypted locally on your device. This token is used solely
        to send and receive data on your behalf.
      </p>
      <p>
        For more information about how Twitch handles your data, please refer to
        their privacy policy.
      </p>

      <h3>7TV, BetterTTV, and FrankerFaceZ</h3>
      <p>
        Foam integrates with APIs from 7TV, BetterTTV (BTTV), and FrankerFaceZ
        (FFZ) to display custom badges and emotes in chat. When you visit your
        own channel, Foam retrieves these services using your public Twitch ID
        or username to fetch emotes and badges associated with your channel.
      </p>
      <p>
        For more details on how 7TV, BTTV, and FFZ manage your data, please
        refer to their respective privacy policies.
      </p>

      <h3>Firebase</h3>
      <p>
        Foam uses Firebase to collect crash reports, usage data, and analytics.
        This data helps us improve the app by identifying bugs and enhancing
        features. All collected data is anonymous and does not include any
        personal information. You can disable crash reporting and analytics in
        the app settings if you prefer not to share this data.
      </p>
      <p>For more information, please refer to the Firebase privacy policy.</p>

      <h2>Privacy Policy Updates</h2>
      <p>
        This privacy policy may be updated periodically. The latest version will
        always be available on this page. We encourage you to review this policy
        regularly to stay informed about any changes. Updates to this policy
        take effect as soon as they are posted.
      </p>

      <h2>Contact</h2>
      <p>
        If you have any questions, concerns, or suggestions regarding this
        privacy policy, feel free to reach out to us at{" "}
        <a href="mailto:contact@foam-app.com">contact@foam-app.com</a>.
      </p>

      <p className={styles.lastUpdated}>
        <strong>Last Updated:</strong> 8 April 2025
      </p>
    </div>
  );
};

export default PrivacyPolicy;
