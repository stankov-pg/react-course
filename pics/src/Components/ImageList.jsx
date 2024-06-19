import ImageShow from './ImageShow.jsx';

function ImageList({ images }) {
  return <div>
    {images.map(image => {
      return <ImageShow key={image.id} image={image} />
    })}
  </div>;
}

export default ImageList;
