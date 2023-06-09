import { SearchBar } from '../elements/SearchBar';

export const Header = () => {
  return (
    <header className='flex items-center bg-red-100'>
      <h1>Header</h1>
      <SearchBar />
    </header>
  );
};
