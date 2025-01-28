import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

export default function ServiceRequestForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false); // Added to track form submission success

  const onSubmit = async (data) => {
    if (!recaptchaValue) {
      setServerError('Please complete the reCAPTCHA');
      return;
    }

    setIsSubmitting(true);
    setServerError('');
    
    try {
      const response = await axios.post(
        'http://localhost:3000/submit-form',
        { ...data, recaptchaValue }
      );
      
      if (response.data.success) {
        setIsSubmitted(true); // Set form as submitted
        reset();
        setRecaptchaValue(null);
      }
    } catch (error) {
      const errorMessage = error.response?.data?.error 
        || error.response?.data?.message 
        || 'Submission failed. Please try again.';
      setServerError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  // If form is successfully submitted, show the success message
  if (isSubmitted) {
    return (
      <div className="max-w-xl mx-auto mt-10 my-10 p-8 bg-gray-100 shadow-xl rounded-2xl border border-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Request successfully sent!
        </h2>
        <p className="text-lg text-gray-600">
          We will soon be in touch.
        </p>
      </div>
    );
  }

  // Otherwise, render the form
  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className="max-w-xl mx-auto mt-10 p-8 bg-white shadow-xl rounded-2xl border border-gray-100"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Service Request Form
      </h2>

      {serverError && (
        <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
          {serverError}
        </div>
      )}

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              First Name *
            </label>
            <input
              {...register("firstName", { required: "Required field" })}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.firstName ? 'border-red-500' : 'border-gray-200'
              } focus:ring-2 focus:ring-[#1dbbec] focus:border-transparent transition-all`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Last Name *
            </label>
            <input
              {...register("lastName", { required: "Required field" })}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.lastName ? 'border-red-500' : 'border-gray-200'
              } focus:ring-2 focus:ring-[#1dbbec] focus:border-transparent transition-all`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            {...register("email", { 
              required: "Required field",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.email ? 'border-red-500' : 'border-gray-200'
            } focus:ring-2 focus:ring-[#1dbbec] focus:border-transparent transition-all`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Service Selection */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Service Needed *
          </label>
          <select
            {...register("service", { required: "Please select a service" })}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.service ? 'border-red-500' : 'border-gray-200'
            } focus:ring-2 focus:ring-[#1dbbec] focus:border-transparent transition-all`}
          >
            <option value="">Select a service...</option>
            <option value="refrigeration">Refrigeration</option>
            <option value="heating-and-ac">Heating & AC</option>
            <option value="installation">Installation</option>
            <option value="maintenance">Maintenance</option>
            <option value="repairs">Repairs</option>
          </select>
          {errors.service && (
            <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            {...register("message", { 
              required: "Please enter your message",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters"
              }
            })}
            rows="5"
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.message ? 'border-red-500' : 'border-gray-200'
            } focus:ring-2 focus:ring-[#1dbbec] focus:border-transparent transition-all`}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* reCAPTCHA */}
        <div className="mt-4 flex justify-center">
          <ReCAPTCHA
            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
            onChange={(value) => setRecaptchaValue(value)}
            className="recaptcha"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#1dbbec] hover:bg-[#1899c0] text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <svg 
                className="animate-spin h-6 w-6 text-white" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Submitting...</span>
            </>
          ) : (
            'Submit Request'
          )}
        </button>
      </div>
    </form>
  );
}