import  React from 'react';
import ReactDOM from 'react-dom';


// const xyz = ()=>{
//   window.navigator.geolocation.getCurrentPosition(
//     (position)=> console.log(position),
//     (err) => console.log(err)

//   )
//   return <div>Latitude :</div>

// };

class App extends React.Component
{
    constructor(props){
        super(props)
        //this is the only time we do direct assignment...
        this.state = {lat:null , errmsg : ''};


        window.navigator.geolocation.getCurrentPosition(
            (position)=> {
                this.setState({lat : position.coords.latitude}) 
            },
            (err) => {
                this.setState({errmsg:err.message})
            }          
        
          );
    }
    
    //dont add much info since this function runs many times
    
    render(){
       
         
              if(!this.state.lat && this.state.errmsg){
                return  <div>error : {this.state.errmsg}</div>
              }
              if(!this.state.errmsg && this.state.lat){
                return  <div>Latitude :{this.state.lat}</div>
              }

         return <div>Loading!!!!</div>
                

    }
}
ReactDOM.render(<App />,
    document.querySelector('#root'))