"use client";

import { useState } from "react";

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    age: "",
    residence: "",
    linkedin: "",
    internetAccess: "",
    courseSource: "",
    education: "",
    university: "",
    occupation: "",
    availability: "",
    motivation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-10">
      <div className="p-12 rounded-lg shadow-lg w-full max-w-5xl">
        {/* Image & Title with Background Opacity */}
        <div className="relative w-full h-72 mb-8">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/trash-mark.appspot.com/o/images%2FF9.jpeg?alt=media&token=2fa76772-a5eb-4915-97c1-50de6ce2a838"
            alt="Community"
            className="w-full h-full object-cover rounded-lg"
          />
          {/* Overlay with Opacity (Aligned Left) */}
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col items-center justify-center text-white px-6">
            <h2 className="text-4xl font-bold">Join Our Community</h2>
            <p className="text-xl mt-2">Become part of something great!</p>
          </div>
        </div>

        {/* Application Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label className="block font-semibold">First Name</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full p-3 border rounded-lg text-lg" placeholder="First Name" required />
          </div>

          {/* Last Name */}
          <div>
            <label className="block font-semibold">Last Name</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full p-3 border rounded-lg text-lg" placeholder="Last Name" required />
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 border rounded-lg text-lg" placeholder="Email Address" required />
          </div>

          {/* Phone */}
          <div>
            <label className="block font-semibold">Phone number</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-3 border rounded-lg text-lg" placeholder="Phone number" required />
          </div>

          {/* Gender */}
          <div>
            <label className="block font-semibold">Gender</label>
            <select name="gender" value={formData.gender} onChange={handleChange} className="w-full p-3 border rounded-lg text-lg">
              <option value="">Choose option</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* Age */}
          <div>
            <label className="block font-semibold">Age</label>
            <input type="number" name="age" value={formData.age} onChange={handleChange} className="w-full p-3 border rounded-lg text-lg" placeholder="Your age" required />
          </div>

          {/* Residence */}
          <div>
            <label className="block font-semibold">Current residence (District and sector)</label>
            <input type="text" name="residence" value={formData.residence} onChange={handleChange} className="w-full p-3 border rounded-lg text-lg" placeholder="Ex: Gasabo, Kacyiru" required />
          </div>

          {/* LinkedIn */}
          <div>
            <label className="block font-semibold">LinkedIn account (Optional)</label>
            <input type="text" name="linkedin" value={formData.linkedin} onChange={handleChange} className="w-full p-3 border rounded-lg text-lg" placeholder="LinkedIn Account" />
          </div>

          {/* Internet Access */}
          <div>
            <label className="block font-semibold">Do you have access to the Internet?</label>
            <select name="internetAccess" value={formData.internetAccess} onChange={handleChange} className="w-full p-3 border rounded-lg text-lg">
              <option value="">Choose option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          {/* How did you hear about this course? */}
          <div>
            <label className="block font-semibold">How did you hear about this course?</label>
            <select name="courseSource" value={formData.courseSource} onChange={handleChange} className="w-full p-3 border rounded-lg text-lg">
              <option value="">Choose option</option>
              <option value="Social Media">Social Media</option>
              <option value="Friend">Friend</option>
              <option value="Website">Website</option>
            </select>
          </div>

          {/* Motivation */}
          <div className="col-span-2">
            <label className="block font-semibold">What motivated you to join this course/program?</label>
            <textarea name="motivation" value={formData.motivation} onChange={handleChange} className="w-full p-3 border rounded-lg text-lg h-28" placeholder="Your response goes here..." required></textarea>
          </div>

          {/* Submit Button */}
          <div className="col-span-2 flex justify-center">
            <button type="submit" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-md hover:bg-blue-700 transition">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
