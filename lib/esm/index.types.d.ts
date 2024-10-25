/// <reference types="react" />
export interface ToolbarContextProps {
    items: IToolbar[];
    setItems: any;
    addItem: any;
    updateItem: any;
    slots: {
        toolbarItem: JSX.Element;
    };
}
export interface IToolbar {
    id: string;
    icon?: JSX.Element;
}
