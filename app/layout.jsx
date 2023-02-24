import '@/styles/globals.css';
import { useRouter } from 'next/router'

import AdminLayout from './layouts/AdminLayout';
import LoginLayout from './layouts/LoginLayout';




export default function layout({ children}) {
  

  if (true) {
    return <LoginLayout />;
  }
  return <AdminLayout children={children} />;
}
