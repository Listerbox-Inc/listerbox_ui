import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';
import logo from '/img/logo.svg';
import logoWhite from '/img/logo_white.svg';
import userImg from '/img/user.jpg';

const Navbar = () => {
	const [active, setActive] = useState(false);
	const [open, setOpen] = useState(false);

	const { pathname } = useLocation();

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
		<div className={active || pathname !== '/' ? 'navbar active' : 'navbar'}>
			<div className='container'>
				<div className='logo'>
					<Link to='/' className='link'>
						<img
							className='icon'
							// src={!active ? logoWhite : logo}
							src={active || pathname !== '/' ? logo : logoWhite}
							alt='Listerbox Logo'
						/>
					</Link>
				</div>
				<div className='links'>
					<span>Discover</span>
					{!currentUser?.isOwner && <span>Become a renter</span>}
					{/* <span>Sign in</span> */}
					<Link className='link' to='/login'>
						Sign in
					</Link>
					{!currentUser && <button>Join</button>}
					{currentUser && (
						<div className='user' onClick={() => setOpen(!open)}>
							<img src={userImg} alt='User Image' />
							<span>{currentUser?.username}</span>
							{open && (
								<div className='options'>
									{currentUser?.isOwner && (
										<>
											<Link className='link' to='/mylistings'>
												Listings
											</Link>
											<Link className='link' to='/add'>
												Add New Listing
											</Link>
										</>
									)}
									<Link className='link' to='/orders'>
										Orders
									</Link>
									<Link className='link' to='/messages'>
										Messages
									</Link>
									<Link className='link' to='/'>
										Logout
									</Link>
								</div>
							)}
						</div>
					)}
				</div>
			</div>
			{(active || pathname !== '/') && (
				<>
					<hr />
					{/* <div className='menu'>
						<span>Test</span>
						<span>Tes2</span>
					</div> */}
				</>
			)}
		</div>
	);
};

export default Navbar;
