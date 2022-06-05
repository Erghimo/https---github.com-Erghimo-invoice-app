import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

const AppRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<LoginPage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/register' element={<RegisterPage />} />
				<Route path='*' element={<Navigate replace to='/' />} />
			</Routes>
		</Router>
	);
};
export default AppRouter;
