import { Suspense, useContext } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import { ThemeContext } from './context/theme'
import { ArticlesProvider } from './context/articles/context'
import { MatchesProvider } from './context/matches/context'

const  App = () =>  {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`h-screen w-full mx-auto py-2 ${theme === "dark" ? "dark" : ""}`}>
      
        <ArticlesProvider>
          <MatchesProvider>
            <Suspense fallback={<>Loading...</>}>
              <RouterProvider router={router} />
            </Suspense>
          </MatchesProvider>
        </ArticlesProvider>
      

    </div>
  )
}

export default App
