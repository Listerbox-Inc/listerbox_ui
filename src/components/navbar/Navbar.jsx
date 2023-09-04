import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import logo from '../../public/img/logo.svg';
import logoWhite from '../../public/img/logo_white.svg';
import userImg from '../../public/img/user.jpg';

const Navbar = () => {
	const [active, setActive] = useState(false);
	const [open, setOpen] = useState(false);

	const isActive = () => {
		window.scrollY > 0 ? setActive(true) : setActive(false);
	};

	useEffect(() => {
		window.addEventListener('scroll', isActive);

		return () => {
			window.removeEventListener('scroll', isActive);
		};
	}, []);

	const currentUser = {
		id: 1,
		username: 'John Doe',
		isOwner: true,
	};

	return (
		<div className={active ? 'navbar active' : 'navbar'}>
			<div className='container'>
				<div className='logo'>
					{/* <Link to='/ '> */}
					<img
						className='icon'
						src={!active ? logoWhite : logo}
						alt='Listerbox Logo'
					/>
					{/* </Link> */}
				</div>
				<div className='links'>
					<span>Discover</span>
					{!currentUser?.isOwner && <span>Become a renter</span>}
					<span>Sign in</span>
					{!currentUser && <button>Join</button>}
					{currentUser && (
						<div className='user' onClick={() => setOpen(!open)}>
							<img src={userImg} alt='User Image' />
							<span>{currentUser?.username}</span>
							{open && (
								<div className='options'>
									{currentUser?.isOwner && (
										<>
											<span>Listings</span>
											<span>Add New Listing</span>
										</>
									)}
									<span>Orders</span>
									<span>Messages</span>
									<span>Logout</span>
								</div>
							)}
						</div>
					)}
				</div>
			</div>
			{active && (
				<>
					<hr />
					<div className='menu'>
						<span>Test</span>
						<span>Tes2</span>
					</div>
				</>
			)}
		</div>
	);
};

export default Navbar;
