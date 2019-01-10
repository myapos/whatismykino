export default res => {
  // console.log(res);
  const kinos = [];

  res.forEach(item => {
    // draws array
    const draw = item.result.draws.draw;
    // console.log('draw', draw);
    draw.forEach(item_ => {
      const kino = {
        drawTime: item_.drawTime,
        drawNo: item_.drawNo,
        kino: item_.results[item_.results.length - 1],
      };

      kinos.push(kino);
    });
  });

  return kinos;
}
;
