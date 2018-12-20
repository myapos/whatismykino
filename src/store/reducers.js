import * as actions from './actions';

const reducer = (state = {}, action) => {
  const { type, data, kino } = action;

  switch (type) {
    case actions.INITIALIZATIONS:
      return {
        ...state,
        data,
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
    default:
      return state;
  }
};

export default reducer;
