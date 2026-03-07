import { ShieldCheck, Gem, Wrench, IndianRupee } from "lucide-react";

const BenefitsSection = () => {
  return (
    <section className="relative -mt-50 z-40" id="benefits">
      <div className="container mx-auto px-10">
        <div className="grid md:grid-cols-4 gap-8">

          {/* Card 1 */}
          <div className="reveal delay-1">

          <div className="benefit-card-premium premium ">
            <div className="icon-circle">
              <Gem size={32} />
            </div>
            <h3>Premium Website Design</h3>
            <ul>
              <li>Modern UI/UX</li>
              <li>Responsive Layout</li>
              <li>Fast Loading</li>
            </ul>
          </div>
          </div>

          {/* Card 2 */}
          <div className="reveal delay-2">

          <div className="benefit-card-premium premium">
            <div className="icon-circle">
              <ShieldCheck size={32} />
            </div>
            <h3>Higher Security</h3>
            <ul>
              <li>Secure Authentication</li>
              <li>Data Protection</li>
              <li>Scalable Backend</li>
            </ul>
          </div>
          </div>

          {/* Card 3 */}
          <div className="reveal delay-3">

          <div className="benefit-card-premium ">
            <div className="icon-circle">
              <Wrench size={32} />
            </div>
            <h3>1 Year Free Maintenance</h3>
            <ul>
              <li>Bug Fixing</li>
              <li>Regular Updates</li>
              <li>Technical Support</li>
            </ul>
          </div>
          </div>

          {/* Card 4 */}
          <div className="reveal delay-4">

          <div className="benefit-card-premium premium ">
            <div className="icon-circle">
              <IndianRupee size={32} />
            </div>
            <h3>Cost Effective</h3>
            <ul>
              <li>Affordable Pricing</li>
              <li>Flexible Plans</li>
              <li>High ROI</li>
            </ul>
          </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;