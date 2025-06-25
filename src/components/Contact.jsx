import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/bxooepda", userInfo);
      toast.success("Your message has been sent!");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="Contact" className="py-16">
      <div className="container mx-auto px-4 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Contact Me</h2>
          <p className="text-lg text-gray-600 dark:text-slate-300 max-w-2xl mx-auto">
            I'm open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Form */}
          <div className="w-full md:w-2/3 bg-gray-50 dark:bg-slate-700 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <input
                    {...register("name", { required: "Name is required" })}
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 dark:border-slate-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-slate-400"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <input
                    {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 border border-gray-300 dark:border-slate-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-slate-400"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
              </div>
              <div className="mb-6">
                <textarea
                  {...register("message", { required: "Message is required" })}
                  placeholder="Your Message"
                  rows="5"
                  className="w-full p-3 border border-gray-300 dark:border-slate-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-slate-400"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/3">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full text-blue-600 dark:text-blue-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-slate-300">Location</h4>
                  <p className="text-gray-600 dark:text-slate-300">Rajkot, Gujarat, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full text-blue-600 dark:text-blue-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-slate-300">Email</h4>
                  <p className="text-gray-600 dark:text-slate-300">ranvijaysingh1588@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full text-blue-600 dark:text-blue-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-slate-300">Phone</h4>
                  <p className="text-gray-600 dark:text-slate-300">+91 9135173003</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/ranvijay-singh-abc3037/" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-300">
                  <FaLinkedin size={28} />
                </a>
                <a href="https://github.com/KUSHWAHA-RANVIJAY-SINGH" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                  <FaGithub size={28} />
                </a>
                <a href="https://x.com/RanvijayKushwa7" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-slate-400 hover:text-blue-400 transition-colors duration-300">
                  <FaTwitter size={28} />
                </a>
                <a href="https://www.instagram.com/ranvijay_singh_kushwaha/" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-slate-400 hover:text-pink-500 transition-colors duration-300">
                  <FaInstagram size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
