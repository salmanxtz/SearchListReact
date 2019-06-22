import React from "react"
import CardList from './CardList'
import Scroll from './Scroll'
import Searchbox from './Searchbox'



class App extends React.Component{
  constructor(){
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }


  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(users=>this.setState({robots:users}))

  }

onSearchChange=(event) =>{
  this.setState({searchfield: event.target.value})


}

  render(){
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return (
    <div className = 'tc'>
      <h1>RoboFriends</h1>
      <Searchbox searchChange ={this.onSearchChange} />
      <Scroll>
        <CardList robots ={filteredRobots}/>
      </Scroll>
    </div>
    )
  }

}


export default App
