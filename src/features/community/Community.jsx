import { PageHeader } from "@/shared/components";
import SEO from "@/shared/components/SEO";
import { itArtificerData } from "@/shared/db/itArtificer";
import Divider from "@/shared/ui/Divider";
import { Link } from "react-router";

const Community = () => {
  return (
    <>
      <SEO
        title="Community Guidelines"
        description="IT Artificer's Community Guidelines."
        path="/community-guidelines"
      />
      <PageHeader title="Community Guidelines" />

      <section>
        <div className="max-w-4xl mx-auto space-y-8 pb-10">
          {/* Header */}
          <div className="space-y-4">
            <p className="font-bold">Effective Date: 09-06-2025</p>
            <p className="text-md!">
              At IT Artificer, we are committed to fostering a professional,
              respectful, and inclusive environment for all clients, partners,
              employees, and community members. These Community Guidelines
              outline the standards we uphold across our platforms and
              interactions.
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold">
              1. Respectful Communication
            </h2>
            <p>
              We encourage open, honest, and respectful dialogue. We do not
              tolerate:
            </p>
            <ul className="styled-list space-y-2 ml-4">
              <li>Harassment, hate speech, or discrimination of any kind</li>
              <li>Abusive language or personal attacks</li>
              <li>Spamming, trolling, or disruptive behavior</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold">
              2. Professional Conduct
            </h2>
            <p>
              When engaging in our forums, social media, training, or projects,
              we expect users to:
            </p>
            <ul className="styled-list space-y-2 ml-4">
              <li>Communicate professionally and courteously</li>
              <li>Collaborate with integrity and transparency</li>
              <li>Respect differing viewpoints and backgrounds</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold">
              3. Privacy & Confidentiality
            </h2>
            <p>Do not share:</p>
            <ul className="styled-list space-y-2 ml-4">
              <li>Private information of others without consent</li>
              <li>Confidential client or company information</li>
              <li>Unauthorized proprietary or licensed content</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold">
              4. Contributions & Feedback
            </h2>
            <p>
              We welcome constructive feedback, questions, and ideas that
              contribute positively to the community. Suggestions should:
            </p>
            <ul className="styled-list space-y-2 ml-4">
              <li>Be relevant and solution-focused</li>
              <li>Help improve services, support, or collaboration</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold">
              5. Content & Platform Use
            </h2>
            <p>Use IT Artificer platforms responsibly:</p>
            <ul className="styled-list space-y-2 ml-4">
              <li>Share accurate and appropriate content</li>
              <li>Avoid off-topic or promotional content unless permitted</li>
              <li>Follow all applicable platform rules and policies</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold">
              6. Enforcement & Reporting
            </h2>
            <p>Violations of these guidelines may result in:</p>
            <ul className="styled-list space-y-2 ml-4">
              <li>Removal of content</li>
              <li>Account suspension or banning</li>
              <li>Legal action where applicable</li>
            </ul>
          </div>

          {/* Contact */}
          <Divider />
          <div className="space-y-4">
            <p>To report a concern or violation, please contact us:</p>
            <ul className="space-y-2">
              <li>
                <span className="font-semibold text-primary">Email: </span>
                <Link
                  to={`mailto:${itArtificerData.email.info}`}
                  className="hover:underline"
                  aria-label="Email"
                >
                  {itArtificerData.email.info}
                </Link>
              </li>
              <li>
                <span className="font-semibold text-primary">Phone: </span>
                <Link
                  to={`tel:${itArtificerData.phone}`}
                  className="hover:underline"
                  aria-label="Phone"
                >
                  {itArtificerData.phone[0]}
                </Link>
              </li>
            </ul>
            <p>
              By participating in our community, you agree to uphold these
              guidelines and contribute to a safe, collaborative, and
              professional environment for everyone.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Community;
