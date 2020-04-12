
import React, { Component } from 'react'

export default class AddTransaction extends Component {

    state = {
        name:'',
        surname:'',
        phonenumber:'',
        peronalid:''
    }
    onChange = (e) => {
        this.setState( { [e.target.name]: [e.target.surname] , [e.target.phonenumber] :[ e.target.peronalid]} );
      }
      onSubmit = (e) => {
        e.preventDefault();
        this.props.addTransaction(this.state.name, this.state.surname, this.state.phonenumber, this.state.peronalid) ;
        this.setState( { name:'', surname:'',phonenumber:'',peronalid:'' });
      }
      render() {
        return (
          <div>
            <form id="add-transaction_form" onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">name:</label>
                <input 
                  type="text" 
                  name="name" 
                  className="form-control" 
                  placeholder="Expense detail ..."
                  onChange={this.onChange}
                  value={this.state.name}
                />
                </div>
                
                <form id="add-transaction_form" onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="surname">surname:</label>
                <input 
                  type="text" 
                  name="name" 
                  className="form-control" 
                  placeholder="Expense detail ..."
                  onChange={this.onChange}
                  value={this.state.name}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phonenumber">phonenumber</label>
                <input 
                  type="number" 
                  name="phonenumber" 
                  className="form-control" 
                  placeholder="0.00"
                  onChange={this.onChange} 
                  value={this.state.amount}
                />
              </div>
              <div className="form-group">
                <label htmlFor="peronalid">peronalid</label>
                <input 
                  type="number" 
                  name="peronalid" 
                  className="form-control" 
                  placeholder="0.00"
                  onChange={this.onChange} 
                  value={this.state.amount}
                />
              </div>
    
              <input type="submit" value="Add Transaction" className="btn btn-primary btn-block"/>
            </form>
            </form>
         </div>   
        )
      }
}

