import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Privacy() {
    const [darkMode, setDarkMode] = useState(true);
    return (
        <div className="min-h-screen bg-white text-custom-800 dark:bg-custom-900 dark:text-white flex flex-col justify-between">
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <div className="flex-grow flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-extrabold">Privacy Policy</h1>
                <div className="mt-4 text-lg w-full max-w-2xl">
                    <section className="bg-white dark:bg-custom-800 shadow-md rounded-lg p-6">
                        <h2 className="text-2xl font-bold mb-4">Information Collection and Use</h2>

                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">No Data Storage</h3>
                                <p className="text-custom-600 dark:text-custom-300">
                                    Any files you upload to create your word cloud are processed temporarily and immediately deleted after generation. We do NOT store or retain any uploaded files.
                                </p>
                                <p className="text-custom-600 dark:text-custom-300 mt-2">
                                    The text you submit for word cloud creation is processed in real-time and is not saved or stored in any database or server.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-2">No Tracking</h3>
                                <p className="text-custom-600 dark:text-custom-300">
                                    We do not use any tracking technologies, including but not limited to:
                                </p>
                                <ul className="list-disc list-inside text-custom-600 dark:text-custom-300">
                                    <li>Google Analytics</li>
                                    <li>Cookies</li>
                                    <li>Web beacons</li>
                                    <li>User tracking pixels</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <br />
                    <section className="bg-white dark:bg-custom-800 shadow-md rounded-lg p-6">
                        <h2 className="text-2xl font-bold mb-4">Data Processing</h2>
                        <ol className="list-decimal list-inside text-custom-600 dark:text-custom-300">
                            <li>Your text or file is processed instantly</li>
                            <li>The word cloud is generated</li>
                            <li>All input data is immediately and permanently deleted from our servers</li>
                        </ol>
                    </section>
                    <br />
                    <section className="bg-white dark:bg-custom-800 shadow-md rounded-lg p-6">
                        <h2 className="text-2xl font-bold mb-4">Security and Third-Party Services</h2>
                        <p className="text-custom-600 dark:text-custom-300">
                            We use industry-standard encryption during processing and do not share, sell, or distribute any of your data with third-party services.
                        </p>
                    </section>
                    <br />
                    <div className="text-center text-custom-600 dark:text-custom-300">
                        <p>Last Updated: December 11, 2024</p>
                        <p className="mt-2">By using WhatYap, you consent to this privacy policy.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}