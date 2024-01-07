import { createContext, useContext, useState } from "react";
import { FilterContextProviderProps, FilterContextType, defaultValue } from "./FilterContext.types";

const FilterContext = createContext<FilterContextType | undefined>(defaultValue);

export const FilterContextProvider: React.FC<FilterContextProviderProps> = ({children}) => {
    
    const [filter, setFilter] = useState<string>('');

    function handleChangeFilter(newFilterValue: string): void{
        setFilter(newFilterValue);
    }
    
    return (
        <FilterContext.Provider value={{ filter, handleChangeFilter }}>
            {children}
        </FilterContext.Provider>
    )
};

export const useFilterContext = () => {
    const context = useContext(FilterContext);
    if( context === undefined ){
        throw new Error('useFilterContext is undefined');
    }
    return context;
}

export default FilterContextProvider;