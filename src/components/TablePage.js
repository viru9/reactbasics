import React from 'react';

class TablePage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            userData: []
        }
    }

    componentDidMount(){
        console.log('componentDidMount');
        fetch("https://reqres.in/api/users")
      .then(res => res.json())
      .then(
        (result) => {
            console.log('result',result);
            this.setState({userData:result.data})
        },
       
        (error) => {
            console.log('error',error);
         
        }
      )
    }

    render(){
        return(
            <table >
    <thead>
    <tr>
      <th>Email</th>
      <th>First Name</th>
      <th>Last Name</th>
    </tr>    
    </thead>    
    <tbody>

         {this.state.userData.map((value,index)=>{
           return <tr key={index}> 
             <td>{value.email}</td>
             <td>{value.last_name}</td>
             <td>{value.last_name}</td>
           </tr>
         })}   

    </tbody>
  </table>
        )
    }

}

export default TablePage;