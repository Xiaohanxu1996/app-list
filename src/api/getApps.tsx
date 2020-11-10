const { REACT_APP_APIURL: apiURL } = process.env;

const getTopFreeApps = async ({
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
  const data = await response.json();
  return data.feed;
};

const getTopGrossApps = async ({
  page,
  size,
}: {
  page: number;
  size: number;
}) => {
  const total = page * size;
  const response = await fetch(
    `${apiURL}/top-grossing/all/${total}/explicit.json`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  return data.feed;
};

export { getTopFreeApps, getTopGrossApps };
