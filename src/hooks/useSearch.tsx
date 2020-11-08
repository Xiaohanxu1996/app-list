import { useState } from 'react';
import Fuse from 'fuse.js';

type searchProps = {
  fuse: {
    search: (term: string) => object[];
  };
  data: object[];
  term: string;
};

type useSearchProps = {
  data: object[];
  options: object;
};

const search = ({ fuse, data, term }: searchProps) => {
  const results = fuse.search(term);
  return term ? results : data;
};

const useSearch = ({ data, options }: useSearchProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const fuse = new Fuse(data, options);
  const results = search({ fuse, data, term: searchTerm });
  const reset = () => setSearchTerm('');
  return { results, search: setSearchTerm, searchTerm, reset };
};

export default useSearch;
