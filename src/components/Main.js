import React, {Component} from 'react'
import tether from '../tether.png'
import Airdrop from './Airdrop'

class Main extends Component {
    render() {
        return (
            <div id='content' className='mt-4' style={{ maxWidth: '80%', margin: '0 auto' }}>
                
                {/* Balance Section */}
                <div className="text-center text-light mb-4" style={{ 
                    backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                    padding: '20px', 
                    borderRadius: '15px', 
                    boxShadow: '0px 0px 15px rgba(255, 255, 255, 0.1)', 
                    width: '100%' 
                }}>
                    <div className="row">
                        {/* Staking Balance */}
                        <div className="col-md-6 mb-3">
                            <h2 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>Staking Balance</h2>
                            <h1 style={{ fontSize: '2.5rem', color: '#00bfff' }}>
                                {window.web3.utils.fromWei(this.props.stakingBalance, 'Ether')} USDT
                            </h1>
                        </div>

                        {/* Reward Balance */}
                        <div className="col-md-6 mb-3">
                            <h2 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>Reward Balance</h2>
                            <h1 style={{ fontSize: '2.5rem', color: '#FFD700' }}>
                                {window.web3.utils.fromWei(this.props.rwdBalance, 'Ether')} RWD
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Stake and Withdraw Section */}
                <div className='card p-4' style={{ 
                    opacity: '.95', 
                    backgroundColor: 'rgba(0, 0, 0, 0.85)', 
                    borderRadius: '15px', 
                    maxWidth: '70%', 
                    margin: '0 auto' 
                }}>
                    
                    <form 
                        onSubmit={(event) => {
                            event.preventDefault()
                            let amount = this.input.value.toString()
                            amount = window.web3.utils.toWei(amount, 'Ether')
                            this.props.stakeTokens(amount)
                        }} 
                        className='mb-3'>
                        
                        <div style={{borderSpacing: '0 1em'}}>
                            {/* Stake Tokens Label */}
                            <label className='float-left' style={{marginLeft: '15px', color: 'white', fontSize: '1.2rem'}}>
                                <b>Stake Tokens</b>
                            </label>
                            <span className='float-right' style={{marginRight: '15px', color: 'white', fontSize: '1.2rem'}}>
                                Balance: {window.web3.utils.fromWei(this.props.tetherBalance, 'Ether')} USDT
                            </span>
                            
                            {/* Input for Staking */}
                            <div className='input-group mb-4'>
                                <input
                                    ref={(input) => { this.input = input }} 
                                    type='text'
                                    placeholder='0'
                                    required
                                    style={{ 
                                        borderRadius: '10px', 
                                        padding: '10px', 
                                        border: '1px solid #00bfff', 
                                        width: '100%', 
                                        fontSize: '1.1rem' }}
                                />
                                <div className='input-group-open'>
                                    <div className='input-group-text'>
                                        <img src={tether} alt='tether' height='32'/>
                                        &nbsp;&nbsp;&nbsp; USDT
                                    </div>
                                </div>
                            </div>
                            
                            {/* Deposit Button */}
                            <button type='submit' className='btn btn-info' style={{ 
                                borderRadius: '10px', 
                                backgroundColor: '#007bff', 
                                border: 'none', 
                                fontSize: '1.1rem', 
                                padding: '10px 30px', 
                                width: '50%', 
                                margin: '10px auto', 
                                display: 'block' }}>
                                DEPOSIT
                            </button>

                            {/* Withdraw Button */}
                            <button 
                                type='submit'
                                onClick={(event) => {
                                    event.preventDefault(
                                        this.props.unstakeTokens()
                                    )
                                }}
                                className='btn btn-danger' 
                                style={{ 
                                    borderRadius: '10px', 
                                    backgroundColor: '#dc3545', 
                                    border: 'none', 
                                    fontSize: '1.1rem', 
                                    padding: '10px 30px', 
                                    width: '50%', 
                                    margin: '10px auto', 
                                    display: 'block' }}>
                                WITHDRAW
                            </button>
                        </div>
                    </form>

                    {/* Airdrop Section */}
                    <div className='text-center mt-4' style={{color: 'white', fontSize: '1.2rem'}}>
                        <b>AIRDROP</b>
                        <Airdrop 
                            stakingBalance={this.props.stakingBalance}
                            decentralBankContract={this.props.decentralBankContract}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;
