import  React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './loader'


class App extends React.Component
{
    constructor(props){
        super(props) // calling constructor function of parent class..
        
        //this is the only time we do direct assignment...
        this.state = {lat:null , errmsg : ''}; //initialisng the state..

      }
      componentDidMount(){
         //getting geolocation 
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
                return <SeasonDisplay lat = {this.state.lat} />
              }

         return <Loader />
                

    }
}
ReactDOM.render(<App />,
    document.querySelector('#root'))