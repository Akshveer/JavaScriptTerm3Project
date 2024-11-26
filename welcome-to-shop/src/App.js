import React, { useState } from 'react';
import LogoDisplay from './logoDisplay'; // Splash screen component
import './logoDisplay'; // For optional global styles

function App() {
    const [showLogo, setShowLogo] = useState(true);

    // Callback to hide the splash screen after it finishes
    const handleLogoComplete = () => {
        setShowLogo(false);
    };

    return (
        <div className="App">
            {showLogo ? (
                <LogoDisplay onComplete={handleLogoComplete} />
            ) : (
                // Display the external index.html using an iframe
                <div style={{ width: '100%', height: '100vh' }}>
                    <iframe
                        src="C:\Software\Github\JavaScriptTerm3Project\JavaScriptTerm3Project\index.html" // Update with actual path
                        title="Piece Of Cake"
                        style={{ width: '100%', height: '100%', border: 'none' }}
                    ></iframe>
                </div>
            )}
        </div>
    );
}

export default App;
