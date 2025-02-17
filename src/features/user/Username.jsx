import { useSelector } from "react-redux";

function Username() {
  const username = useSelector((state) => state.user.username);

  if (!username) return null;
  return (
    <div className="flex items-center justify-center gap-2">
      <img
        height="24"
        width="24"
        src="https://img.icons8.com/fluency-systems-filled/96/user.png"
        alt="user"
      />
      <div className="hidden text-sm font-semibold md:block">{username}</div>
    </div>
  );
}

export default Username;
