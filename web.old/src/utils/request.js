import axios from 'axios';

// const BASE_URL = 'http://localhost:1337';
const BASE_URL = 'https://startupcenterserver.herokuapp.com';

export const sendMail = (_data) => {
  const response = axios({
    method: 'post',
    url: `${BASE_URL}/send-mail`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: _data,
  });

  return response;
};
