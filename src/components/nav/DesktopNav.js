import Link from "next/link";
import PropTypes from "prop-types";
import {Row, Col} from "react-bootstrap";
import styles from './DesktopNav.module.css'; 
import { useState } from "react";

const DesktopNav = ({className, navData}) => {
    const [activeLink, setActiveLink] = useState('HI'); 

    const handleClick = (link) => {
        setActiveLink(link); 
    };
    return (
        <nav style={{
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            // padding: '10px',
            width: '200px'
        }}>
            <ul style={{
                listStyleType: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                justifyContent: 'space-between', // Distribute items along the main axis
            }}>
                <li style={{ 
                    flex: 1, 
                    flexBasis: '50%', 
                    borderRadius: '50px', 
                    backgroundColor: activeLink === 'HI' ? '#000000' : '#ffffff',
                    color: activeLink === 'HI' ? '#ffffff' : '#000000',
                    textAlign: 'center',
                    lineHeight: '30px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s',
                    height:'45px',
                    padding: '6px'
                }} onClick={() => handleClick('HI')}><a href="/" style={{fontWeight: 'bold',textDecoration: 'underline',color: activeLink === 'HI' ? '#ffffff' : '#000000',}}>Sportwear</a></li>
                <li style={{ 
                    flex: 1, 
                    flexBasis: '50%', 
                    borderRadius: '50px', 
                    backgroundColor: activeLink === 'Hello' ? '#000000' : '#ffffff',
                    color: activeLink === 'Hello' ? '#ffffff' : '#000000',
                    textAlign: 'center',
                    lineHeight: '30px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s',
                    height:'45px',
                    padding: '6px'
                }} onClick={() => handleClick('Hello')}><a href="/"  style={{fontWeight: 'bold',textDecoration: 'underline',color: activeLink === 'Hello' ? '#ffffff' : '#000000'}}>Nutrition</a></li>
            </ul>
        </nav>
        
        
          
    );
};

// {navData && (
//     navData.map(navItem => (
//         <li key={navItem.id}
//             className={`dropdown ${navItem.submenu ? 'tt-submenu' : ''} ${navItem.mega_menu ? 'megamenu' : 'tt-megamenu-col-01'}`}
//         >
//             <a>Hello</a>
//             <a>Hello</a>
//             <Link href={navItem.link}>{navItem.text}</Link> */}
//             {navItem?.submenu && (
//                 <div className="dropdown-menu">
//                     <Row>
//                         <Col lg={12}>
//                             <Row className="tt-col-list">
//                                 {navItem?.submenu && navItem?.submenu.map(subItem => (
//                                     <div className={`col-sm-${navItem?.mega_menu ? 3 : 12}`}
//                                          key={subItem.id}>
//                                         <h6 className="tt-title-submenu">
//                                             <Link href="/">
//                                                 <span>{subItem.title}</span>
//                                             </Link>
//                                         </h6>
//                                         <ul className="tt-megamenu-submenu">
//                                             {subItem?.lists.map((item, index) => (
//                                                 <li key={index} className={item.badge}>
//                                                     <Link href={item.link}>
                                                        
//                                                             {item.text}
//                                                             {item.badge && (
//                                                                 <span
//                                                                     className={`tt-badge tt-${item.badge}`}>
//                                                                 {item.badge === 'coming_soon' && 'COMING SOON'}
//                                                                     {item.badge === 'popular' && 'POPULAR'}
//                                                                     {item.badge === 'hot' && 'HOT'}
//                                                                     {item.badge === 'new' && 'NEW'}
//                                                             </span>
//                                                             )}
                                                        
//                                                     </Link>
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                 ))}

//                                 {navItem?.promo && (
//                                     <Col lg={3}>
//                                         <Link href="/shop" className="tt-promo-02">
//                                             <img src={navItem?.promo} alt="promo"/>
//                                         </Link>
//                                     </Col>
//                                 )}
//                             </Row>
//                         </Col>
//                     </Row>
//                 </div>
//             )} 
//         </li>
//     ))
// )}


DesktopNav.propTypes = {
    className: PropTypes.string,
    navData: PropTypes.array.isRequired
}

export default DesktopNav;
