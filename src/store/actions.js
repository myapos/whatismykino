export const INITIALIZATIONS = 'INITIALIZATIONS';
export const FETCH_FOR_DATE = 'FETCH_FOR_DATE';
export const FETCH_KINOS_FOR_DATES = 'FETCH_KINOS_FOR_DATES';
export const SAGAS_KINOS_FETCHED = 'SAGAS_KINOS_FETCHED';

export const KINO_DATA_FETCHED = 'KINO_DATA_FETCHED';

export const fetchForDate = date => ({
  type: FETCH_FOR_DATE,
  date,
});

export const fetchKinosForDates = (startDate, endDate) => ({
  type: FETCH_KINOS_FOR_DATES,
  startDate,
  endDate,
});
