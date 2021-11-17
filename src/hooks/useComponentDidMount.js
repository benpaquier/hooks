import { useEffect } from 'react'

const useComponentDidMount = componentName => {
  useEffect(() => {
    console.log(`${componentName} est monté`)
  }, [])
}

export default useComponentDidMount
