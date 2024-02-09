import { FaSuitcaseRolling, FaCalendarCheck, FaUser, FaBookOpen } from 'react-icons/fa';
import { useLoaderData, redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import Wrapper from '../assets/wrappers/StatsContainer';
import { toast } from 'react-toastify';
import { StatItem } from '../components';

export const loader = async () => {
  try {
    const response = await customFetch.get('/users/admin/app-stats');
    return response.data;
  } catch (error) {
    toast.error('Nincs jogosultságod az oldal megtekintéséhez');
    return redirect('/dashboard');
  }
};

const Admin = () => {
  const { users, books } = useLoaderData();
  return (
    <Wrapper>
      <StatItem
        title='felhasználók'
        count={users}
        color="#e9b949"
        bcg='#fcefc7'
        icon={<FaUser />}
      />
      <StatItem
        title='könyvek'
        count={books}
        color="#647acb"
        bcg='#e0e8f9'
        icon={<FaBookOpen />}
      />
    </Wrapper>
  );
};

export default Admin;
