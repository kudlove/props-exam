import React,{Component} from 'react';
import UserList from  "./UserList"
import CounterComponent from "./components/CounterComponent";
// 함수형으로 처음 제작되어 있음 -> Class 형으로 변환
class App extends Component{
  render() {
    return (
        <div>
            <CounterComponent />
        </div>
    )
  }
}

export default App;
