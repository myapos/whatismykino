export const INITIALIZATIONS = "INITIALIZATIONS";
export const FETCH_FOR_DATE = "FETCH_FOR_DATE";
export const KINO_DATA_FETCHED = "KINO_DATA_FETCHED";

export const fetchForDate = date => {
	return {
		type: FETCH_FOR_DATE,
		date,
	}
}