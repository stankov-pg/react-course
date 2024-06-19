function ImageShow({ image }) {
  return (
    <div style={{width: '200px'}}>
      <img style={{maxWidth: '100%'}} src={image.urls.full} alt={image.alt_description} />
    </div>
  )
}

export default ImageShow;
