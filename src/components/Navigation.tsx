import Link from "next/link";
import { navItems } from "@/constants";

const Navigation = () => {
  return (
    <div className="navbar p-4 bg-base-300">
      <div className="navbar-start">
        <Link href="/">
          <span className="">logo</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl space-x-2">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link key={path} className="btn" href={path}>
                {name}
              </Link>
            );
          })}
        </ul>
      </div>

      <div className="navbar-end ">
        <button className="btn">Sign Up</button>
      </div>
    </div>
  );
};

export default Navigation;
