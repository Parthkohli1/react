import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElement';

const Navbar = () => {
return (
	<Nav >
		<Bars />

		<NavMenu>
		<NavLink to='/' activeStyle style={{color:'grey' }}>
			Home
		</NavLink>
		
		<NavLink to='/register' activeStyle>
			Register
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/login'>Login</NavBtnLink>
		</NavBtn>
	</Nav>
	
);
};

export default Navbar;
