import Header from "./components/header/header"
import Main from "./components/header/main/main"
import Fotter from "./components/header/main/footer/footer"
import BackToTopButton from "./utilities/BackToTopButton"


const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Fotter/>
      <BackToTopButton/>
    </div>
  )
}

export default App
