import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { RootState } from './app/store'
import { amountAdded, inceremented } from './features/counter/counter-slice'
import { useFetchBreedsQuery } from './features/dogs/dogsapi-slice'

function App() {
    const count = useAppSelector((state: RootState) => state.counter.value)
    const dispatch = useAppDispatch()

    const { data = [], isFetching} = useFetchBreedsQuery()

    const handleClick = () => {
      dispatch(amountAdded(3))
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Hello Vite + React!</p>
                <p>
                    <button type="button" onClick={handleClick}>count is: {count}</button>
                </p>
                <div>
                  <p>Number of dogs fetched: {data.length}</p>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Picture</th>
                      </tr>
                      <tbody>
                        {data.map((breed) => (
                          <tr key={breed.id}>
                            <td>{breed.name}</td>
                            <td>
                              <img src={breed.image.url} alt={breed.name} height={250}/>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </thead>
                  </table>
                </div>
                <p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    {' | '}
                    <a
                        className="App-link"
                        href="https://vitejs.dev/guide/features.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Vite Docs
                    </a>
                </p>
            </header>
        </div>
    )
}

export default App
