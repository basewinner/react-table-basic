import React from 'react'
import './App.css'
import { BasicTable } from './components/BasicTable'
import {SortingTable} from './components/SortingTable'
import {FilteringTable} from './components/FilteringTable'

function App() {
  return (
    <div className='container'>
      <FilteringTable />
    </div>
  )
}

export default App