import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginForm from '../pages/LoginPage';
import RegisterForm from '../pages/RegisterPage';

const AppRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/login' element={<LoginForm />} />
				<Route path='/register' element={<RegisterForm />} />
				<Route path='*' element={<Navigate replace to='/' />} />
			</Routes>
		</Router>
	);
};
export default AppRouter;
