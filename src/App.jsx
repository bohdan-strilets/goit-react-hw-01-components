import SocialProfile from "./components/SocialProfile/SocialProfile";
import user from "./data/user.json";

export default function App() {
  return (
    <div>
      <SocialProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </div>
  );
}
