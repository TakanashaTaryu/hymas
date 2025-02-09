import React from 'react';
import batt_empty from '/src/assets/icons/battery/empty.svg';

const Batt_empty: React.FC = () => {
  return (
    <div className="flex items-center bg-white rounded-2xl px-4 py-2 uppercase text-hijau-tua">
      <img className="w-9 h-9 mr-2 text-hijau-muda" src={batt_empty} alt="Battery Charging" />
      <div>
        <span className="block text-sm -mb-1">Baterai</span>
        <div className="text-xxxs">
          <span className="block">kosong</span>
        </div>
      </div>
    </div>
  );
};

export default Batt_empty;
