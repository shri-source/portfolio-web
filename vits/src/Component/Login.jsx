import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);

    // Ensure that the access key is correct
    formData.append("access_key", "51cb93bb-ea49-4d0b-96ad-3495410f863f");

    // Fetch request to Web3Forms API
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    // Check if the form submission was successful
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset(); // Reset form fields
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <Link to="contact">
        <div className="relative flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0">
          <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div className="mt-8 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
                  <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                    Get in touch:
                  </h1>
                  <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                    Fill in the form to start a conversation
                  </p>

                  <div className="flex items-center mt-8 text-gray-600">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 text-gray-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                      Navle Hospital Manaji Nagar Narhe, Pune
                    </div>
                  </div>

                  <div className="flex items-center mt-4 text-gray-600">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 text-gray-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                      +919370543421
                    </div>
                  </div>

                  <div className="flex items-center mt-2 text-gray-600">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 text-gray-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                      shrirammithe@gmail.com
                    </div>
                  </div>
                </div>

                <div>
                  <form onSubmit={onSubmit}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                    />
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      required
                    ></textarea>

                    <button type="submit">Submit Form</button>
                  </form>
                  <span>{result}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
