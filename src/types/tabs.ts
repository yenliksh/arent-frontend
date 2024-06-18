// TODO: remove in future
export enum TabsValueType {
  LONG = 'LONG',
  SHORT = 'SHORT',
}

export interface TabType {
  title: string;
  value: TabsValueType;
  id: string;
}
