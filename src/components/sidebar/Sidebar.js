import React from 'react';
import './sidebar.css';
import SidebarRow from '../sidebarRow/SidebarRow'
import { Chat, EmojiFlags, ExpandMoreOutlined, LocalHospital, People, Storefront, VideoLibrary } from '@material-ui/icons';

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow title='Rdodolphe Augusto' src='https://scontent-cdt1-1.xx.fbcdn.net/v/t31.0-8/14102808_10209409120298044_5764867879980895526_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=2DEfCyaznxoAX8VOXkF&_nc_ht=scontent-cdt1-1.xx&oh=1773cf2564a9e917afaa734281d90d7d&oe=5F88350A' />
      <SidebarRow title='COVID-19 Information Center' Icon={LocalHospital} />
      <SidebarRow title='Pages' Icon={EmojiFlags} />
      <SidebarRow title='Friends' Icon={People} />
      <SidebarRow title='Messenger' Icon={Chat} />
      <SidebarRow title='Marketplace' Icon={Storefront} />
      <SidebarRow title='Videos' Icon={VideoLibrary} />
      <SidebarRow title='ExpandMore' Icon={ExpandMoreOutlined} />
    </div>
  )
}

export default Sidebar
