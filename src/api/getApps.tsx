const { REACT_APP_APIURL: apiURL } = process.env;

const getTopFreeApps = async ({
  page,
  size,
}: {
  page: number;
  size: number;
}) => {
  const total = page * size;
  console.log(total);
  const response = await fetch(`${apiURL}/top-free/all/${total}/explicit.json`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const body = await response.json();
  return body;
};

const getTopGrossApps = async ({
  page,
  size,
}: {
  page: number;
  size: number;
}) => {
  const total = page * size;
  const response = await fetch(`${apiURL}/top-free/all/${total}/explicit.json`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const body = await response.json();
  return body;
};

export { getTopFreeApps, getTopGrossApps };
