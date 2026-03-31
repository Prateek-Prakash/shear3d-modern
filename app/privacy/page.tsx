import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Shear3D Consulting",
};

export default function PrivacyPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-3">Privacy Policy</h1>
          <p className="text-white/70">Last Updated: January 25, 2014</p>
        </div>
      </div>
      <section className="py-16 bg-[#fafafa]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#e8e8e8] rounded-xl p-8 space-y-8 text-[#605f5f]">
            <div>
              <h2 className="text-xl font-bold text-[#2b2b2b] mb-3">Collection of Personal Information</h2>
              <p>We collect personally identifiable information (such as name and email address) only when you voluntarily submit it to us through forms on our website, including contact forms and newsletter subscriptions.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#2b2b2b] mb-3">Use of Information</h2>
              <p>Information you provide is used to respond to your enquiries, send newsletters you have subscribed to, improve our services, and communicate important updates about our products. We will not use your information for purposes beyond those for which it was collected without your consent.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#2b2b2b] mb-3">Sharing of Information</h2>
              <p>We do not sell, trade, or otherwise transfer your personally identifiable information to third parties. This does not include trusted third parties who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#2b2b2b] mb-3">Changes to This Policy</h2>
              <p>We reserve the right to modify this privacy policy at any time. Changes will be posted on this page. Your continued use of the website following any changes constitutes your acceptance of the updated policy.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#2b2b2b] mb-3">Contacting Us</h2>
              <p>If you have any questions about this privacy policy, you may contact us at <a href="mailto:enquiries@shear3d.com" className="text-[#c52100] hover:underline">enquiries@shear3d.com</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
