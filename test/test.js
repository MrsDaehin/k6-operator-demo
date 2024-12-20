import http from 'k6/http';
import { check } from 'k6';

export const options = {
  stages: [
    { target: 20, duration: '30s' },
    { target: 0, duration: '30s' },
  ],
};

export default function () {
  const result = http.get('https://petstore.swagger.io/v2/pet/1');
  check(result, {
    'http response status code is 200': result.status === 200,
  });
}