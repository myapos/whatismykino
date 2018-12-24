import getDate from './getDate';

export default async dates => {
  const urls = [];

  dates.forEach(date => {
    const date_ = getDate(date);
    // for every date there are 18 pages so we request data from all pages

    for (let page = 0; page < 18; page++) {
      urls.push(`https://api.opap.gr/draws/v3.0/1100/draw-date/${date_}/${date_}?page=${page}`);
      // console.log('getting data for date:', date_, ' builded url: ', urls);
    }
  });

  // console.log(urls);

  const res = urls.map(url => fetch(url).then(r => r.json()));

  const res__ = await Promise.all(res).then(r => 
    // console.log('got results for all dates', r);
     r
  );

  // debugger;
  console.log('got results for all dates __', res__);
};
