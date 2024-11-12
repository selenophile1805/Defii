import React, {Component} from 'react'
import bank1 from '../bank1.png'

class Navbar extends Component {
    render() {
        return (
            <nav className='navbar navbar-dark fixed-top shadow p-0' style={{backgroundColor:'black', height:'65px'}}>
                <a className='navbar-brand col-sm-3 col-md-2 mr-0' 
                style={{color:'white'}}>
                <img src={bank1} width='70' height='50' className='d-inline-block align-top' alt='bank'/>
                &nbsp; <div style={{display:"inline-block", padding:"10px"}}>DEFII (Decentralized Banking)</div>
                </a>
                <ul className='navbar-nav px-3'>
                    <li className='text-nowrap d-none nav-item d-sm-none d-sm-block'>
                        <small style={{color:'white', display:"inline-block"}}>ACCOUNT NUMBER: <div style={{color:"#FF7F50",display:"inline-block"}}>{ this.props.account}</div>
                        </small>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;