import { FormRow, FormRowSelect } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useLoaderData, useParams } from 'react-router-dom';
import { BOOK_TYPE } from '../../../utils/constants';
import { Form, useNavigation, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';

export const loader = async ({ params }) => {
  // try {
  //   const { data } = await customFetch.get(`/books/${params.id}`);
  //   return data;
  // } catch (error) {
  //   toast.error(error?.response?.data?.msg);
  //   return redirect('/dashboard/all-books');
  // }
  console.log(params);
  return null;
};
export const action = async () => {
  return null;
};
// export const action = async ({ request, params }) => {
//   const formData = await request.formData();
//   const data = Object.fromEntries(formData)
//   try {
//     await customFetch.patch(`/books/${params.id}`,data);
//     toast.success('könyv sikeresen szerkesztve');
//     return redirect('/dashboard/all-books');
//   } catch (error) {
//     toast.error(error?.response?.data?.msg);
//     return error;
//   }
// };

const EditBook = () => {
  const params = useParams();
  console.log(params);
    return <h1>EditBook</h1>;
  };
  
  export default EditBook;