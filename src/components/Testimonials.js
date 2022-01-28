import React from 'react';

function Testimonials() {
  return (
    <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
      <div
        class="p-4 text-gray-800 bg-white rounded-lg shadow-md  shadow-cyan-700/50">
        <div class="mb-2">
          <div class="h-3 text-3xl text-left text-indigo-600">“</div>
          <p class="px-4 text-center text-gray-600">
            The Professionals were quick, courteous and very helpful!”
          </p>
          <div class="h-3 text-3xl text-right text-indigo-600">”</div>
          <div class="text-center">
            <h5 class="font-bold text-indigo-600">John Doe</h5>
            <p class="text-sm text-gray-600">CEO / Founder</p>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Testimonials;
