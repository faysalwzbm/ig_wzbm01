import "../styles/stories.scss";
import Story from "./Story";
import HorizontalScroll from "react-scroll-horizontal";

import pic_01 from "../images/profileImages/picture_01.jpg";
import pic_02 from "../images/profileImages/picture_02.jpg";
import pic_03 from "../images/profileImages/picture_03.jpg";
import pic_04 from "../images/profileImages/picture_04.jpg";
import pic_05 from "../images/profileImages/picture_05.jpg";
import pic_06 from "../images/profileImages/picture_06.jpg";
import pic_07 from "../images/profileImages/picture_07.jpg";

function Stories() {

  return (
    <div className="stories">
      <HorizontalScroll className="scroll" reverseScroll={true}>
        <Story username="Bret" image={pic_01} />
        <Story username="Antonette" image={pic_02} />
        <Story username="Samantha" image={pic_03} />
        <Story username="Karianne" image={pic_04} />
        <Story username="Kamren" image={pic_05} />
        <Story username="Leopoldo_Corkery" image={pic_06} />
        <Story username="Elwyn.Skiles" image={pic_07} />
        {/* <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story /> */}
      </HorizontalScroll>
    </div>
  );
}

export default Stories;
