import ImageShow from './ImageShow.jsx';
import './ImageList.css';

function ImageList({ images }) {
  return <div className='image-list'>
    {images.map(image => {
      return <ImageShow key={image.id} image={image} />
    })}
  </div>;
}

export default ImageList;