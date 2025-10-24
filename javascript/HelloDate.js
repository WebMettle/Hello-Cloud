//
// Copyright (c) 2025 by WebMettle Systems.
//

'use strict';

class HelloDate {

   #date = undefined
   #longFormatOptions = { weekday: 'long', month: 'long', day: '2-digit', year: 'numeric',
                          hour: '2-digit', minute: '2-digit', second: '2-digit' };

   constructor() {
      this.#date = new Date();
   };

   get year() {
      return this.#date.getFullYear();
   };

   get month() {
      return this.#date.getMonth() + 1;
   };

   get day() {
      return this.#date.getDate();
   };

   get longFormatDate() {
      return this.#date.toLocaleString('en-US', this.#longFormatOptions);
   };
};

export default HelloDate;
