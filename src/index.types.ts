export interface ToolbarContextProps {
  items: IToolbar[],
  setItems: any,
  addItem: any,
  updateItem: any,
  slots: { toolbarItem: any, toolbarWrapper: any, isEmbedded: boolean },
}

export interface IToolbar {
  id: string,
  icon?: JSX.Element,
}
