import React from 'react';

function Testimonials() {
  return (
    <div
      class=" ml-48 mt-6 max-w-3xl p-4 text-gray-800 bg-white rounded-lg shadow-md  shadow-cyan-700/50">
      <div class="mb-2">
        <div class="h-3 text-3xl text-left text-indigo-600">“</div>
        <p class="px-4 text-center text-gray-600">
          The Landscaping Professionals were quick, courteous and very helpful. They
          helped me restore my lawn and gardens completely after putting in my deck.
          I was worried it wouldn’t be done in time for my garden party, but they
          finished the job with time to spare!”
        </p>
        <div class="h-3 text-3xl text-right text-indigo-600">”</div>
        <div class="text-center">
          <h5 class="font-bold text-indigo-600">John Doe</h5>
          <p class="text-sm text-gray-600">CEO / Founder</p>
        </div>
      </div>
    </div>
    );
}

export default Testimonials;
