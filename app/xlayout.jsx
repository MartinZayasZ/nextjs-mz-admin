/* import '@/styles/globals.css';
import AdminLayout from './admin/AdminLayout';
import LoginLayout from './login/LoginLayout'; */

export default function layout({ children }) {
  console.log('Hola mundo')
  console.log(children)
  if (false) {
    return <LoginLayout />;
  }
  return <AdminLayout children={children} />;
}
