import {createRoot} from 'react-dom/client'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { App } from './src/App'
import { Section } from './src/components/Main'
import { Destination } from './src/components/Destination'
import { Planet } from './src/components/Planet'
import {Crew} from './src/components/Crew'
import { Technology } from './src/components/Technology'
import { TechnologyContainer } from './src/components/TechnolgyContainer'
import './index.css'
import { CrewContainer } from './src/components/CrewContainer'

const root = createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}>
                <Route path='/' element={<Section></Section>}></Route>

                <Route path='destination' element={<Destination></Destination>}>
                    <Route path=':name' element={<Planet></Planet>}></Route>
                </Route>
            
                <Route path='crew' element={<Crew></Crew>} >
                    <Route path=':name' element={<CrewContainer></CrewContainer>}></Route>
                </Route>

                <Route path='technology' element={<Technology/>}>
                    <Route path=':name' element={<TechnologyContainer></TechnologyContainer>} ></Route>
                </Route>

            </Route>  
        </Routes>
    </BrowserRouter>



    )