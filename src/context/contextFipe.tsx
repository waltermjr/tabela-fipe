import { Dispatch, SetStateAction, createContext, useState } from "react";

interface IFipe {
  fipeResult: IFipeResult,
  setFipeResult:  Dispatch<SetStateAction<IFipeResult>>
}

interface IFipeResult {
  Modelo: string,
  Valor: string,
  Marca: string,
}

interface Props {
  children: string | JSX.Element | JSX.Element[]
}

export const fipeContext = createContext({} as IFipe)

export const FipeProvider = ({ children }: Props) => {
  const [fipeResult, setFipeResult] = useState<IFipeResult>({} as IFipeResult);

  return(
    <fipeContext.Provider value={{
      fipeResult,
      setFipeResult
    }}>{children}</fipeContext.Provider>
  )
}