import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';

const App = () => {
  useEffect(() => {
    // Initialize EmailJS with the public key when the component mounts
    emailjs.init(process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY);
  }, []);

  return (
    <div>
      {/* Your component content */}
    </div>
  );
};

export default App;
