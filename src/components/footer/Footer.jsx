import React from 'react';
import './Footer.scss';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import { BsTiktok } from 'react-icons/bs';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='container'>
				<hr />
				<div className='bottom'>
					<div className='left'>
						<span>© Listerbox. 2023</span>
						<span>Terms and Conditions</span>
					</div>
					<div className='right'>
						<div className='social'>
							<AiOutlineInstagram size={20} />
							<FiTwitter size={20} />
							<BsTiktok size={20} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
