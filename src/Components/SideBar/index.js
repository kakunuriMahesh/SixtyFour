import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { RiComputerLine } from 'react-icons/ri';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { IoMdCalendar } from 'react-icons/io';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { HiMiniCurrencyDollar } from 'react-icons/hi2';
import { MdHeadphones } from 'react-icons/md';
import { IoSettingsSharp } from 'react-icons/io5';
import { TiThMenu } from 'react-icons/ti';
import { RxCross2 } from "react-icons/rx";


import Logo from '../Images/logo.png';
import './index.css';

const SideBar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <div  className={`sidebar-container sidebar ${expanded ? 'expanded' : 'collapsed'}`}>
        <div className="side-icons-container">
          <img src={Logo} alt="logo" className="logo" />
          <div className="item">
            <span>
              <IoSearch className="side-icon" />
            </span>
            <span className="name">Search</span>
          </div>
          <div className="item">
            <span>
              <RiComputerLine className="side-icon" />
            </span>
            <span className="name">Computer</span>
          </div>
          <div className="item">
            <span>
              <AiOutlineQuestionCircle className="side-icon" />
            </span>
            <span className="name">Question</span>
          </div>
          <div className="item">
            <span>
              <IoMdCalendar className="side-icon" />
            </span>
            <span className="name">Calendar</span>
          </div>
          <div className="item">
            <span>
              <HiOutlineBuildingOffice2 className="side-icon" />
            </span>
            <span className="name">Office</span>
          </div>
          <div className="item">
            <span>
              <HiMiniCurrencyDollar className="side-icon" />
            </span>
            <span className="name">Dollar</span>
          </div>
          <div className="item">
            <span>
              <MdHeadphones className="side-icon" />
            </span>
            <span className="name">Headphones</span>
          </div>
        </div>
        <div className="item-setting">
          <span>
            <IoSettingsSharp className="side-icon" />
          </span>
          <span className="name">Settings</span>
        </div>
      </div>
      <div className="menu" onClick={toggleSidebar}>
        {
            expanded?<RxCross2 className='click'/>:<TiThMenu/>
        }
        
      </div>
    </div>
  );
};

export default SideBar;
