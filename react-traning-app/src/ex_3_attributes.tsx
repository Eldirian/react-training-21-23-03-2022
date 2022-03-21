const App = () => {

   const getOffet = () => {
       return Math.round(Math.random() * 100)
   } 

   return <div 
    className='container' 
    id="main-container" 
    data-offset={getOffet()}
    style={{
            backgroundColor: 'red'
        }}
   >
       Hello World!
   </div>
  }
  
export { App };
  