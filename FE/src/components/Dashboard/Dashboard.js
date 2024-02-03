import React from 'react';
import QRCodeGenerator from './QRCodeGenerator';
import "./Dashboard.css"
import { Typography } from '@mui/material';

const Dashboard = () => {
  const qrCodeData = 'https://google.com';
  const retailer = 'XYZ Restaurant';

  return (
    <div className='dasboard__cont'>
      <QRCodeGenerator data={qrCodeData} retailer={retailer} />
    </div>
  );
};

export default Dashboard;