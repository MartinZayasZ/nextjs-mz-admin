import '@/styles/globals.css';
import AdminLayout from './AdminLayout';
import LoginLayout from './LoginLayout';

export default function layout({ children }) {
  console.log('Hola mundo')
  if(true) {
    return <LoginLayout/>;
  }
  return <AdminLayout children={children} />;
}
