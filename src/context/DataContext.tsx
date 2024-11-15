import { createContext, ReactNode, useState, useContext } from "react";

type DataContextType = {
  data: any;
  setData: (data: any) => void;
};
export const DataContext = createContext<DataContextType>();

export const DataContextProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<any>("hello");
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

const useDatacontext = () => {
  const context = useContext(DataContext);
  return context;
};

export default useDatacontext;
