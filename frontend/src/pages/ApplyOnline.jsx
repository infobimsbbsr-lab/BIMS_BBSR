import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import axios from 'axios';

const ApplyOnline = () => {
  const [formData, setFormData] = useState({
    courseApplied: 'MBA',
    firstName: '',
    lastName: '',
    fatherName: '',
    dob: '',
    gender: 'Male',
    category: 'General',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    tenthBoard: '',
    tenthPercentage: '',
    twelfthBoard: '',
    twelfthPercentage: '',
    graduationDegree: '',
    graduationPercentage: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await axios.post('/api/applications', formData);
      setStatus({ type: 'success', message: response.data.message });
      // Reset form
      setFormData({
        courseApplied: 'MBA',
        firstName: '',
        lastName: '',
        fatherName: '',
        dob: '',
        gender: 'Male',
        category: 'General',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        tenthBoard: '',
        tenthPercentage: '',
        twelfthBoard: '',
        twelfthPercentage: '',
        graduationDegree: '',
        graduationPercentage: ''
      });
      window.scrollTo(0, 0);
    } catch (error) {
      console.error(error);
      setStatus({ 
        type: 'error', 
        message: error.response?.data?.message || 'Something went wrong. Please try again.' 
      });
      window.scrollTo(0, 0);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <PageHeader title="Apply Online" breadcrumb="Admission / Apply Online" />

      <section className="py-16 max-w-5xl mx-auto px-4 w-full">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-bims-blue text-white p-6 md:p-8">
            <h2 className="text-2xl font-bold">Admission Application Form 2024-25</h2>
            <p className="text-blue-100 mt-2">Please fill in the details carefully. Fields marked with * are mandatory.</p>
          </div>

          <div className="p-6 md:p-10">
            {status.message && (
              <div className={`mb-8 p-4 rounded-lg flex items-center gap-3 ${status.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                {status.type === 'success' ? <CheckCircle size={24}/> : <AlertCircle size={24}/>}
                <p className="font-medium">{status.message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Section 1: Course Selection */}
              <div>
                <h3 className="text-lg font-bold text-bims-blue border-b pb-2 mb-4">1. Program Selection</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">Course Applied For *</label>
                    <select 
                      name="courseApplied" 
                      value={formData.courseApplied} 
                      onChange={handleChange}
                      className="border border-gray-300 rounded p-3 focus:outline-none focus:border-bims-blue bg-white"
                      required
                    >
                      <option value="MBA">Master of Business Administration (MBA)</option>
                      <option value="IMBA">Integrated MBA</option>
                      <option value="BBA">BBA</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 2: Personal Details */}
              <div>
                <h3 className="text-lg font-bold text-bims-blue border-b pb-2 mb-4">2. Personal Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">First Name *</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="border border-gray-300 rounded p-3 focus:outline-none focus:border-bims-blue" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">Last Name *</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="border border-gray-300 rounded p-3 focus:outline-none focus:border-bims-blue" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">Father's Name *</label>
                    <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} className="border border-gray-300 rounded p-3 focus:outline-none focus:border-bims-blue" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">Date of Birth *</label>
                    <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="border border-gray-300 rounded p-3 focus:outline-none focus:border-bims-blue" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">Gender *</label>
                    <select name="gender" value={formData.gender} onChange={handleChange} className="border border-gray-300 rounded p-3 focus:outline-none focus:border-bims-blue bg-white" required>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">Category</label>
                    <select name="category" value={formData.category} onChange={handleChange} className="border border-gray-300 rounded p-3 focus:outline-none focus:border-bims-blue bg-white">
                      <option value="General">General</option>
                      <option value="OBC">OBC</option>
                      <option value="SC">SC</option>
                      <option value="ST">ST</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 3: Contact Details */}
              <div>
                <h3 className="text-lg font-bold text-bims-blue border-b pb-2 mb-4">3. Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">Email Address *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="border border-gray-300 rounded p-3 focus:outline-none focus:border-bims-blue" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">Mobile Number *</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="border border-gray-300 rounded p-3 focus:outline-none focus:border-bims-blue" required />
                  </div>
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-sm font-semibold text-gray-700">Address *</label>
                    <textarea name="address" value={formData.address} onChange={handleChange} rows="3" className="border border-gray-300 rounded p-3 focus:outline-none focus:border-bims-blue" required></textarea>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">City *</label>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} className="border border-gray-300 rounded p-3 focus:outline-none focus:border-bims-blue" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">State *</label>
                    <input type="text" name="state" value={formData.state} onChange={handleChange} className="border border-gray-300 rounded p-3 focus:outline-none focus:border-bims-blue" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">Zip Code *</label>
                    <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} className="border border-gray-300 rounded p-3 focus:outline-none focus:border-bims-blue" required />
                  </div>
                </div>
              </div>

              {/* Section 4: Academic Details */}
              <div>
                <h3 className="text-lg font-bold text-bims-blue border-b pb-2 mb-4">4. Academic Background</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">10th Board Name *</label>
                    <input type="text" name="tenthBoard" value={formData.tenthBoard} onChange={handleChange} placeholder="e.g. CBSE, ICSE, BSE" className="border border-gray-300 rounded p-3 focus:outline-none focus:border-bims-blue" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">10th Percentage/CGPA *</label>
                    <input type="text" name="tenthPercentage" value={formData.tenthPercentage} onChange={handleChange} className="border border-gray-300 rounded p-3 focus:outline-none focus:border-bims-blue" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">12th Board Name *</label>
                    <input type="text" name="twelfthBoard" value={formData.twelfthBoard} onChange={handleChange} placeholder="e.g. CBSE, CHSE" className="border border-gray-300 rounded p-3 focus:outline-none focus:border-bims-blue" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">12th Percentage/CGPA *</label>
                    <input type="text" name="twelfthPercentage" value={formData.twelfthPercentage} onChange={handleChange} className="border border-gray-300 rounded p-3 focus:outline-none focus:border-bims-blue" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">Graduation Degree (if applicable)</label>
                    <input type="text" name="graduationDegree" value={formData.graduationDegree} onChange={handleChange} placeholder="e.g. B.Com, B.Tech, BBA" className="border border-gray-300 rounded p-3 focus:outline-none focus:border-bims-blue" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">Graduation Percentage/CGPA</label>
                    <input type="text" name="graduationPercentage" value={formData.graduationPercentage} onChange={handleChange} className="border border-gray-300 rounded p-3 focus:outline-none focus:border-bims-blue" />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full md:w-auto bg-bims-green hover:bg-green-600 text-white font-bold py-4 px-12 rounded shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'} <Send size={20} />
                </button>
              </div>

            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ApplyOnline;