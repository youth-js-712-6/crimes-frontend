import { Theme } from "@radix-ui/themes"
import { BrowserRouter, Route, Routes } from "react-router"

import '@radix-ui/themes/styles.css'
import Layout from "./components/Layout"
import Crimes from "./pages/Crimes"

const App = () => {
  // Um crime aconteceu e o detetive precisa de sua ajuda. O detetive lhe deu o relatório da cena do crime, mas você perdeu ele. Você lembra vagamente que o crime foi um assassinato (murder) que aconteceu em algum momento em 15 de janeiro de 2018 e que ele aconteceu em SQL City. Comece encontrando o relatório correspondente da database da polícia.

  // Todos aceitam os parâmetros: page, limit, sort_by e sort_order
  // Também aceitam os parâmetros de filtro específicos de cada rota, 
  // como person_id para entrevistas ou ssn para renda

  return (
    <Theme>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Crimes />} />
            <Route path="/pessoas" element={<div>Pessoas</div>} />
            <Route path="/carteiras" element={<div>Carteiras</div>} />
            <Route path="/entrevistas" element={<div>Entrevistas</div>} />
            <Route path="/academia" element={<div>Academia</div>} />
            <Route path="/facebook" element={<div>Facebook</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Theme>
  )
}

export default App