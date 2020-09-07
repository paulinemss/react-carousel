import React from 'react';
import notFound from './media/image-not-found.png'; 
import { BiRadioCircleMarked, BiRadioCircle } from 'react-icons/bi';

export default class ImageCarousel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      index: 0
    }

    this.changeImage = this.changeImage.bind(this)
    this.selectImage = this.selectImage.bind(this)
    this.pauseImage = this.pauseImage.bind(this)
    this.addDefaultSrc = this.addDefaultSrc.bind(this)
  }
  changeImage() {
    const miliseconds = this.props.duration * 1000;
    const numberOfImages = this.props.images.length; 

    window.clearInterval(this.timer);

    this.timer = setInterval(() => {
      if (this.state.index === numberOfImages - 1) {
        this.setState({
          index: 0
        })
      } else {
        const newIndex = this.state.index + 1
        this.setState({
          index: newIndex
        })
      }
    }, miliseconds)
  }
  selectImage(indexBtn) {
    this.setState({
      index: indexBtn
    })
  }
  pauseImage() {
    window.clearInterval(this.timer);
  }
  addDefaultSrc(ev) {
    ev.target.src = notFound; 
  }
  componentDidMount() {
    this.changeImage()
  }
  componentWillUnmount() {
    window.clearInterval(this.timer);
  }
  render() {
    const { images } = this.props; 
    
    return (
      <div 
        className='wrapper' 
        onMouseOver={this.pauseImage}  
        onMouseOut={this.changeImage}
      >
        {images[this.state.index].url 
          ? <a 
              href={images[this.state.index].url} 
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                onError={this.addDefaultSrc} 
                src={images[this.state.index].img} 
                alt='Automnal' 
              />
            </a>
          : <img 
              onError={this.addDefaultSrc} 
              src={images[this.state.index].img} 
              alt='Automnal' 
            />
        }
        {this.props.showNavigation && <ul className='buttons-slider'>
          {images.map((image, index) => (
            <li key={index}>
              {index === this.state.index
                ? <button className='btn'><BiRadioCircleMarked /></button>
                : <button onClick={() => this.selectImage(index)} className='btn'><BiRadioCircle /></button>
              }
            </li>
          ))}
        </ul>}
      </div>
    )
  }
}