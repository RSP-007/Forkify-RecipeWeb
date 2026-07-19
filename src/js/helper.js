import { TIMEOUT_SEC } from './config.js';

// Reject the request if it takes too long
const timeout = function (seconds) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(
        new Error(`Request took too long! Timeout after ${seconds} second(s).`),
      );
    }, seconds * 1000);
  });
};

// Handles both GET and POST requests
export const AJAX = async function (url, uploadData = undefined) {
  try {
    // Create fetch request
    const fetchPro = uploadData
      ? fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);

    // Race between fetch request and timeout
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    // Throw an error if the request failed
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    return data;
  } catch (err) {
    throw err;
  }
};
