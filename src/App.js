import "./styles.css";

export default function App({ username, userId }) {
  return (
    <div className="App">
      <div className="github-info">
        <ProfilePicture userId={"55119572"} />
        <ProfileLink username={"silvianaim02"} />
      </div>
    </div>
  );
}

function ProfilePicture({ userId }) {
  return <img src={`https://avatars.githubusercontent.com/u/${userId}`} />;
}

function ProfileLink({ username }) {
  return (
    <a href={`https://github.com/${username}`}>Klik githubnya {username}</a>
  );
}
