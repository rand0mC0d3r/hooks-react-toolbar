export interface ToolbarContextProps {
    items: any;
    setItems: any;
}
export interface IToolbar {
    id: string;
}
export declare function useToolbar(): ToolbarContextProps;
