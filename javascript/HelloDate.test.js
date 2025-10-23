//
// Copyright (c) 2025 by WebMettle Systems.
//

import { test } from 'node:test';
import assert from 'node:assert';
import HelloDate from './HelloDate.js';

test('when longFormatDate is called, a string is returned', () => {
   const hd = new HelloDate();
   assert.notStrictEqual(hd.longFormatDate, null);
   assert.notStrictEqual(hd.longFormatDate, '');
});
