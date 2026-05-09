import { BrowserRouter, Route, Routes } from "react-router"

import '@radix-ui/themes/styles.css'
import Layout from "./components/Layout"
import Crimes from "./pages/Crimes"
import Pessoas from "./pages/Pessoas"
import Entrevistas from "./pages/Entrevistas"
import Carteiras from "./pages/Carteiras"

const App = () => {
  // Um crime aconteceu e o detetive precisa de sua ajuda. O detetive lhe deu o relatório da cena do crime, mas você perdeu ele. Você lembra vagamente que o crime foi um assassinato (murder) que aconteceu em algum momento em 15 de janeiro de 2018 e que ele aconteceu em SQL City. Comece encontrando o relatório correspondente da database da polícia.

  // Todos aceitam os parâmetros: page, limit, sort_by e sort_order
  // Também aceitam os parâmetros de filtro específicos de cada rota, 
  // como person_id para entrevistas ou ssn para renda

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Crimes />} />
            <Route path="/pessoas" element={<Pessoas />} />
            <Route path="/carteiras" element={<Carteiras />} />
            <Route path="/entrevistas" element={<Entrevistas />} />
            <Route path="/academia" element={<div>Academia</div>} />
            <Route path="/facebook" element={<div>Facebook</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App