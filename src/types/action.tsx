interface ActionType {
  type: string;
  data: AppInfoType[];
  term?: string;
}

interface ActionWithOutDataType {
  type: string;
}

interface ActionWithStringDataType {
  type: string;
  term: string;
}

interface AppInfoType {
  id: string;
  name: string;
  genre: string;
  imageUrl: string;
}

export type {
  ActionType,
  AppInfoType,
  ActionWithOutDataType,
  ActionWithStringDataType,
};
