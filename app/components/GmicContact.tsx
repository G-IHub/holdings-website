'use client';

import Image from "next/image";
import { useState } from "react";
import ContactSVG from "../../assets/gmic/sportsman-fitness.jpg";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    stateCity: "",
    organization: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/participants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form");
      }

      setSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        stateCity: "",
        organization: "",
      });

      // Clear success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch (err: any) {
      setError(err.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return(
    <div
      className="md:py-16 p-4 lg:px-20 flex min-h-screen w-full justify-center items-center relative">
        <div className="absolute inset-0 -z-10 bg-black hidden md:block">
          <Image src={ContactSVG} alt="Hero background" fill className="object-cover" sizes="100vw" />
        </div>
      <div className="shadow-xl md:shadow-md max-w-3xl p-10 md:py-20 md:px-25 rounded-xl bg-white">
        {/* Success Message */}
        {success && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
            ✓ Thank you for registering! Your information has been received.
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            ✗ {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name info */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-end gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="text-sm font-medium text-gray-900"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-300 outline-none py-2 placeholder:text-sm placeholder:text-gray-400 focus:border-purple-600"
                placeholder="e.g John"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="text-sm font-medium text-gray-900"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-300 outline-none py-2 placeholder:text-sm placeholder:text-gray-400 focus:border-purple-600"
                placeholder="e.g Dowry"
              />
            </div>
          </div>

          {/* Email and phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-end gap-6">
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-900"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-300 outline-none py-2 placeholder:text-sm placeholder:text-gray-400 focus:border-purple-600"
                placeholder="e.g John@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-900"
              >
                Phone Number (WhatsApp preferred)
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border-b border-gray-300 outline-none py-2 placeholder:text-sm placeholder:text-gray-400 focus:border-purple-600"
                placeholder="+234"
              />
            </div>
          </div>

          {/* Residence */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-end gap-6">
            <div>
              <label
                htmlFor="country"
                className="text-sm font-medium text-gray-900"
              >
                Country of Residence
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full border-b border-gray-300 outline-none py-2 placeholder:text-sm placeholder:text-gray-400 focus:border-purple-600"
                placeholder="e.g Nigeria"
              />
            </div>
            <div>
              <label
                htmlFor="stateCity"
                className="text-sm font-medium text-gray-900"
              >
                State or City
              </label>
              <input
                type="text"
                id="stateCity"
                name="stateCity"
                value={formData.stateCity}
                onChange={handleChange}
                className="w-full border-b border-gray-300 outline-none py-2 placeholder:text-sm placeholder:text-gray-400 focus:border-purple-600"
                placeholder="Oyo state"
              />
            </div>
          </div>

          {/* Organization */}
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label
                htmlFor="organization"
                className="text-sm font-medium text-gray-900"
              >
                Institution / Organization Name
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="w-full border-b border-gray-300 outline-none py-2 placeholder:text-sm placeholder:text-gray-400 focus:border-purple-600"
                placeholder="e.g Your Organization"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <button
              type="submit"
              disabled={loading}
              className="bg-purple-600 rounded-full px-4 py-2 w-full md:w-auto flex justify-center items-center text-white cursor-pointer hover:bg-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
            {/* <div className="text-xs text-gray-500">
              By pressing the submit button, I agree to Genomac Innovation
              contacting me by email and/or phone to share opportunities
              exclusively available to Select or Enterprise customes. I also
              understand that any information I&apos;ve shared in this form is
              subject to Designership Privacy Policy.
            </div> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;