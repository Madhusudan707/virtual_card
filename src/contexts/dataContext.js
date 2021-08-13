import { createContext, useContext, useEffect, useReducer } from "react";
import { dataReducer, initialState } from "../reducers/dataReducer";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("data.json");
        dispatch({
          type: "ON_SUCCESS",
          payload: response.data,
        });
      } catch (err) {
        console.log(`${err}:Unable to Fetch Product, Try Again!!`);
      }
    })();
  }, []);

  return (
    <DataContext.Provider
      value={{
        cardDataState: state,
        cardDataDispatch: dispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
