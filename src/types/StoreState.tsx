enum Theme {
  Dark = 'Dark',
  Light = 'Light',
}

interface StoreStateType {
  popularApps: object;
  topFreeApps: object;
  loading: boolean;
  searchTerm: string;
  theme: Theme;
}

interface ActionType {
  type: string;
}

export { Theme };
export type { StoreStateType, ActionType };
