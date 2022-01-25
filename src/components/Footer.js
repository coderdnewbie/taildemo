import React from 'react';

function Footer() {
    return (	
        <footer className="p-6 dark:bg-coolGray-800 dark:text-coolGray-100">
            <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
                <div className="flex flex-col space-y-4">
                    <h2 className="font-medium">Getting started</h2>
                    <div className="flex flex-col space-y-2 text-sm dark:text-coolGray-400">
                        <a rel="noopener noreferrer" href="#link4">Installation</a>
                        <a rel="noopener noreferrer" href="#link5">Release Notes</a>
                        <a rel="noopener noreferrer" href="#link6">Upgrade Guide</a>
                        <a rel="noopener noreferrer" href="#link7">Using with Preprocessors</a>
                        <a rel="noopener noreferrer" href="#link8">Optimizing for Production</a>
                        <a rel="noopener noreferrer" href="#link9">Browser Support</a>
                        <a rel="noopener noreferrer" href="#linkA">IntelliSense</a>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="font-medium">Core Concepts</h2>
                    <div className="flex flex-col space-y-2 text-sm dark:text-coolGray-400">
                        <a rel="noopener noreferrer" href="#linkB">Utility-First</a>
                        <a rel="noopener noreferrer" href="#linkC">Responsive Design</a>
                        <a rel="noopener noreferrer" href="#linkD">Hover, Focus, &amp; Other States</a>
                        <a rel="noopener noreferrer" href="#linkE">Dark Mode</a>
                        <a rel="noopener noreferrer" href="#linkF">Adding Base Styles</a>
                        <a rel="noopener noreferrer" href="#linkG">Extracting Components</a>
                        <a rel="noopener noreferrer" href="#linkH">Adding New Utilities</a>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="font-medium">Customization</h2>
                    <div className="flex flex-col space-y-2 text-sm dark:text-coolGray-400">
                        <a rel="noopener noreferrer" href="#">Configuration</a>
                        <a rel="noopener noreferrer" href="#">Theme Configuration</a>
                        <a rel="noopener noreferrer" href="#">Breakpoints</a>
                        <a rel="noopener noreferrer" href="#">Customizing Colors</a>
                        <a rel="noopener noreferrer" href="#">Customizing Spacing</a>
                        <a rel="noopener noreferrer" href="#">Configuring Variants</a>
                        <a rel="noopener noreferrer" href="#">Plugins</a>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="font-medium">Community</h2>
                    <div className="flex flex-col space-y-2 text-sm dark:text-coolGray-400">
                        <a rel="noopener noreferrer" href="#">GitHub</a>
                        <a rel="noopener noreferrer" href="#">Discord</a>
                        <a rel="noopener noreferrer" href="#">Twitter</a>
                        <a rel="noopener noreferrer" href="#">YouTube</a>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center px-6 pt-12 text-sm">
                <span className="dark:text-coolGray-400">© All Rights Reserved.</span>
            </div>
        </footer>
    );
}

export default Footer;