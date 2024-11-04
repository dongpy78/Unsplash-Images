import { useGlobalContext } from "./context";

function ThemeToggle() {
  const { greeting } = useGlobalContext();
  console.log(greeting);
  return <div></div>;
}

export default ThemeToggle;
