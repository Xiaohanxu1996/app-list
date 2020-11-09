const { REACT_APP_DETAIL_URL: apiUrl } = process.env;

const getAppDetail = async ({ appId }: { appId: string }) => {
  const response = await fetch(`${apiUrl}?id=${appId}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const body = await response.json();
  return body;
};

export { getAppDetail };
