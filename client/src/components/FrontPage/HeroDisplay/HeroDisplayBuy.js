import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HeroDisplayBuy extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
      <div className='hero-display'>
        <div className='hero-wrapper'>
          <div className='video-wrapper'>
            <video autoPlay muted loop poster='https://videos.zillowstatic.com/homepage/video_zest_20170503_1800b_q.jpg'>
              <source src={require('../../../assets/videos/house2.mp4')} type='video/mp4' />
            </video>
          </div>

          <div className='search-container'>
            <header className='home-page-header'>
              <h1 className='heading'>Find your way home</h1>
            </header>
            <div className='home-page-tabs'>
              <ul>
                <li className='active'>
                  <Link to='/buy'>
                    Buy
                  </Link>
                </li>
                <li className=''>
                  <Link to='/rent'>
                    Rent
                  </Link>
                </li>
                <li className=''>
                  <Link to='/sell'>
                    Sell
                  </Link>
                </li>
                <li className=''>
                  <Link to='/estimate'>
                    Estimate
                  </Link>
                </li>
              </ul>
            </div>
            <form className='search-form'>
              <div className='input-wrapper'>
                <input type='text' autoComplete='off' aria-autocomplete='list' aria-controls='react-autowhatever-1' className='search-input'
                       placeholder='Enter an address, neighborhood, city, or ZIP code' value='' />
              </div>
              <div className='searchBtnContainer'>
                <button className='search-button'>
                  <span className='searchBtnText'>Search</span>
                </button>
              </div>
            </form>
          </div>

          <div className='hero-footer'>
            <div className='hero-footer-container'>
              <a className='upsell-main' href='/pre-approval/#/landing'>
                <img alt='Be ready to buy' className='icon' src='https://s.zillowstatic.com/homepage/static/upsell_agent_icon.svg' />
                <strong>Be ready to buy</strong>
                <span>Get pre-qualified by a local lender on Trillio.</span>
              </a>
              <a href='/pre-approval/#/landing' className='upsell-button zsg-button_primary'>Get started</a></div>
          </div>
        </div>
      </div>
    )
  }
}