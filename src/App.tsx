import useHelloWorld from '@/hooks/useHelloWorld'

import styles from './App.module.css'

export const App = () => {
  const data = useHelloWorld()
  console.log(data)

  return (
    <main data-testid="app-id" className={styles.main}>
      <p>App</p>
    </main>
  )
}

export default App
