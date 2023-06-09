import Main from "./components/layouts/Main";
import Index from "./pages/Index";

export default function App() {
  let data = [{
    character_photo: '/src/assets/img/NavBar/personaje1.png',
    cover_photo: 'prueba1',
    title: 'prueba1',
    description: 'prueba1'
  }]

  return (
    <Main className="h-full w-full">
      <Index data={data}></Index>
    </Main>
  )
}

