import monthToString from './monthToString';
import dayToString from './dayToString';
let today = new Date();
let date =
  `${dayToString(today.getDay())}` +
  ' ' +
  `${monthToString(today.getMonth())}` +
  ' ' +
  today.getDate() +
  ' ' +
  today.getFullYear();
export default date;
