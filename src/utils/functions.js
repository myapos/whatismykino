export const formatDate = fullDate => {
  let dd = fullDate.getDate();
  let mm = fullDate.getMonth() + 1; // January is 0!
  const yyyy = fullDate.getFullYear();

  // format date
  dd = dd < 10 ? `0${dd}` : dd;
  mm = mm < 10 ? `0${mm}` : mm;

	return  `${yyyy}-${mm}-${dd}`;
}