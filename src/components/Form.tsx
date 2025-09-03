import { useState } from 'react';

// Form for the "Recruiter"
const RecruiterForm = () => {
    // State for the inner tabs (SMS vs Email)
    const [verifyMethod, setVerifyMethod] = useState('sms');

    return (
        <div>
            <h1 className="text-2xl font-bold text-center mb-4">Recruiter Portal</h1>
            {/* Inner Tab Switcher */}
            <div className="flex border-b border-gray-700 mb-6">
                <button
                    onClick={() => setVerifyMethod('sms')}
                    className={`flex-1 py-2 text-center font-semibold transition-colors duration-300 ${verifyMethod === 'sms' ? 'text-white border-b-2 border-blue-500' : 'text-gray-400'}`}
                >
                    Verify with SMS
                </button>
                <button
                    onClick={() => setVerifyMethod('email')}
                    className={`flex-1 py-2 text-center font-semibold transition-colors duration-300 ${verifyMethod === 'email' ? 'text-white border-b-2 border-blue-500' : 'text-gray-400'}`}
                >
                    Verify with Email
                </button>
            </div>

            {/* Form Fields */}
            <form className="space-y-6">
                <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                    <input type="text" id="fullName" name="fullName"
                        className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">Company</label>
                    <input type="text" id="company" name="company"
                        className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                {/* Conditional Input based on verification method */}
                {verifyMethod === 'sms' && (
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone Number (with country code)</label>
                        <input type="tel" id="phone" name="phone" placeholder="+911234567890"
                            className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                )}
                {verifyMethod === 'email' && (
                     <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                        <input type="email" id="email" name="email" placeholder="you@company.com"
                            className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                )}

                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300">
                    Get Verification Code
                </button>
            </form>
        </div>
    );
};

// Form for "Anyone" / Job Seeker
const NormalForm = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-center mb-8">Ask Anything</h1>
            <form className="space-y-6">
                <div>
                    <label htmlFor="seekerName" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                    <input type="text" id="seekerName" name="seekerName"
                        className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                    <label htmlFor="seekerEmail" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                    <input type="email" id="seekerEmail" name="seekerEmail"
                        className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                 <div>
                    <label htmlFor="seekerMessage" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                    <textarea id="seekerMessage" name="seekerMessage" rows= {4} 
                        className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300">
                    {"Send Message"}
                </button>
            </form>
        </div>
    );
};


// Main Component to switch between the two forms
export const AuthPortal = () => {
    // State to manage which tab is active: 'seeker' or 'recruiter'
    const [activeTab, setActiveTab] = useState('recruiter');

    return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-lg p-8">
                {/* Main Tab Switcher */}
                <div className="flex justify-center border-b border-gray-700 mb-6">
                    <button
                        onClick={() => setActiveTab('seeker')}
                        className={`py-2 px-4 w-1/2 text-center font-semibold transition-colors duration-300 ${activeTab === 'seeker' ? 'border-b-2 border-blue-500 text-white' : 'text-gray-400'}`}
                    >
                        For Question
                    </button>
                    <button
                        onClick={() => setActiveTab('recruiter')}
                        className={`py-2 px-4 w-1/2 text-center font-semibold transition-colors duration-300 ${activeTab === 'recruiter' ? 'border-b-2 border-blue-500 text-white' : 'text-gray-400'}`}
                    >
                        For Recruiters
                    </button>
                </div>

                {/* Conditionally render the correct form based on the active tab */}
                {activeTab === 'seeker' && <NormalForm />}
                {activeTab === 'recruiter' && <RecruiterForm />}
            </div>
        </div>
    );
};

