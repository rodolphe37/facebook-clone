import React from 'react';
import './sidebar.css';
import SidebarRow from '../sidebarRow/SidebarRow'
import { Chat, EmojiFlags, ExpandMoreOutlined, LocalHospital, People, Storefront, VideoLibrary } from '@material-ui/icons';
import { useStateValue } from '../../StateProvider';

function Sidebar() {
  // eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <SidebarRow title={user.displayName} src={user.photoURL} />
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
