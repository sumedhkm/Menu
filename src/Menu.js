import React, { useState } from "react";
import "./Menu.css"; 
import { FaCaretUp } from "react-icons/fa";


const Menu = () => {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <div className="menu-container">
      <div className="dropdown">
        <ul className="dropdown-menu">
        <li className="submenu-item">Deposition <FaCaretUp />
        </li>

          <li className="dropdown-item">
            <button onClick={() => toggleMenu("interested")} className="menu-btn">
              Interested ▸
            </button>
            

            {openMenus["interested"] && (
              <ul className="submenu">
                <li className="submenu-item">Project 1</li>
                <li className="submenu-item">Project 2</li>
                <li className="submenu-item">Project 3</li>
                <li className="dropdown-item">
                  <button onClick={() => toggleMenu("executive")} className="menu-btn">
                    Executive ▸
                  </button>

                  {openMenus["executive"] && (
                    <ul className="submenu">
                      <li className="submenu-item">Executive one</li>
                      <li className="submenu-item">Executive two</li>
                      <li className="submenu-item">Executive three</li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

           <li className="submenu-item">Not Interested</li>
          <li className="submenu-item">Call Back</li>
          <li className="submenu-item">Follow Up</li>
          <li className="submenu-item">Call Not Response</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
