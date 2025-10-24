//
// Copyright (c) 2025 by WebMettle Systems.
//

import { test } from 'node:test';
import assert from 'node:assert';
import HelloDate from './HelloDate.js';

test('when year is called, an integer is returned', () => {
   const hd = new HelloDate();
   assert.strictEqual(Number.isInteger(hd.year), true, 'year must be an integer');
});

test('when month is called, valid value is returned', () => {
   const hd = new HelloDate();
   assert.strictEqual(Number.isInteger(hd.month), true, 'month must be an integer');
   assert.ok(hd.month >= 1 && hd.month <= 12, 'month must be between 1 and 12');
});

test('when day is called, valid value is returned', () => {
   const hd = new HelloDate();
   assert.ok(hd.day >= 1 && hd.day <= 31, 'day must be between 1 and 31');
});

test('when longFormatDate is called, string value is validated', () => {
   const hd = new HelloDate();
   assert.notStrictEqual(hd.longFormatDate, null, 'longFormatDate should not be null');
   assert.notStrictEqual(hd.longFormatDate, '', 'longFormatDate should not be the empty string');
   assert.ok(hd.longFormatDate.includes(hd.year.toString()), 'longFormatDate should contain the year');
   assert.ok(hd.longFormatDate.includes(hd.day.toString()), 'longFormatDate should contain the day');
});
