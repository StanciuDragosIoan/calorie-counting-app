import { getItem } from './ClientStorage';

const userId = getItem('userId');
 

export const postData = async (url, payload = {}) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const resData = await res.json();
  return resData;
};

export const getData = async (url) => {
  const rawData = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      userId,
    },
  });
  const serialisedData = await rawData.json();
  return serialisedData;
};
