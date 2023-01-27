import React,{useEffect} from 'react'

function AsteroidsMap() {
    useEffect(()=>{
        fetch()
        .then(r => r.json())
        .then(data => console.log(data))
    },[])

    
  return (
    <div>AsteroidsMap</div>
  )
}

export default AsteroidsMap