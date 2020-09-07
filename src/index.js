import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ImageCarousel from './components/ImageCarousel'

// add link to images in the following array : 

const sliderImages = [{
  img: 'https://images.unsplash.com/photo-1508931133503-b1944a4ecdd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  url: 'https://unsplash.com/photos/twVS-YjQn9Y'
}, {
	img: 'https://images.unsplash.com/photo-1503416997304-7f8bf166c121?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80',
	url: 'https://unsplash.com/photos/NbgQfUvKFE0'
}, {
  img: 'https://images.unsplash.com/photo-1497800839469-bdbe4fd9d391?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  url: 'https://unsplash.com/photos/MnKWt1W1GDg'
}, {
  img: 'https://images.unsplash.com/photo-1478744919174-118dbd24973e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
  url: 'https://unsplash.com/photos/0tfz7ZoXaWc'
}, {
  img: 'https://images.unsplash.com/photo-1574357675216-a7ce77356a2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  url: 'https://unsplash.com/photos/QQQyxEV9DBY'
}]

class App extends React.Component {
  render() {
    return (
      <div className='slider-wrapper'>
				<ImageCarousel images={sliderImages} duration={2} showNavigation />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
