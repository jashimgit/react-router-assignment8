import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
const Nav = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark myNavColor' >
            <div className='container'>
                <a className='navbar-brand' href='/'>
                    Quick BD Team
				</a>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div
                    className='collapse navbar-collapse'
                    id='navbarSupportedContent'
                >
                    <ul className='navbar-nav ml-auto'>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/'>
                                Home
							</Link>
                        </li>
                        <li className="nav-item">
                        <Link className='nav-link' to='/about'>
                                About
							</Link>
                        </li>


                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
