import { createContext, PropsWithChildren, useContext } from 'react'

type ViewModelValue<T> = T

const ViewModelContext = createContext<
  ViewModelValue<unknown> | undefined
>(undefined)

export const ViewModelProvider = <T = unknown,>({
  children,
  ...props
}: PropsWithChildren<T>) => {
  return (
    <ViewModelContext.Provider value={props}>
      {children}
    </ViewModelContext.Provider>
  )
}

export const useViewModel = <T = unknown,>() => {
  const viewModelValue = useContext(ViewModelContext)

  if (!viewModelValue) {
    throw new Error('useViewModel must be used within ViewModelProvider')
  }

  return viewModelValue as T
}
