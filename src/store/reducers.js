import * as actions from './actions';

const reducer = (state = {}, action) => {
  const { type, initialized, kino, startDate, endDate, kinos } = action;

  switch (type) {
    case actions.INITIALIZATIONS:
      return {
        ...state,
        initialized,
      };

    case actions.KINO_DATA_FETCHED:
      return {
        ...state,
        kino: {
          drawIds: kino.content.map(c => ({ value: c.drawId, label: c.drawId })),
          winningNumbers: kino.content.map(c => ({ [c.drawId]: { numbers: c.winningNumbers.list, bonus: c.winningNumbers.bonus } })),
          // we can here add anything we need from kino object
        },
      };

    case actions.SAGAS_KINOS_FETCHED:
      return {
        ...state,
        kinos,
        startDate,
        endDate,
      };

    default:
      return state;
  }
};

export default reducer;
