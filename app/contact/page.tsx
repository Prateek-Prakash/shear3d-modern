"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { MapPin, Mail } from "lucide-react";
import { FacebookIcon, TwitterIcon, LinkedinIcon, YoutubeIcon } from "@/components/SocialIcons";

type FormData = {
  name: string;
  email: string;
  company?: string;
  subject?: string;
  message: string;
};

export default function ContactPage() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  async function onSubmit(data: FormData) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    }
  }

  return (
    <>
      {/* Page Header */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
          <p className="text-white/70 text-lg">Get in touch with the Shear3D team</p>
        </div>
      </div>

      <section className="py-16 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white border border-[#e8e8e8] rounded-xl p-8">
              <h2 className="text-2xl font-bold text-[#2b2b2b] mb-6">Send us a message</h2>
              {submitStatus === "success" && (
                <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg px-4 py-3 mb-6 text-sm">
                  Thank you! Your message has been received. We&apos;ll get back to you shortly.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 mb-6 text-sm">
                  Something went wrong. Please try again or email us directly.
                </div>
              )}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-[#2b2b2b] mb-1">Full Name *</label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    className="w-full border border-[#e8e8e8] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#c52100] transition-colors"
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2b2b2b] mb-1">Email Address *</label>
                  <input
                    {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" } })}
                    type="email"
                    className="w-full border border-[#e8e8e8] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#c52100] transition-colors"
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2b2b2b] mb-1">Company</label>
                  <input
                    {...register("company")}
                    className="w-full border border-[#e8e8e8] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#c52100] transition-colors"
                    placeholder="Your company (optional)"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2b2b2b] mb-1">Subject</label>
                  <input
                    {...register("subject")}
                    className="w-full border border-[#e8e8e8] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#c52100] transition-colors"
                    placeholder="Subject (optional)"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2b2b2b] mb-1">Message *</label>
                  <textarea
                    {...register("message", { required: "Message is required" })}
                    rows={5}
                    className="w-full border border-[#e8e8e8] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#c52100] transition-colors resize-none"
                    placeholder="Your message..."
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#c52100] hover:bg-[#a01900] disabled:opacity-60 text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Contact info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#2b2b2b] mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-[#c52100] mt-0.5 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-[#2b2b2b]">Address</p>
                      <p className="text-[#605f5f] text-sm">Bangalore, Karnataka, India</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="text-[#c52100] mt-0.5 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-[#2b2b2b]">General Enquiries</p>
                      <a href="mailto:enquiries@shear3d.com" className="text-[#c52100] hover:underline text-sm">enquiries@shear3d.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="text-[#c52100] mt-0.5 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-[#2b2b2b]">Technical Support</p>
                      <a href="mailto:support@shear3d.com" className="text-[#c52100] hover:underline text-sm">support@shear3d.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="text-[#c52100] mt-0.5 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-[#2b2b2b]">Sales</p>
                      <a href="mailto:sales@shear3d.com" className="text-[#c52100] hover:underline text-sm">sales@shear3d.com</a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#2b2b2b] mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/S3DConsulting" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#605f5f] hover:text-[#c52100] transition-colors text-sm">
                    <FacebookIcon size={20} />
                    Facebook
                  </a>
                  <a href="https://twitter.com/Shear3D" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#605f5f] hover:text-[#c52100] transition-colors text-sm">
                    <TwitterIcon size={20} />
                    Twitter
                  </a>
                  <a href="http://in.linkedin.com/in/shear3d" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#605f5f] hover:text-[#c52100] transition-colors text-sm">
                    <LinkedinIcon size={20} />
                    LinkedIn
                  </a>
                  <a href="https://www.youtube.com/channel/UCVMH551hUv69exarEG5Lerw" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#605f5f] hover:text-[#c52100] transition-colors text-sm">
                    <YoutubeIcon size={20} />
                    YouTube
                  </a>
                </div>
              </div>

              <div className="bg-[#c52100]/5 border border-[#c52100]/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[#2b2b2b] mb-2">Office Hours</h3>
                <p className="text-[#605f5f] text-sm">Monday – Friday: 9:00 AM – 6:00 PM IST</p>
                <p className="text-[#605f5f] text-sm">Saturday: 10:00 AM – 2:00 PM IST</p>
                <p className="text-[#605f5f] text-sm mt-2">We typically respond within 1 business day.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
