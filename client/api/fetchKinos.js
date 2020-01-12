import moment from "moment";
import analyzeRange from "../utils/analyzeRange";
import loopDates from "../utils/loopDates";
import extractKinos from "../utils/extractKinos";
import { localServerApi } from "../constants";
import { localServerGetHist } from "../constants";

export default async (startDate, endDate) => {
  // try {
  //   /* Fetch  kino numbers for the range startDate - endDate  */

  //   debugger;
  //   // log startDate and endDate
  //   const dates = analyzeRange(startDate, endDate);
  //   /** Loop dates array and fetch data for all dates
  //    * date formats yyyy-mm-dd
  //    *   1100 KINO gameid
  //    **/
  //   const res = await loopDates(dates);
  //   // extract kinos from res

  //   const kinos = extractKinos(res);
  //   debugger;
  //   return {
  //     kinos,
  //     fromDate: moment(dates[0]),
  //     toDate: moment(dates[dates.length - 1])
  //   };
  // } catch (e) {
  //   console.warn("error:", e);
  // }

  try {
    console.log("localServerGetHist", localServerGetHist);
    /* Fetch  kino numbers for the range startDate - endDate  */
    /* http://localhost:5000/getHist?startDate=2020-01-01&endDate=2020-01-01&limit=180 */

    console.log(
      "startDate, endDate",
      startDate.format("YYYY-MM-DD"),
      endDate.format("YYYY-MM-DD")
    );
    const res = await fetch(
      `${localServerGetHist}?startDate=${startDate.format(
        "YYYY-MM-DD"
      )}&endDate=${endDate.format("YYYY-MM-DD")}&limit=180`
    );
    return res.json();
  } catch (e) {
    console.warn("error:", e);
  }
};
