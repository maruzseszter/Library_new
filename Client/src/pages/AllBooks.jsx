import { toast } from 'react-toastify';
import { BooksContainer, SearchContainer } from '../components';
import customFetch from '../utils/customFetch';
import { useLoaderData } from 'react-router-dom';
import { useContext, createContext } from 'react';

export const loader = async () => {
  try {
    const { data } = await customFetch.get('/books');
    return { data }
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AllBooks = () => {
  const { data } = useLoaderData();
  return (
    <>
      <SearchContainer />
      <BooksContainer />
    </>
  )
};

export default AllBooks;