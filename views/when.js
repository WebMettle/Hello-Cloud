//
// Copyright (c) 2025 by WebMettle Systems.
//

import HelloDate from '../javascript/HelloDate.js';

const getWhen = () => {
   const hd = new HelloDate();
   return `${hd.longFormatDate}`;
};

export default getWhen;
