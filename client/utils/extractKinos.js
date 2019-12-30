export default res => {
  // console.log(res);
  const kinos = [];

  res.forEach(item => {
    // draws array
    const draws = item.data.content;
    // console.log('draw', draw);
    draws.forEach(item_ => {
      const kino = {
        drawTime: item_.drawTime,
        drawNo: item_.drawId,
        kino: item_.winningNumbers.bonus[0]
      };

      kinos.push(kino);
    });
  });

  return kinos;
};
