import React from "react";
import './style.css';
const Footer = () => {
  return (
      <div>
        <footer className="bg-neutral-900 text-white mt-10">
          <div className="container mx-auto px-6 pt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 text-left md:text-left align-items:center">

              {/* First Part: Website Description */}
              <div>
                <h5 className="uppercase font-bold mb-2.5">MCA Alumni Network</h5>
                <p className="mb-4">
                  MMMUT MCA Alumni Network, an exclusive platform that connects the alumni of the MCA department at Madan Mohan Malaviya University of Technology (MMMUT).
                </p>
              </div>

              {/* Second Part: About & Pages Links */}
              <div>
                <h5 className="uppercase font-bold mb-2.5">Quick Links</h5>
                <ul className="list-none mb-0">
                  <li>
                    <a href="/about-us" className="text-white hover:underline">About Us</a>
                  </li>
                  <li>
                    <a href="/register" className="text-white hover:underline">Become member</a>
                  </li>
                  <li>
                    <a href="/policy" className="text-white hover:underline">Our policy</a>
                  </li>
                </ul>
              </div>

              {/* Third Part: Helpdesk & Contact */}
              <div>
                <h5 className="uppercase font-bold mb-2.5">Help & Support</h5>
                <ul className="list-none mb-0">
                  <li>
                    <a href="/helpdesk" className="text-white hover:underline">Helpdesk</a>
                  </li>
                  <li>
                    <a href="/query" className="text-white hover:underline">Submit a Query</a>
                  </li>
                  <li>
                    <a href="/contact-us" className="text-white hover:underline">Contact Us</a>
                  </li>
                </ul>
              </div>

              {/* Fourth Part: Social Media */}
              <div>
                <h5 className="uppercase font-bold mb-2.5">Follow Us</h5>
                <div className="flex justify-center md:justify-start">
                  {/* Instagram */}
                  {/* Instagram */}
                  <a
                    href="#"
                    className="instagram-icon m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                    aria-label="Instagram"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="mx-auto h-full w-4"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="#"
                    className="linkedin-icon m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                    aria-label="LinkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="mx-auto h-full w-4"
                    >
                      <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zm-13.07 20.45h-3.77V9.03h3.77v11.42zM7.35 7.5c-1.21 0-2.18-.97-2.18-2.16 0-1.19.97-2.16 2.18-2.16 1.2 0 2.18.97 2.18 2.16s-.97 2.16-2.18 2.16zm14.27 12.95h-3.77v-5.55c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.65h-3.77V9.03h3.62v1.56h.05c.51-.97 1.75-2 3.59-2 3.84 0 4.55 2.53 4.55 5.83v6.03z" />
                    </svg>
                  </a>

                  {/* GitHub */}
                  <a
                    href="#"
                    className="github-icon m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                    aria-label="GitHub"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="mx-auto h-full w-4"
                    >
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.465-2.38 1.235-3.22-.123-.303-.535-1.527.117-3.18 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.005-.404 1.021.005 2.048.138 3.005.404 2.29-1.553 3.297-1.23 3.297-1.23.653 1.653.241 2.877.118 3.18.77.84 1.232 1.91 1.232 3.22 0 4.607-2.804 5.623-5.475 5.92.429.37.81 1.102.81 2.222 0 1.606-.015 2.897-.015 3.293 0 .32.217.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>

                  {/* Twitter */}
                  <a
                    href="#"
                    className="twitter-icon m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                    aria-label="Twitter"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="mx-auto h-full w-4"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.896-.957-2.173-1.555-3.591-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .385.044.76.128 1.122-4.087-.205-7.715-2.164-10.141-5.144-.423.725-.666 1.562-.666 2.457 0 1.697.865 3.194 2.178 4.075-.803-.026-1.56-.247-2.224-.616v.062c0 2.368 1.684 4.342 3.918 4.789-.41.111-.843.171-1.287.171-.314 0-.615-.031-.916-.086.617 1.926 2.407 3.329 4.526 3.366-1.662 1.304-3.757 2.082-6.035 2.082-.392 0-.779-.023-1.16-.067 2.152 1.382 4.709 2.188 7.457 2.188 8.947 0 13.837-7.407 13.837-13.837 0-.21 0-.423-.015-.635.951-.686 1.779-1.54 2.437-2.512z" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Copyright Statement */}
          <div className="p-4 text-center bg-black bg-opacity-20">
            © 2024 Copyright -
            <a
              className="text-white ml-3"
              href="http://www.mmmut.ac.in/ITCA_About"
            >
              MMMUT MCA Alumni Network
            </a>
          </div>
        </footer>
      </div>
  );
};

export default Footer;
