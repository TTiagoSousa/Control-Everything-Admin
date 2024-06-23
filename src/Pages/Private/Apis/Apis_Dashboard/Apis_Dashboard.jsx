import React from 'react';
import './Apis_Dashboard.scss';
import { Link } from 'react-router-dom';

const Apis_Dashboard = () => {
  return (
    <div className='Apis_Dashboard'>
      <div className='Apis_List'>
        <div className='Card'>
          <span>Countries Api</span>
          <Link to="Countries_Api"><span>Link</span></Link>
        </div>
      </div>
    </div>
  )
};

export default Apis_Dashboard;