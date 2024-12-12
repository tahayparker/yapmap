import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Terms() {
    const [darkMode, setDarkMode] = useState(true);
    return (
        <div className="min-h-screen bg-white text-custom-800 dark:bg-custom-900 dark:text-white flex flex-col justify-between">
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <div className="flex-grow flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-extrabold">Terms and Conditions</h1>
                <div className="mt-4 text-lg w-full max-w-2xl">
                    <section className="bg-white dark:bg-custom-800 shadow-md rounded-lg p-6">
                        <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                        <p className="text-custom-600 dark:text-custom-300">
                            Welcome to WhatYap. By using our service, you agree to the following terms and conditions.
                        </p>
                    </section>
                    <br />
                    <section className="bg-white dark:bg-custom-800 shadow-md rounded-lg p-6">
                        <h2 className="text-2xl font-bold mb-4">2. User Responsibilities</h2>
                        <p className="text-custom-600 dark:text-custom-300">
                            As a user, you agree to:
                        </p>
                        <ul className="list-disc list-inside text-custom-600 dark:text-custom-300">
                            <li>Provide only text you have the right to use</li>
                            <li>Not upload content that is offensive, illegal, or infringes on copyrights</li>
                            <li>Use the service for lawful purposes only</li>
                        </ul>
                    </section>
                    <br />
                    <section className="bg-white dark:bg-custom-800 shadow-md rounded-lg p-6">
                        <h2 className="text-2xl font-bold mb-4">3. Intellectual Property</h2>
                        <p className="text-custom-600 dark:text-custom-300">
                            The generated word clouds are created by you and can be used as you see fit. We claim no ownership of the resulting visualizations.
                        </p>
                    </section>
                    <br />
                    <section className="bg-white dark:bg-custom-800 shadow-md rounded-lg p-6">
                        <h2 className="text-2xl font-bold mb-4">4. Limitation of Liability</h2>
                        <p className="text-custom-600 dark:text-custom-300">
                            WhatYap provides the service &quot;as is&quot; without any warranties. We are not responsible for any damages or losses resulting from the use of our service.
                        </p>
                    </section>
                    <br />
                    <section className="bg-white dark:bg-custom-800 shadow-md rounded-lg p-6">
                        <h2 className="text-2xl font-bold mb-4">5. Changes to Terms</h2>
                        <p className="text-custom-600 dark:text-custom-300">
                            We reserve the right to modify these terms at any time. Continued use of the service constitutes acceptance of any changes.
                        </p>
                    </section>
                    <br />
                    <div className="text-center text-custom-600 dark:text-custom-300">
                        <p>Last Updated: December 11, 2024</p>
                        <p className="mt-2">By using WhatYap, you agree to these Terms and Conditions.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}