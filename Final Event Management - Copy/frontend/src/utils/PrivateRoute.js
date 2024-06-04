import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = (props) => {
  const { user } = useSelector(state => state.auth);
  const nav = useNavigate(); 
  if (!user || user.role !== props.role) {
    return nav("/");
  }

  return props.children;
};

export default PrivateRoute;
