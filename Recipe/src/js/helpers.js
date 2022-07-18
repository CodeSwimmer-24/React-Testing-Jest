import { TIMEOUT_SEC } from "./config";

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJson = async (url) => {
  try {
    // const response = await fetch(url);
    const fetchPro = fetch(url);
    const response = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        `Something is wrong ${data.message} (${response.status})`
      );
    }
    return data;
  } catch (err) {
    throw err;
  }
};
