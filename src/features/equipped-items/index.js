import React       from 'react';
import { connect } from 'react-redux';

import InventorySlot from './inventory-slot.png';

import './styles.css';

function EquippedItems(props) {
  return (
    <div className='equipped-items-container'>

      <div className='flex-row'>
        <div style={{
            backgroundImage: `url('${InventorySlot}')`,
            backgroundSize: 'contain',
            width: '40px',
            height: '40px'
          }} />
        <div style={{
            backgroundImage: `url('${InventorySlot}')`,
            backgroundSize: 'contain',
            width: '40px',
            height: '40px'
          }} />
      </div>

      <div className='flex-row'>
        <div style={{
            backgroundImage: `url('${InventorySlot}')`,
            backgroundSize: 'contain',
            width: '40px',
            height: '40px'
          }} />
        <div style={{
            backgroundImage: `url('${InventorySlot}')`,
            backgroundSize: 'contain',
            width: '40px',
            height: '40px'
          }} />
      </div>

    </div>
  );
}

const mapStateToProps = ({ stats }) => {
  return { stats };
}

export default connect(mapStateToProps)(EquippedItems);