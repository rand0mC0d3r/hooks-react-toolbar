export interface ToolbarContextProps {
    items: any;
    setItems: any;
    addItem: any;
    updateItem: any;
}
export interface IToolbar {
    id: string;
}
export declare function useToolbar(): ToolbarContextProps;
