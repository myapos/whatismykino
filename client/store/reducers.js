/* eslint no-case-declarations: 0*/
import { groupBy } from "30-seconds-of-code";
import * as actions from "./actions";
import whatismykino from "../utils/whatismykino";

const reducer = (state = {}, action) => {
  const {
    type,
    initialized,
    kino,
    startDate,
    endDate,
    occurences,
    loading,
    selectedOption,
    limited,
    prediction,
    waitForPrediction,
    maData,
    trendData,
    lwmaData,
    kinos,
    bins,
    frequencies,
    histogramResults
  } = action;

  switch (type) {
    case actions.INITIALIZATIONS:
      return {
        ...state,
        initialized
      };

    case actions.KINO_DATA_FETCHED:
      return {
        ...state,
        kino: {
          drawIds: kino.content.map(c => ({
            value: c.drawId,
            label: c.drawId
          })),
          winningNumbers: kino.content.map(c => ({
            [c.drawId]: {
              numbers: c.winningNumbers.list,
              bonus: c.winningNumbers.bonus
            }
          }))
          // we can here add anything we need from kino object
        }
      };
    case actions.FETCH_KINOS_FOR_DATES:
      return {
        ...state,
        loading: true
      };
    case actions.SAGAS_KINOS_FETCHED:
      return {
        ...state,
        allKinos: kinos,
        allOccurences: occurences,
        histogramResults,
        // kinos,
        startDate,
        endDate,
        // occurences,
        // bins,
        // frequencies,
        loading: false,
        limited: false
      };
    case actions.LIMIT_KINOS:
      // return to kinos array only the last selectedOption value

      const limitedKinos = kinos.slice(
        kinos.length - selectedOption.value,
        kinos.length
      );
      const groupped = groupBy(limitedKinos, "kino");

      const limitedOccurences = Object.keys(groupped).map(key => ({
        kino: key,
        occurences: groupped[key].length
      }));

      return {
        ...state,
        allKinos: kinos,
        allOccurences: limited ? occurences : limitedOccurences,
        kinos: limitedKinos,
        occurences: limitedOccurences,
        waitForPrediction: true
      };

    case actions.SET_LIMITED:
      return {
        ...state,
        limited
      };
    case actions.SAGAS_PREDICTION:
      return {
        ...state,
        prediction,
        maData,
        lwmaData,
        trendData,
        waitForPrediction
      };
    default:
      return state;
  }
};

export default reducer;
