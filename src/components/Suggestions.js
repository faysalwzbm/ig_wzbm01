import "../styles/suggestions.scss";
import Profile from "./Profile";

import pic_08 from "../images/profileImages/picture_08.jpg";
import pic_09 from "../images/profileImages/picture_09.jpg";
import pic_10 from "../images/profileImages/picture_10.jpg";
import pic_11 from "../images/profileImages/picture_11.jpg";
import pic_12 from "../images/profileImages/picture_12.jpg";
import pic_31 from "../images/profileImages/picture_31.jpg";

function Suggestions() {
  return (
    <div className="suggestions">
      <div className="titleContainer">
        <div className="title">Suggestions For You</div>
        <a href="/">See All</a>
      </div>

      <Profile
        username="Maxime_Nienow"
        caption="Followed by albrian_marani + 8 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
        image={pic_08}
      />
      <Profile
        username="Delphine"
        caption="Followed by graceellenc_ + 1 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        image={pic_09}
      />
      <Profile
        username="Moriah.Stanton"
        caption="Follows you"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
        image={pic_10}
      />
      <Profile
        username="donald.duck"
        caption="Followed by dadatlacak + 7 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
        image={pic_11}
      />
      <Profile
        username="adam.is.savage"
        caption="Followed by vor_yesha + 4 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        image={pic_12}
      />
      <Profile
        username="Jamse_smith_15"
        caption="Followed by mapvault + 3 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
        image={pic_31}
      />
    </div>
  );
}

export default Suggestions;
