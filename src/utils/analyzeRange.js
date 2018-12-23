// https://stackoverflow.com/questions/23795522/how-to-enumerate-dates-between-two-dates-in-moment

export default (startDate, endDate) => {
  const dates = [];

  const currDate = startDate.subtract(1, 'days');// moment(startDate).startOf('day');
  const lastDate = endDate;// moment(endDate).startOf('day');

  while (currDate.add(1, 'days').diff(lastDate) <= 0) {
    // console.log(currDate.toDate());
    dates.push(currDate.clone().toDate());
  }

  // returns an array of dates
  return dates;
};
