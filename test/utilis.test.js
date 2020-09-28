
import { countsAsAYes } from '../countsAsAYes.js';

const test = QUnit.test;

test('countsAsAYes should take in a yes-like and return true', (expect) => {
  
    const yes = 'yaaa';
    const expected = true;
    
    const actual = countsAsAYes(yes);
    expect.equal(actual, expected);
});

test('countsAsAYes should take in a no-like and return false', (expect) => {
    const no = 'NOPE';
    const expected = false;
    const actual = countsAsAYes(no);
    expect.equal(actual, expected);
});
