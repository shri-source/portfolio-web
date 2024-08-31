import React from 'react';

function Resume() {
  const handleDownload = () => {
    alert('Resume downloaded successfully');
  };

  return (
    <div className="py-16 bg-blue-50">
    <div className='text-center m-5 text-2xl'>Click Resume To Download</div>
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="ml-80">
          <a
            href="/shrirammithe@gmail.com.pdf" 
            download
            onClick={handleDownload}
          >
            <img
              src="/shrirammithe@gmail.com.jpg" 
              alt="Resume"
              width="60%"
              height="200px"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
