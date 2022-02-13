import PropTypes from "prop-types";
import defaultImage from "./defaultImage.png";
import s from "../SocialProfile/SocialProfile.module.css";

export default function Profile({
  username = "User Name",
  tag,
  location,
  avatar = defaultImage,
  followers = 0,
  views = 0,
  likes = 0,
}) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img
          src={avatar}
          alt="User avatar"
          width={100}
          height={100}
          className={s.avatar}
        />
        <p className={s.name}>{username}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.item}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{followers}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{views}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.prototype = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
