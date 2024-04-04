import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center p-4 inset-x-0 bottom-0">
      <div>
        <h5 className="font-roboto font-bold">Contact Us</h5>
        <p>KennelSite Inc.</p>
        <p>123 Doggo Street</p>
        <p>Woof, Bark 10101</p>
        <p>Email: contact@kennelsite.com</p>
        <p>Phone: (555) 123-4567</p>
      </div>
      <div className="mt-4">
        © {new Date().getFullYear()} KennelSite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
