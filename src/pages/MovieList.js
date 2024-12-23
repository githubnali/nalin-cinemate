import { Card } from '../components';
import { useFetch, usePageTitle } from '../hooks';

export const MovieList = ({ apiPath, title }) => {
  //object destructring data as movie
  const { data: movies } = useFetch(apiPath);

  /*eslint-disable*/
  const pageTitle = usePageTitle(`${title}`);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap gap-5 other:justify-evenly">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
