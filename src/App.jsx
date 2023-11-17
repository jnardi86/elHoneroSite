import './App.css'
import RootProvider from './core/providers/RootProvider'
import HomePage from './pages/homePage/view/HomePage'

function App() {
 
  return (
      <RootProvider>
        <HomePage/>
      </RootProvider>
  )
}

export default App
