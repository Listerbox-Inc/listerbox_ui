import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Listings from './pages/listings/Listings';
import Listing from './pages/listing/Listing';
import Add from './pages/add/Add';
import Orders from './pages/orders/Orders';
import Messages from './pages/messages/Messages';
import Message from './pages/message/Message';
import MyListings from './pages/myListings/MyListings';
import './app.scss';

function App() {
	const Layout = () => {
		return (
			<div className='app'>
				<Navbar />
				<Outlet />
				<Footer />
			</div>
		);
	};

	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
			children: [
				{
					path: '/',
					element: <Home />,
				},
				{
					path: '/listings',
					element: <Listings />,
				},
				{
					path: '/listing/:id',
					element: <Listing />,
				},
				{
					path: '/orders',
					element: <Orders />,
				},
				{
					path: '/mylistings',
					element: <MyListings />,
				},
				{
					path: '/add',
					element: <Add />,
				},
				{
					path: '/messages',
					element: <Messages />,
				},
				{
					path: '/message/:id',
					element: <Message />,
				},
			],
		},
	]);

	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
