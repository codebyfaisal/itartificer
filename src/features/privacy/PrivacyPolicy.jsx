import { PageHeader } from "@/shared/components";
import SEO from "@/shared/components/SEO";
import { itArtificerData } from "@/shared/db/itArtificer.js";

const PrivacyPolicy = () => {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="IT Artificer's Privacy Policy. Learn how we collect, use, and protect your information."
        path="/privacy-policy"
      />

      <PageHeader title="Privacy Policy" />

      <section>
        <div className="max-w-4xl pb-20 space-y-8 text-foreground/80 mx-auto">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              1. Introduction
            </h2>
            <p>
              Welcome to IT Artificer. We value your privacy and are committed
              to protecting your personal data. This Privacy Policy explains how
              we collect, use, disclose, and safeguard your information when you
              visit our website and use our services.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              2. Information We Collect
            </h2>
            <p>
              We may collect personal information that you voluntarily provide
              to us when you register on the website, express an interest in
              obtaining information about us or our products and services, when
              you participate in activities on the website, or otherwise when
              you contact us.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              3. Use of Your Information
            </h2>
            <p>We use the information we collect or receive:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To facilitate account creation and logon process.</li>
              <li>To send you marketing and promotional communications.</li>
              <li>To send administrative information to you.</li>
              <li>To fulfill and manage your orders.</li>
              <li>To enforce our terms, conditions, and policies.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              4. Disclosure of Your Information
            </h2>
            <p>
              We may share information we have collected about you in certain
              situations. Your information may be disclosed as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>By Law or to Protect Rights:</strong> If we believe the
                release of information about you is necessary to respond to
                legal process, to investigate or remedy potential violations of
                our policies, or to protect the rights, property, and safety of
                others, we may share your information as permitted or required
                by any applicable law, rule, or regulation.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              5. Contact Us
            </h2>
            <p>
              If you have questions or comments about this Privacy Policy,
              please contact us at:{" "}
              <a
                href={`mailto:${itArtificerData.email.info}`}
                className="text-primary hover:underline"
              >
                {itArtificerData.email.info}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
