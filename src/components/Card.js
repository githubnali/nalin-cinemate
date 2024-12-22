import { Link } from 'react-router-dom';
import image_backup from '../assets/images/backup_img.png';

export const Card = ({ movie }) => {
  const { id, original_title, overview, poster_path } = movie;
  console.log(movie);
  const image = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : image_backup;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/movie/${id}`}>
        <img className="rounded-t-lg" src={image} alt={original_title} />
      </Link>
      <div className="p-5">
        <Link to={`/movie/${id}`}>
          <h5 className="text-left mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {original_title}
          </h5>
        </Link>
        <p className="text-left mb-3 font-normal text-gray-700 dark:text-gray-400">
          {overview}
        </p>
      </div>
    </div>
  );
};
