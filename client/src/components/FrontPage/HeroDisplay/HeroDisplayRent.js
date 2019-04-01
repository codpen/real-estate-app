import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HeroDisplayRent extends Component {
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
              <source src={require('../../../assets/videos/house4.mp4')} type='video/mp4' />
            </video>
          </div>

          <div className='search-container'>
            <header className='home-page-header'>
              <h1 className='heading'>Find your next rental</h1>
            </header>
            <div className='home-page-tabs'>
              <ul>
                <li className=''>
                  <Link to='/buy'>
                    Buy
                  </Link>
                </li>
                <li className='active'>
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
              <a className='upsell-main' href='/'>
                <img alt='Be ready to buy' className='icon' src='https://s.zillowstatic.com/homepage/static/upsell_list_a_rental.png' />
                <strong>What can you afford?</strong>
                <span>Use our rent calculator to find out.</span>
              </a>
              <a href='/property' className='upsell-button zsg-button_primary'>Math made easy</a></div>
          </div>
        </div>
      </div>
    )
  }
}