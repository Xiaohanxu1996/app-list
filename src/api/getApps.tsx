const { REACT_APP_APIURL: apiURL } = process.env;

type getAppsArg = {
  page: number;
  size: number;
  type: string;
};

const getApps = async ({ page, size, type }: getAppsArg) => {
  const total = page * size;
  const response = await fetch(`${apiURL}/${type}/all/${total}/explicit.json`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  return data.feed;
};

export { getApps };
