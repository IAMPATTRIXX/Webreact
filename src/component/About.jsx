import React from 'react'
import {Link} from 'react-router-dom';
import '../bookStyle.css'

function About (){
    return(
        <div className="center">
            <table>
                <tr>
                    <td>
                        <img src="./ting.jpg" height="300" width="300" >

                        </img>
                    </td>
                   
                    <td>
                        <img src="./sun.jpg" height="300" width="300" >

                        </img>
                    </td>
                    
                    <td>
                        <img src="./wave.jpg" height="300" width="300">

                        </img>
                    </td>
                    
                </tr>
                <tr>
                    <td>
                        <p> Kansiree Lee 610610568 </p>
                    </td>
                    <td>
                        <p> Narichot Ajareepipat 610610591 </p>
                    </td>
                    <td>
                        <p> Siwakorn Nakyim 610610705 </p>
                    </td>
                </tr>
            </table>
            <div className="footer" id="homeFoot"> {/* ------------------------------------------------------------------------- footer send to about us page */}
                     <Link to="/Home">
                        <button className="footerBtn">
                            . h o t e l  &nbsp;&nbsp; 
                        </button>
                    </Link>
                        &nbsp;&nbsp; | &nbsp;&nbsp;
                        <button className="footerBtn">
                            a b o u t &nbsp;&nbsp;&nbsp;&nbsp;u s
                        </button>
                    
          </div>
        </div>
    )
}
export default About