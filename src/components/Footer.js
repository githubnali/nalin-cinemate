import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className=" bg-white shadow dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center gap-6 md:flex-row md:justify-between p-4">
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025-
          <Link to="/" className="hover:underline">
            Nalin Cinemate
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a
              href="https://www.instagram.com/"
              className="hover:underline me-4 md:me-6"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/nagaraju-nali-98a037172/"
              className="hover:underline me-4 md:me-6"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/githubnali"
              className="hover:underline me-4 md:me-6"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://mail.google.com/mail/u/0/?fs=1&to=nagarajunnr341@gmail.com&su=SUBJECT&body=BODY&tf=cm"
              className="hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
