import moment from "moment";
import analyzeRange from "../utils/analyzeRange";
import loopDates from "../utils/loopDates";
import extractKinos from "../utils/extractKinos";
import { localServerApi } from "../constants";
import { localServerGetHist } from "../constants";

export default async (startDate, endDate) => {
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
