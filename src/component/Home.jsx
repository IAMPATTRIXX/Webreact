//import React from 'react';
import '../bookStyle.css'
import React, { Component } from 'react'
// import { render } from 'react-dom'
// import Person from 'react-ionicons/lib/MdPerson'
// import Arrow from 'react-ionicons/lib/IosArrowDropright'
// import Cash from 'react-ionicons/lib/MdCash'
import { Link } from 'react-router-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'



class Home extends Component{
    state = {
        name:'',
      }
    // อีเว้นท์เมื่อคลิก เพื่อใช้ในการอัพ firebase
      onChange = (e) => {
        this.setState( { [e.target.name]: e.target.value } );
      }
      onChange2 = (e) => {
        this.setState( { [e.target.name]: e.target.value } );
      }
    
      onadd = (e) => {
        e.preventDefault();
        this.props.addData();
        // this.setState( { name:''});
      }
        onfind = (e) => {
            e.preventDefault();
            this.props.findData();
            // this.setState( { name:''});

    
      }
    render(){
        
        return(   
          
                <section className = "section container" > 
                <div> {/* ----------------------------------------------------------------------------------- Navbar login page sign in */}
                    <nav className="navbar" role="navigation" aria-label="main navigation">
                        <div id="navbarBasicExample" className="navbar-menu">
                            <div className="navbar-end">
                                <div className="navbar-item">
                                    <div className="buttons">
                                    <Link to="/Signin"><button className="button-is-light" type="button" >
                                            Sign In
                                        </button>
                                    </Link> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div> 
                {/* <NavbarLogin/> ------------------------------------------------------------------- Navbar after login page wth findpage */}
                <div className = "center">{/* ---------------------------------------------------------------- Login page */} 
                    <div className = "nameHotel">
                        . h o t e l  
                    </div> 
                    <form action="" className="form" > 
                        <label className="label"> Email : </label>   
                        <input type="email" placeholder="Jacob@example.com"/>
                        <label className="label"> password : </label>
                        <input type="password" />
                        {/* <Route exact path="/" render = { prop => (
                            <div>
                            <Findpage onadd = {this.onadd}
                                      onchange = {this.onChange} />
                            </div>
                            )}
                        /> */}
                        <Link to="/Findpage"><input type="submit" value="LOGIN"/></Link> {/*loginปุ่ม*/}{/*find page 112 */}
                        {/* <Route exact path="/Findpage" Component={Findpage} /> */}
                     </form>  
                </div>
                    {/* <div className = "center">  ---------------------------------------------------------------- Sign in page 
                    <form action="" className="form" > 
                        <div className="col-25">  
                            <label className="forms">Name: </label>
                        </div>
                        <div className="col-75">
                            <input type="text" name="fname" placeholder="Jacob"/>
                        </div>
                        <div className="col-25">
                            <label className="forms">Surname: </label>
                        </div>
                        <div className="col-75">
                            <input type="text" name="lname" placeholder="Wilton"/>
                        </div>
                        <div className="col-25">
                            <label className="forms"> Email: </label>
                        </div>
                        <div className="col-75">
                            <input type="email" placeholder="Jacob@example.com"/>
                        </div>
                        <div className="col-25">
                            <label className="forms"> Password: </label>
                        </div>
                        <div className="col-75">
                            <input type="password" />
                        </div>  
                        <div className="col-25">
                            <label className="forms"> Confirm password:</label>
                        </div>
                        <div className="col-75">
                            <input type="password" />
                        </div>
                        <div className="confirmSigninLabel">
                            <label for="confirmSignin" > My information is correct.</label>     
                        </div>
                        <div className="checkbox" >
                            <input type="checkbox" className="confirmSignin" name="confirmSignin"/> 
                        </div>
                        <div className="col-100">
                            <input type="submit" id="submit" value="SIGN IN"/> {/* login 
                        </div>
                     </form>  
                </div>   */}
                {/* <div className = "center" >
                    <div className = "nameHotel"> {/* --------------------------------------------------------- find page table 
                       . h o t e l  
                    </div>
                    <div>
                        <form action="" className="form" onSubmit={this.onadd}> 
                            <label className="label"> Type Room : </label>
                            <select className="typeRoom">
                                <option value="Superior">Superior &nbsp;&nbsp; ( 2 people )</option>
                                <option value="Delux">Delux room &nbsp;&nbsp; ( 2 people )</option>
                                <option value="Sweet">Sweet room &nbsp;&nbsp; ( 2 people )</option>
                                <option value="Suit">Suit room &nbsp;&nbsp; ( 4 people )</option>
                                <option value="Family">Family room &nbsp;&nbsp; ( 4 people )</option>
                            </select>
                            <label className="label"> Check in : </label>
                            <input type="date"  name="checkin" value="2020-04-04" min="2020-04-05" max="2021-12-31"/>
                            <label className="label"> Check out : </label>
                            <input type="date" name="checkout" value="2020-04-05" min="2020-04-05" max="2021-12-31"/>
                            <label className ="label"> Amount : </label>   
                            <input type="number" name="amount" placeholder="0"/>
                            <input type="submit" value="FIND" onChange={this.onChange}/>    
                        </form>
                    </div>
                </div> */}

                {/* <div className = "result-list">
                    <div className = "result">
                        Result list
                    </div>
                    <table className ="list">
                        <tr className = "row">
                            <td className = "typeroom">
                                SWEET ROOM
                            </td>
                            <td className ="number">
                                S201
                            </td>
                            <td className = "iconPerson">
                                <Person fontSize="27px" color="#31312E"/>
                            </td >
                            <td className = "amount">
                                2
                            </td>
                            <td className = "iconCash">
                                <Cash fontSize="30px" color="#31312E"/>
                            </td>
                            <td className = "course">
                             3000
                            </td>
                            <td className = "iconArrow">
                                <Arrow fontSize="30px" color="#31312E"/>
                            </td>
                        </tr>
                    </table>
                </div> */}

                {/* <form id="add-transaction_form" onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Transaction Name:</label>
                    <input 
                    type="text" 
                    name="name" 
                    className="form-control" 
                    placeholder="Expense detail ..."
                    onChange={this.onChange}
                    value={this.state.name}
                    />
                </div> */}
                {/* <input type="submit" value="Add Transaction" className="btn btn-primary btn-block" onChange={this.onChange}/>
                </form> */}


                {/* <div className="testRoom">
                    <div className="room"> 
                        <span className="headA">S201</span>
                        <span className="headB">. h o t e l</span>
                    </div> 
                    <div className="roomDetail">
                        <form className="formDetail">
                            <div className="col-25">
                                <label className="forms">Name: </label>
                            </div>
                            <div className="col-75">
                                <input type="text" name="fname" placeholder="Jacob"/>
                            </div>
                            <div className="col-25">
                                <label className="forms">Surname: </label>
                            </div>
                            <div className="col-75">
                                <input type="text" name="lname" placeholder="Wilton"/>
                            </div>
                            <div className="col-25">
                                <label className="forms"> Peraonal ID: </label>
                            </div>
                            <div className="col-75">
                                <input type="text" name="id" placeholder="xxxx-xxx-xxx-xxx"/>
                            </div>
                            <div className="col-25">
                                <label className="forms"> Phone number: </label>
                            </div>
                            <div className="col-75">
                                <input type="tel" name="number" placeholder="08xxxxx78"/>
                            </div>
                            <div className="col-25">
                                <label className="forms"> Check in: </label>
                            </div>
                            <div className="col-25" id="date">
                                <label className="forms" id="date2"> 04/04/2020</label>
                            </div>
                            <div className="col-25">
                                <label className="forms" > Check out: </label>
                            </div>
                            <div className="col-25" id="date">
                                <label className="forms" id="date2"> 04/05/2020</label>
                            </div>
                            <div className="col-25">
                                <label className="forms"> price:</label>
                            </div>
                            <div className="col-25" id="price">
                                <label className="forms" id="date2"> 3000 bath</label>
                            </div>

                            <ModalTest/>
                            {/* <div className="col-100" id="submit">
                                <input type="submit" value="submit" id="submit" />
                            </div> */}
                        {/* </form> */}
                {/* <div className="center">{/* ---------------------------------------------------------- edit profile 
                    <div className = "nameHotel">
                        .my profile  
                    </div> 
                    <div className="profile">
                        <div className="col-25">
                            <label className="forms">Name: </label>
                        </div>
                        <div className="col-75">
                            <label className="text" id="">Jacob</label>
                        </div>
                        <div className="col-25">
                            <label className="forms">Surname: </label>
                        </div>
                        <div className="col-75">
                            <label className="text">Wilson</label>
                        </div>

                        <div className="col-25">
                            <label className="forms"> Email </label>
                        </div>
                        <div className="col-75" id="date">
                            <label className="forms" id="date2"> Jacob_wilson@example.com</label>
                        </div>
                        <div className="col-25">
                            <label className="forms" > Password </label>
                        </div>
                        <div className="col-75" id="date">
                            <label className="forms" id="date2"> xxxxxxxxxxxx </label>
                        </div>
                        <div className="col-25">
                            <label className="forms"> Peraonal ID: </label>
                        </div>
                        <div className="col-75">
                            <label className="text" >xxxx-xxx-xxx-xxx</label>
                        </div>
                        <div className="col-25">
                            <label className="forms"> Phone number: </label>
                        </div>
                        <div className="col-75">
                            <label className="text">08xxxxxx78</label>
                        </div>
                        <div className="col-100">
                            <div id="edit">
                                <ModalProfile/>
                            </div>
                        </div>
                        
                    </div>
                    
                </div> */}
               

                {/* <div className="App container">
            <Route path="/Findpage.jsx" component={} />
            <Route path="/about" component={About} />
                </div> */}
                <div className="footer" id="homeFoot"> {/* ------------------------------------------------------------------------- footer send to about us page */}
                    . h o t e l  &nbsp;&nbsp; | &nbsp;&nbsp;
                    <Link to="/About">
                        <button className="footerBtn">
                            a b o u t &nbsp;&nbsp;&nbsp;&nbsp;u s
                        </button>
                    </Link>
          </div>
        
                
                </section>
                
            
            
        ) 
    } 

}

export default Home