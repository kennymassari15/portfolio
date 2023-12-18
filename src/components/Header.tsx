import { HomeIcon } from "@heroicons/react/20/solid";
import { NavigationStore } from "@/store/NavigationStore";

export const Header = () => {
  const { curNav, navs, setNav } = NavigationStore();

  return (
    <div className="flex flex-row justify-between w-full overflow-hidden bg-white rounded-lg shadow-2xl">
      <div className="flex flex-row items-center justify-center w-full text-xl text-gray-500 gap-x-3">
        <div className="p-4 bg-blue-300">
          <HomeIcon className="w-5 h-5 animate-pulse" />
        </div>
        {navs?.map((n, idx) => (
          <div
            key={idx}
            onClick={() => setNav(n)}
            className={`${
              curNav === n
                ? "text-black underline decoration-blue-500 decoration-2"
                : "hover:underline hover:decoration-blue-300 hover:decoration-2"
            } cursor-pointer`}
          >
            {n}
          </div>
        ))}
        <div className="flex-grow"></div>
        {/* <a
          href="https://blog.mbudiman.com/"
          rel="noreferrer"
          target={"_blank"}
          className="px-4 text-blue-600 cursor-pointer"
        >
          Blog
        </a> */}
      </div>
    </div>
  );
};
