enum Theme {
  Dark = 'Dark',
  Light = 'Light',
}

interface StoreStateType {
  topGrowApps: AppInfoType[];
  topFreeApps: AppInfoType[];
  loading: boolean;
  searchTerm: string;
  page: number;
  theme: Theme;
}

interface ActionType {
  type: string;
  data: AppInfoType[];
}

interface ActionWithOutDataType {
  type: string;
}

interface AppInfoType {
  id: string;
  name: string;
  genre: string;
  imageUrl: string;
  ranking: number;
}

export { Theme };
export type { StoreStateType, ActionType, AppInfoType, ActionWithOutDataType };
