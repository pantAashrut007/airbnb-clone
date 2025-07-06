import React from 'react';
import './styles/home.css';
import Banner from './banner';
import Card from './Card';

function Home() {
  return (
    <div className = 'home'> 
      {/* <h1>Home component</h1> */}
      <Banner />
      <div className='home_section'>
      <Card
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
        title="Entire homes"
        description="Comfortable private places to stay"
      />

        <Card src = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" title='entire homes' description= 'test1' />
        <Card src = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" title='entire homes' description= 'test1' />
      </div>
      <div className='home_section'>
        {/* <Card src = "" title='entire homes' description= 'test1' />
        <Card src = "" title='entire homes' description= 'test1' />
        <Card src = "" title='entire homes' description= 'test1' /> */}
      </div>
    </div>
  )
}

export default Home;
