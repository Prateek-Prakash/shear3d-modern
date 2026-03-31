import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Disclaimer | Shear3D Consulting",
};

export default function TermsPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-3">Terms &amp; Disclaimer</h1>
          <p className="text-white/70">Please read these terms carefully before using our software or website.</p>
        </div>
      </div>
      <section className="py-16 bg-[#fafafa] dark:bg-gray-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-900 border border-[#e8e8e8] dark:border-gray-700 rounded-xl p-8 space-y-8 text-[#605f5f] dark:text-gray-300">
            <div>
              <h2 className="text-xl font-bold text-[#2b2b2b] dark:text-gray-100 mb-3">Software Use</h2>
              <p>Shear3D Consulting software products are licensed, not sold. Your license to use the software is subject to your compliance with these terms. You may not reverse engineer, decompile, or disassemble any software product.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#2b2b2b] dark:text-gray-100 mb-3">Disclaimer of Warranties</h2>
              <p>The software and information provided by Shear3D Consulting are provided &quot;as is&quot; without warranty of any kind, either express or implied, including but not limited to the implied warranties of merchantability and fitness for a particular purpose. The user assumes the entire risk of using the software.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#2b2b2b] dark:text-gray-100 mb-3">Limitation of Liability</h2>
              <p>In no event shall Shear3D Consulting be liable for any special, incidental, indirect, or consequential damages whatsoever arising out of or in connection with your use of or inability to use the software, even if Shear3D Consulting has been advised of the possibility of such damages.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#2b2b2b] dark:text-gray-100 mb-3">Links</h2>
              <p>This website may contain links to third-party websites. These links are provided solely as a convenience and do not imply endorsement by Shear3D Consulting of the linked sites or their content.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#2b2b2b] dark:text-gray-100 mb-3">Personal Use Limitation</h2>
              <p>Demo versions of software are provided for personal evaluation only and may not be used for commercial purposes. Full commercial use requires a valid license.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#2b2b2b] dark:text-gray-100 mb-3">Copyright</h2>
              <p>All content on this website and all software products are copyright © Shear3D Consulting. All rights reserved. Reproduction or distribution of any material without prior written consent is strictly prohibited.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
