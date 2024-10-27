import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function Routing() {
    return (
        <div class="App">

            <BrowserRouter>
                <Route>
                    <Route path='/' element={<App />} />

                </Route>
            </BrowserRouter>
        </div>
    )
}

export default Routing;