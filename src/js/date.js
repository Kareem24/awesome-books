import { DateTime } from 'luxon';
import GetElement from './getElement';

const dates = () => {
  const date = new GetElement('.date', false);
  const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  // console.log(now);
  date.textContent = now;
};

export default dates;
