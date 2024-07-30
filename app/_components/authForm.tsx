
type Props = {
  method: "login" | "register";
};

const AuthForm = (props: Props) => {
  return (
    <form className="flex flex-col gap-2">
      <h2 className="text-center capitalize">{props.method}</h2>
      <input className="p-2 rounded-sm" type="text" placeholder="Username" />
      <input className="p-2 rounded-sm" type="password" placeholder="Paswword" />
      <button type="submit" className="capitalize bg-blue-600 p-2 rounded-sm">
        {props.method}
      </button>
    </form>
  );
};

export default AuthForm;
