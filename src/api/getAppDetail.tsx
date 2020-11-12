const { REACT_APP_DETAIL_URL: apiUrl } = process.env;

type getAppDetailArg = {
  appId: string;
};

const getAppDetail = async ({ appId }: getAppDetailArg) => {
  const response = await fetch(`${apiUrl}?id=${appId}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  return data;
};

export { getAppDetail };
