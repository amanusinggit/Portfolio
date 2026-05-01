const ImageContainer = () => {
    return (
        <div className="image-container">
          <img className="display-picture" src="./Resources/profile-pic.png" alt="Profile Picture"></img>
        </div>
    );
}

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-picture">
        <ImageContainer />
        <button className="resume-button">
          <i className="fa-solid fa-file-arrow-down"></i>
          <span>Resume</span>
        </button>
      </div>
      <div className="profile-description">
        <h2>Title</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam fugiat eius delectus cupiditate fugit voluptates dolores amet, esse doloremque alias. Ex commodi perferendis quisquam explicabo id? Quo facere exercitationem minus. Asperiores, nobis. Ullam, distinctio doloribus aliquam rem nam porro quam ipsum maiores totam et asperiores repellendus vitae fuga exercitationem velit!</p>
      </div>
    </div>
  );
}
