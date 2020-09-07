## React Carousel

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This React Component renders a carousel of images, which will scroll automatically through a set of images and allows the user to navigate between them.

The Component takes the following props: 

* An array of objects `sliderImages`. Each image has an `img` prop which links to the image, and an optional `url` prop which will add a link on the image in the interface. 

* A `duration` number which specifies the time in seconds until the next image is shown automatically.

* A `showNavigation` boolean. If set to false, the users will not be able to navigate through the carousel manually. 

You can find a live example of the carousel [here](https://react-carousel-pauline.netlify.app/). Because of Halloween coming up, the current images have a witchy theme ! 

You can start the preview with `npm run start`, and build for production with `npm run build`. 
