import React from 'react';

import './sidebar.css'

interface Props {}

const SideBar: React.FC<Props> = (props) => {
  return (
    <div className='sidebar'>
      <ul>
        <li>Menu 1</li>
        <li>Menu 2</li>
        <li>Menu 3</li>
      </ul>
    </div>
  )
}

export default SideBar
