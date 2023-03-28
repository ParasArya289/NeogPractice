const Q4 = ({ imageLink, caption, container }) => {
    return (
      <div style={container}>
        <img
          style={{ borderRadius: "10px", objectFit: "cover" }}
          src={imageLink}
          height="300"
          width="300"
          alt={caption}
        />
        <h3>{caption}</h3>
      </div>
    );
  };
  export default Q4;
  