export const Card = ({ data, height, width }) => {
    const spanStyle = {
      display: "block",
      paddingLeft: "50px",
      textAlign: "left"
    };
    return (
      <div style={{ width: "300px", height: "300px", margin: "auto",color:'grey' }}>
        <h4>{data.name}'s Profile</h4>
        <img
          style={{ borderRadius: "6px" }}
          src={data.image}
          alt="user profile"
          height={height}
          width={width}
        />
        <span style={spanStyle}>
          ❤️ {data.likes} · 💬 {data.comments}
        </span>
        <span style={{ ...spanStyle, color: "lightgrey" }}>
          {data.comments > 1
            ? `veiw all ${data.comments} comments`
            : `View ${data.comments} comment`}
        </span>
      </div>
    );
  };
  