export default date => {
  /* 
		date formats yyyy-mm-dd
		1100 KINO gameid
		same date for now
	*/

  return fetch(
    `https://api.opap.gr/draws/v3.0/1100/draw-date/${date}/${date}`
  ).then(r => r.json());
};
