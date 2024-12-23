import { useSearchParams } from 'react-router-dom';
import { Card } from '../components';
import { useFetch, usePageTitle } from '../hooks';
// import { usePageTitle } from '../hooks/usePageTitle';

export const Search = ({ apiPath }) => {
  //get the search parameters
  const [searchParams] = useSearchParams();

  //get the query parameters
  const queryTerm = searchParams.get('q');

  /*eslint-disable*/
  const pageTitle = usePageTitle(`Search Result for ${queryTerm}`);

  //update data object as movie
  const { data: movies } = useFetch(apiPath, queryTerm);

  return (
    <main>
      <section className="py-7">
        <p className="text-left text-3xl text-gray-700 dark:text-white">
          {movies.length === 0
            ? `No Result found '${queryTerm}'`
            : `Result for '${queryTerm}'`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap gap-5">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
