import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="font-sans max-w-3xl mx-auto p-5 leading-relaxed text-gray-800 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-4xl mb-5 text-gray-900 text-center">
        Privacy Policy
      </h1>
      <p className="text-base mb-4">
        Foam is an open-source Twitch client designed for iOS and Android. We
        are committed to respecting your privacy. Foam does not collect or share
        any personal data. However, we may collect anonymous usage statistics
        and crash reports to improve the app&apos;s performance and
        functionality. Please review the sections below for more details.
      </p>

      <h2 className="text-3xl mt-8 mb-4 text-gray-700 border-b-2 border-gray-300 pb-1">
        Third-party Services
      </h2>
      <p className="text-base mb-4">
        Foam integrates with the following services to provide a seamless and
        enhanced user experience:
      </p>

      <h3 className="text-2xl mt-5 mb-3 text-gray-600">Twitch</h3>
      <p className="text-base mb-4">
        Foam uses the official Twitch API to display live streams, enable chat
        functionality, and offer additional features. You can choose to log in
        with your Twitch account to access personalized features, such as
        sending chat messages and viewing your followed channels. Alternatively
        you can choose to use the app logged out
      </p>
      <p className="text-base mb-4">
        When you log in with Twitch, Foam only requests the permissions
        necessary for its functionality. Your OAuth access token is securely
        stored and encrypted locally on your device. This token is used solely
        to send and receive data on your behalf.
      </p>
      <p className="text-base mb-4">
        For more information about how Twitch handles your data, please refer to
        their privacy policy.
      </p>

      <h3 className="text-2xl mt-5 mb-3 text-gray-600">
        7TV, BetterTTV, and FrankerFaceZ
      </h3>
      <p className="text-base mb-4">
        Foam integrates with APIs from 7TV, BetterTTV (BTTV), and FrankerFaceZ
        (FFZ) to display custom badges and emotes in chat. When you visit your
        own channel, Foam retrieves these services using your public Twitch ID
        or username to fetch emotes and badges associated with your channel.
      </p>
      <p className="text-base mb-4">
        For more details on how 7TV, BTTV, and FFZ manage your data, please
        refer to their respective privacy policies.
      </p>

      <h3 className="text-2xl mt-5 mb-3 text-gray-600">Firebase</h3>
      <p className="text-base mb-4">
        Foam uses Firebase to collect crash reports, usage data, and analytics.
        This data helps us improve the app by identifying bugs and enhancing
        features. All collected data is anonymous and does not include any
        personal information. You can disable crash reporting and analytics in
        the app settings if you prefer not to share this data.
      </p>
      <p className="text-base mb-4">
        For more information, please refer to the Firebase privacy policy.
      </p>

      <h2 className="text-3xl mt-8 mb-4 text-gray-700 border-b-2 border-gray-300 pb-1">
        Privacy Policy Updates
      </h2>
      <p className="text-base mb-4">
        This privacy policy may be updated periodically. The latest version will
        always be available on this page. We encourage you to review this policy
        regularly to stay informed about any changes. Updates to this policy
        take effect as soon as they are posted.
      </p>

      <h2 className="text-3xl mt-8 mb-4 text-gray-700 border-b-2 border-gray-300 pb-1">
        Contact
      </h2>
      <p className="text-base mb-4">
        If you have any questions, concerns, or suggestions regarding this
        privacy policy, feel free to reach out to us at{" "}
        <a
          href="mailto:contact@foam-app.com"
          className="text-blue-600 no-underline hover:underline"
        >
          contact@foam-app.com
        </a>
        .
      </p>

      <p className="mt-5 text-sm text-gray-500">
        <strong>Last Updated:</strong> 8 April 2025
      </p>
    </div>
  );
}
