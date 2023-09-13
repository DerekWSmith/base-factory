import React from 'react';
import NavbarLink from './NavbarLink';

import {Col, Row} from 'react-bootstrap';

import Logo from '../logoComponent'; // Create a LogoComponent to display the logo


// import { useDispatch } from 'react-redux';
// import { logout } from '../../../store/AuthSlice.js';
// import logoSrc from '../../../assets/mm_logo.png';
// import ActionSearch from '../ActionSearch/ActionSearch';
// const logoSrc = '' ;
// const handleLogout = {}
const Navbar = () => {
    // const dispatch = useDispatch();
    // const handleLogout = () => dispatch(logout());

    return (
        <>
        <Row className='bg-light-subtle shadow-sm '>


            <Row className='w-100 bg-dark-subtle bg-opacity-50 align-items-center'>
                <Col xs={12} md={10} className='mb-2 mb-md-0'>
                    <a href={'/'}>
                        <Logo/>
                    </a>
                </Col>
                <Col xs={12} md={1} className='text-end'>
                    <NavbarLink  title={'Spreadsheet'} link={'/spread'}/>
                </Col>


                    <Col xs={12} md={1} className='text-end'>
                    <NavbarLink title={'UnSpread Sheet'} link={'/unspread/'}/>

                </Col>

            </Row>
        </Row>
</>
)
    ;
};

export default Navbar;
