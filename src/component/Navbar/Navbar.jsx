import React, { useState } from 'react';
import './Navbar.css'
import { IoIosMenu } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate()
    const [isVerticalVisible, setVerticalVisible] = useState(false);
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const toggleVertical = () => {
        setVerticalVisible(!isVerticalVisible);
    };

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    {/*?php
session_start();
?*/}
    return (
        <div className='navbar'>
            {/* <style dangerouslySetInnerHTML={{__html: "\n\n\n" }} /> */}
            <ul className="horizontal">
                <ul className='horizontal-one'>
                    <li className=" horizontal_li"> <a className="sheets" onClick={toggleVertical}>Sheets</a></li>
                    <li className=" horizontal_li bid_class"> Bid Estimator</li>
                </ul>
                <div className="toggleNavbar" onClick={() => setIsMenuVisible(!isMenuVisible)}>
                    <IoIosMenu className='toggleNavbarIcon' />
                </div>
                    <ul className={`horizontal-two ${isMenuVisible ? 'horizontal-three' : ''} `}>
                        <li className=" horizontal_li"><a className="active " href="http://localhost/erp/GrowMark-1.0.0/index.html">Home</a></li>
                        <li className=" horizontal_li">username<a href="">{/*?php  if(isset($_SESSION['username'])){ echo $_SESSION['username'] ; } else { echo "Tester" ; } ?*/}</a></li>
                        <li className=" horizontal_li">access<a href="">{/*?php  if(isset($_SESSION['access'])){ echo $_SESSION['access'] ; } else { echo "Tester" ; } ?*/}</a></li>
                        {/*?php  if(isset($_SESSION['access']) && $_SESSION['access'] == 'admin') { ?*/}
                        <li className=" horizontal_li"><a href="http://localhost/erp/allpersons.html.php">Admin Panel</a></li>
                        {/*?php } if(isset($_SESSION['access'])) {?*/}
                        <li className=" horizontal_li"> <a href="logout.html.php" className="menu-link">logout</a></li>
                        {/*?php  } ?*/}
                    </ul>
                {/* {isMenuVisible && (
                )} */}
            </ul>
            <ul className={`vertical ${isVerticalVisible ? 'Visible' : ''}`}>
                {/*?php  if(isset($_SESSION['access']) && $_SESSION['access'] == 'admin' ){ ?*/}
                <li className="menu-item vertical_li"><a onClick={()=>navigate('/jobinfo')} className="menu-link ">Job Info</a></li>
                <li className="menu-item vertical_li"><a onClick={()=>navigate('/round')} className="menu-link">Round</a></li>
                <li className="menu-item vertical_li"><a onClick={()=>navigate('/rectangular')} className="menu-link">Rectangular</a></li>
                <li className="menu-item vertical_li"><a onClick={()=>navigate('/circle')} className="menu-link">Circle</a></li>
                <li className="menu-item vertical_li"><a onClick={()=>navigate('/aluminium')} className="menu-link">Aluminium</a></li>
                <li className="menu-item vertical_li"><a onClick={()=>navigate('/stainless-steel')} className="menu-link">Stainless Steel</a></li>
                <li className="menu-item vertical_li"><a onClick={()=>navigate('/black-iron')} className="menu-link">Black Iron</a></li>
                <li className="menu-item vertical_li"><a onClick={()=>navigate('/takeoff')} className="menu-link">Take off Summary</a></li>
                <li className="menu-item vertical_li"><a onClick={()=>navigate('/estimated-sheet')} className="menu-link">Estimate Sheet</a></li>
                <li className="menu-item vertical_li"><a href="man_hours.html.php" className="menu-link">Man Hours</a></li>
                <li className="menu-item vertical_li"><a href="liner.html.php" className="menu-link">Liner</a></li>
                <li className="menu-item vertical_li"><a href="revision_history.html.php" className="menu-link">Revision History</a></li>
                <li className="menu-item vertical_li"><a href="casco.html.php" className="menu-link">Casco</a></li>
                <li className="menu-item vertical_li"><a href="svs.html.php" className="menu-link">SVS</a></li>
                <li className="menu-item vertical_li"><a href="budget.html.php" className="menu-link">Budget</a></li>
                <li className="menu-item vertical_li"><a href="price_increase.html.php" className="menu-link">Price Increases</a></li>
                <br />
                {/*?php   } else if ( isset($_SESSION['access']) && $_SESSION['access'] == 'manager' )  { ?*/}
                <li className="menu-item vertical_li"><a href="revision_history.html.php" className="menu-link">Revision History</a></li>
                <li className="menu-item vertical_li"><a href="casco.html.php" className="menu-link">Casco</a></li>
                <li className="menu-item vertical_li"><a href="svs.html.php" className="menu-link">SVS</a></li>
                <li className="menu-item vertical_li"><a href="budget.html.php" className="menu-link">Budget</a></li>
                <li className="menu-item vertical_li"><a href="price_increase.html.php" className="menu-link">Price Increases</a></li>
                {/*?php   } else if ( isset($_SESSION['access']) && $_SESSION['access'] == 'engr' )  { ?*/}
                <li className="menu-item vertical_li"><a href="jobinfo.html.php" className="menu-link ">Job Info</a></li>
                <li className="menu-item vertical_li"><a href="round.html.php" className="menu-link">Round</a></li>
                <li className="menu-item vertical_li"><a href="rectangular.html.php" className="menu-link">Rectangular</a></li>
                <li className="menu-item vertical_li"><a href="circle.html.php" className="menu-link">Circle</a></li>
                <li className="menu-item vertical_li"><a href="aluminium.html.php" className="menu-link">Aluminium</a></li>
                <li className="menu-item vertical_li"><a href="stainless_steel.html.php" className="menu-link">Stainless Steel</a></li>
                <li className="menu-item vertical_li"><a href="black_iron.html.php" className="menu-link">Black Iron</a></li>
                <li className="menu-item vertical_li"><a href="take_off_summary.html.php" className="menu-link">Take off Summary</a></li>
                <li className="menu-item vertical_li"><a href="estimate.html.php" className="menu-link">Estimate</a></li>
                <li className="menu-item vertical_li"><a href="man_hours.html.php" className="menu-link">Man Hours</a></li>
                <li className="menu-item vertical_li"><a href="liner.html.php" className="menu-link">Liner</a></li>
                {/*?php  } else { ?*/} <li className="menu-item vertical_li"><a href="http://localhost/erp/GrowMark-1.0.0/index.html" className="menu-link ">Empty</a></li> {/*?php  } ?*/}
            </ul>
        </div>

    )
}

export default Navbar
