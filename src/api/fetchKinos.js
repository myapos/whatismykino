import moment from 'moment';
import analyzeRange from '../utils/analyzeRange';
import loopDates from '../utils/loopDates';

export default async (startDate, endDate) => {
  /* Fetch  kino numbers for the range startDate - endDate  */

  // log startDate and endDate
  const dates = analyzeRange(startDate, endDate);
  /* Loop dates array and fetch data for all dates
  date formats yyyy-mm-dd
  1100 KINO gameid
  */

  const res = await loopDates(dates);

  return ({
    kinos: res,
    fromDate: moment(dates[0]),
    toDate: moment(dates[dates.length - 1]),
  });
};
