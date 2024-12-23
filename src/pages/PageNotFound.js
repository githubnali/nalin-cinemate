import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks';
import errorImage from '../assets/images/error_not-found.avif';

export const PageNotFound = ({ title }) => {
  /*eslint-disable*/
  const pageTitle = usePageTitle(title);

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center m-4">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">
            404, Oops!
          </p>
          <div className="max-w-md">
            <img className="rounded" src={errorImage} alt="404 image" />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <button
              type="button"
              class="text-white bg-gradient-to-br from-purple-600
              to-blue-500 hover:bg-gradient-to-bl focus:ring-4
              focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800
              font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Back to Home
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};
