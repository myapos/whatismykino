import analyzeRange from '../utils/analyzeRange';
import getDate from '../utils/getDate';
import loopDates from '../utils/loopDates';

export default (startDate, endDate) => {
  /* Fetch  kino numbers for the range startDate - endDate  */

  // log startDate and endDate

  const fromDate = startDate;// .format('YYYY-MM-DD');
  const toDate = endDate;// .format('YYYY-MM-DD');

  const dates = analyzeRange(fromDate, toDate);
  /* Loop dates array and fetch data for all dates
  date formats yyyy-mm-dd
  1100 KINO gameid
  same date for now
  */
  loopDates(dates);
  // return fetch(`https://api.opap.gr/draws/v3.0/1100/draw-date/${getDate(dates[0])}/${getDate(dates[0])}`)
  //   .then(r => r.json())
  // ;
};
