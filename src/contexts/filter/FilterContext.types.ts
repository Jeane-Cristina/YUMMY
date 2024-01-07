import { ReactNode } from "react";


export type FilterContextType = {
    filter: string;
    handleChangeFilter: (filterValue: string) => void; 
};

export const defaultValue: FilterContextType = {
    filter: '',
    handleChangeFilter: () => {},
};

export type FilterContextProviderProps = {
    children: ReactNode;
}