import { useState } from 'react'

import './App.output.css'

function App() {
 

  return (
  
      <div className="App text-gray-600">
      <div>
        <nav>
          <div>
            <h1 className="font-bold uppercase p-4 border-b border-gray-100 text-6xl">
              <a href="/">Food Samurai</a>
            </h1>
          </div>
          <ul>
            <li className="text-gray-900 font-bold">
              <a href="#">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className='text-gray-100'>About</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <main className="px-16 py-6">
        <div>
          <a href="#" className='text-primary'>Log in</a>
          <a href="#" className='text-primary'>Sign up</a>
        </div>

        <header>
          <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
          <h3 className="text-2xl font-semibold">For Ninjas</h3>
        </header>

        <div>
          <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
            Latest Recipes
          </h4>

          <div className="mt-8">
            <div>
              <img
                src="https://github.com/iamshaunjp/tailwind-tutorial/blob/lesson-2/public/img/stew.jpg?raw=true"
                alt="stew"
              ></img>
              <div>
                <span>5 Bean Chili Stew</span>
                <span>Recipe by Mario</span>
              </div>
            </div>
          </div>

          <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
            Most Popular
          </h4>

          <div className="mt-8"></div>
        </div>

        <div>
          <div className='bg-secondary-100 text-secondary-200'>Load more</div>
        </div>
      </main>
    </div>
  
  )
}

export default App
