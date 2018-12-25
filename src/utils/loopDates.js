import getDate from './getDate';
import { localServerApi } from '../constants';

export default async dates => {
  const urls = [];

  dates.forEach(date => {
    const date_ = getDate(date);
    // for every date there are 18 pages so we request data from all pages
    console.log('date:', date_);
    urls.push(`${localServerApi}?date=${date_}`);
    // for (let page = 0; page < 18; page++) {
    // urls.push(`https://api.opap.gr/draws/v3.0/1100/draw-date/${date_}/${date_}?page=${page}`);
    // console.log('getting data for date:', date_, ' builded url: ', urls);
    // }
  });

  const res = urls.map(url => fetch(url).then(r => r.json()));

  // 'got results for all dates'
  const res__ = await Promise.all(res).then(r => r);

  console.log('got results for all dates __', res__);

  return res__;
};
