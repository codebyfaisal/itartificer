import { ContactInfo, PageHeader } from "@/shared/components";
import SEO from "@/shared/components/SEO";
import { itArtificerData } from "@/shared/db/itArtificer";
import { Link } from "react-router";

const Terms = () => {
  return (
    <>
      <SEO
        title="Terms & Conditions"
        description="Read IT Artificer's Terms & Conditions."
        path="/terms-and-conditions"
      />
      <PageHeader title="Terms & Conditions" />

      <section className="container pb-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <p className="font-bold">Effective Date: 09 June 2025</p>
            <p className="text-md!">
              Welcome to IT Artificer. These Terms & Conditions govern your
              access to and use of our website, products, and services. By
              accessing our website or engaging our services, you acknowledge
              that you have read, understood, and agreed to be bound by these
              Terms & Conditions.
            </p>
            <p className="font-medium text-destructive">
              If you do not agree with any part of these terms, you must
              discontinue use of our website and services.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using any services provided by IT Artificer, you
              agree to comply with these Terms & Conditions, along with any
              applicable laws and regulations. These terms apply to all users,
              clients, visitors, and partners.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold">
              2. Scope of Services
            </h2>
            <p>
              IT Artificer provides a range of professional services, including
              but not limited to:
            </p>
            <ul className="pl-4 space-y-2 styled-list">
              <li>IT consulting and advisory services</li>
              <li>Software and web application development</li>
              <li>Cloud-based solutions</li>
              <li>Digital marketing services</li>
              <li>Professional and technical training programs</li>
            </ul>
            <p>
              Specific service details, deliverables, timelines, and commercial
              terms will be defined separately through written agreements,
              proposals, or contracts.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold">
              3. User Responsibilities
            </h2>
            <p>You agree to:</p>
            <ul className="pl-4 space-y-2 styled-list">
              <li>
                Provide accurate, complete, and up-to-date information when
                required
              </li>
              <li>
                Use our website and services only for lawful and authorized
                purposes
              </li>
              <li>
                Refrain from attempting unauthorized access, data breaches, or
                misuse of systems
              </li>
              <li>
                Not engage in any activity that may disrupt, damage, or impair
                our services or reputation
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold">
              4. Intellectual Property Rights
            </h2>
            <p>
              All content available on this website, including but not limited
              to text, graphics, logos, designs, software, source code, and
              trademarks, is the exclusive property of IT Artificer unless
              otherwise stated.
            </p>
            <p className="font-medium text-destructive">
              Unauthorized reproduction, distribution, modification, or use of
              any intellectual property is strictly prohibited and may result in
              legal action.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold">
              5. Payment & Billing
            </h2>
            <ul className="pl-4 space-y-2 styled-list">
              <li>
                Payment terms will be clearly defined and agreed upon in writing
                prior to the commencement of any project or service
              </li>
              <li>Invoices must be settled within the agreed timeframe</li>
              <li>
                Late or unpaid invoices may result in service suspension,
                delays, or termination
              </li>
              <li>
                IT Artificer reserves the right to apply late payment penalties
                where applicable
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold">
              6. Suspension & Termination of Services
            </h2>
            <p>
              IT Artificer reserves the right to suspend or terminate services,
              with or without notice, under the following circumstances:
            </p>
            <ul className="pl-4 space-y-2 styled-list">
              <li>Violation of these Terms & Conditions</li>
              <li>Failure to make payments as agreed</li>
              <li>Engagement in unlawful, fraudulent, or harmful activities</li>
              <li>Misuse of systems, data, or intellectual property</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold">
              7. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, IT Artificer shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages, including but not limited to loss of profits,
              data, or business opportunities, arising from the use or inability
              to use our services.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold">
              8. Indemnification
            </h2>
            <p>
              You agree to indemnify, defend, and hold harmless IT Artificer,
              its directors, employees, partners, and affiliates from any
              claims, liabilities, damages, losses, or expenses arising out of:
            </p>
            <ul className="pl-4 space-y-2 styled-list">
              <li>Your use of our services</li>
              <li>Your violation of these Terms & Conditions</li>
              <li>Your infringement of any third-party rights</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold">
              9. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites or services
              for informational purposes. IT Artificer does not control and is
              not responsible for the content, policies, or practices of any
              third-party sites.
            </p>
            <p className="font-medium">
              Accessing such links is at your own risk.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold">
              10. Amendments to Terms
            </h2>
            <p>
              IT Artificer reserves the right to modify or update these Terms &
              Conditions at any time. Any changes will be posted on this page,
              and the revised effective date will be updated accordingly.
              Continued use of our services constitutes acceptance of the
              revised terms.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold">
              11. Governing Law & Jurisdiction
            </h2>
            <p>
              These Terms & Conditions shall be governed by and construed in
              accordance with the laws of the Islamic Republic of Pakistan. Any
              disputes shall be subject to the exclusive jurisdiction of the
              competent courts of Pakistan.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold">
              12. Contact Information
            </h2>
            <p>
              If you have any questions or concerns regarding these Terms &
              Conditions, please contact us at:
            </p>
            <ul className="space-y-2 styled-list pl-4">
              <li>
                <span className="font-semibold text-primary">Email: </span>
                <Link
                  to={`mailto:${itArtificerData.email.info}`}
                  className="hover:underline"
                >
                  {itArtificerData.email.info}
                </Link>
              </li>
              <li>
                <span className="font-semibold text-primary">Phone: </span>
                <Link
                  to={`tel:${itArtificerData.phone}`}
                  className="hover:underline"
                >
                  {itArtificerData.phone[0]}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;
