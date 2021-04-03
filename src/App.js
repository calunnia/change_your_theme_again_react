import './App.css'
import React, {useEffect, useState} from 'react'

const App = () => {

  
  const [data, setData] = useState([])
  const [loading, setloading] = useState(false)
  const [show, setShow] = useState('')
  const [moreInfo, setMoreInfo] = useState(true)
  

  const [refresh, setRefresh] = useState(false)
  const [filteredData, setFilteredData] = useState([])
 

useEffect(() => {
 
      setloading(true)
      setData([])           //elozo adatok ne latszodjanak
      setFilteredData([])
      let url = "/api/data" // mockserverURL

      url = "/api/filterData?search=Titanok" // mockserverURL



      console.log('fetch from ',url);
    
      fetch(url)
      .then(  (response) => (response.json()))
      .then(  (respAdat)     => (setData(respAdat)))
      .catch( (error)    => {
                              console.log('error', error)
                              setData(null)
                            }
            )
      .finally( ()=>{
      
                      console.log('fetch end');
                      setloading(false)
                    }
              )
      return () => {
      // cleanup
      }
}, [refresh])

console.log('movies data=',data);




  return (
    <div className="App">
      Todo...
    </div>
  )
}

export default App
