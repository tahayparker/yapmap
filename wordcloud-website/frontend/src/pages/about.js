import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function About() {
    const [darkMode, setDarkMode] = useState(true);
    return (
        <div className="min-h-screen bg-white text-custom-800 dark:bg-custom-900 dark:text-white flex flex-col justify-between">
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />

            <div className="flex-grow flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-extrabold">About YapMap</h1>
                <div className="mt-4 text-lg w-full max-w-2xl">
                    <section className="bg-white dark:bg-custom-800 shadow-md rounded-lg p-6">
                        <h2 className="text-2xl font-bold mb-4">1. Why YapMap?</h2>
                        <p className="text-custom-600 dark:text-custom-300">
                            We created YapMap to transform text into visually engaging, intuitive representations. Word clouds help you quickly understand the most prominent themes and keywords in any text, whether it&apos;s a document, article, speech, or creative writing.
                        </p>
                        <p className="text-custom-600 dark:text-custom-300 mt-2">
                            Our mission is to make data visualization simple, accessible, and fun for everyone – from students and researchers to writers and professionals.
                        </p>
                        <br />
                        <p className="text-custom-600 dark:text-custom-300">
                            The above section is completely AI generated. So is the rest of the code. And the website. And this line.
                            This was a fun project to see how good GitHub Copilot is at generating code.
                            <br />
                            This entire website was coded in one evening. I&apos;m not a web developer, but I wanted to see how easy it would be to make a website using Copilot.
                            <br /><br />
                            personally i made this because i love wordclouds because they&apos;re a fun way to see what word has been yapped the most.
                        </p>
                    </section>
                    <br />
                    <section className="bg-white dark:bg-custom-800 shadow-md rounded-lg p-6">
                        <h2 className="text-2xl font-bold mb-4">2. How to Use</h2>
                        <ol className="list-decimal list-inside text-custom-600 dark:text-custom-300 space-y-2">
                            <li>Paste or type the text you want to visualize into the input box. Alternatively, upload a text (.txt) file.</li>
                            <li>Click &quot;Generate YapMap&quot; to create your visualization.</li>
                            <li>Download your wordcloud.</li>
                        </ol>
                        <p className="text-custom-600 dark:text-custom-300 mt-2">
                            No account required. No data stored. Simple and straightforward.
                        </p>
                    </section>
                    <br />
                    <section className="bg-white dark:bg-custom-800 shadow-md rounded-lg p-6">
                        <h2 className="text-2xl font-bold mb-4">3. Credits</h2>
                        <p className="text-custom-600 dark:text-custom-300">
                            YapMap is a passion project created to make text visualization accessible to everyone.
                        </p>
                        <ul className="list-disc list-inside text-custom-600 dark:text-custom-300 mt-2">
                            <li>Design & Development: GitHub Copilot</li>
                            <li>Inspiration: TP&apos;s brain</li>
                            <li>Special thanks to <a href="https://pypi.org/project/wordcloud/" className="text-blue-600 hover:underline">this</a> open-source library.</li>
                        </ul>
                        <p className="text-custom-600 dark:text-custom-300 mt-2">
                            If you find our tool helpful, we&apos;d love to hear from you!
                        </p>
                    </section>
                    <br />
                    <div className="text-center text-custom-600 dark:text-custom-300">
                        <p>Last Updated: December 12, 2024</p>
                        <p className="mt-2">Making text visualization simple and intuitive.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}