import { AppInfoType } from './action';

interface StoreStateType {
  topGrowApps: AppInfoType[];
  topFreeApps: AppInfoType[];
  loading: boolean;
  searchTerm: string;
  page: number;
}

export type { StoreStateType };
