import React from 'react';

import bg_image from '../../assets/images/bg.png';

const HomePage: React.FC = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg_image})` }}
      className="bg-repeat h-svh overflow-y-auto scrollbar-thin scrollbar-thumb-accent-dark 
      scrollbar-track-accent-light overflow-x-hidden
      space-y-6 py-6 px-4 sm:py-8 sm:px-16 md:py-10 md:px-20 lg:py-12 lg:px-32"
    >
      <h1>Welcome to the Wedding Invitation Site</h1>
      <p>
        Please use the correct invitation link to access the invitation page.
      </p>
    </div>
  );
};

export default HomePage;
