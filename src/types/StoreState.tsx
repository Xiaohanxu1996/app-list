interface StoreStateType {
  topGrowApps: AppInfoType[];
  topFreeApps: AppInfoType[];
  loading: boolean;
  searchTerm: string;
  page: number;
}

interface ActionType {
  type: string;
  data: AppInfoType[];
  term?: string;
}

interface ActionWithOutDataType {
  type: string;
}

interface AppInfoType {
  id: string;
  name: string;
  genre: string;
  imageUrl: string;
}

export type { StoreStateType, ActionType, AppInfoType, ActionWithOutDataType };
