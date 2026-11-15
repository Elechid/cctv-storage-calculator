import assert from 'node:assert/strict';
import { estimate } from './calculator.mjs';

assert.deepEqual(estimate(4, 4, 30, 100, 20), { daily: 172.8, total: 5184, planned: 6220.8 });
assert.deepEqual(estimate(4, 4, 30, 25, 0), { daily: 43.2, total: 1296, planned: 1296 });
assert.equal(estimate(1, 1, 1, 0, 0).total, 0);
assert.throws(() => estimate(1.5, 4, 30, 100, 20), RangeError);
assert.throws(() => estimate(4, 4, 30, 101, 20), RangeError);
assert.throws(() => estimate(4, NaN, 30, 100, 20), RangeError);
