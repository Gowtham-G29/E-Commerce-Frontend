import { getProducts } from "./assets/Service/Api"

function App() {
  getProducts()
  return (
    <div>
      <p className="text-3xl text-amber-200">Hello</p>
    </div>
  )
}

export default App
