import { AppInfoType } from '@types';
const appInfoParser = (apps: object[]): AppInfoType[] => {
  const parsedData = apps.map((app: any, index: number) => {
    const { id, name, genres, artworkUrl100: imageUrl } = app;
    const genre = genres[0];
    const ranking = index + 1;
    return {
      id,
      name,
      genre: genre.name,
      imageUrl,
      ranking,
    };
  });
  return parsedData;
};

export { appInfoParser };
