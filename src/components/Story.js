import "../styles/story.scss";
import ProfileIcon from "./ProfileIcon";
// import users from "../data/users";

const Story = (props) => {
  let accountName = props.username;
  if (accountName.length > 10) {
    accountName = accountName.substring(0, 10) + "...";
  }
  let image = props.image;

  return (
    <div className="story">
      <ProfileIcon iconSize="big" storyBorder={true} image={image} />
      <span className="accountName">{accountName}</span>
    </div>
  );
}

export default Story;
