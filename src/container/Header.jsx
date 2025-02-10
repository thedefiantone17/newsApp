import React, { useState } from "react";

function Header({ onSearch, onCategoryClick }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
            <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm  dropdown-content bg-base-100  rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
              <a className="text-lg" onClick={() => onCategoryClick("Tech")}>Tech</a>
              </li>
              <li>
              <a onClick={() => onCategoryClick("Sports")}>Sports</a>
              </li>
              <li>
              <a onClick={() => onCategoryClick("Politics")}>Politics</a>
              </li>
              <li>
              <a onClick={() => onCategoryClick("Entertainment")}>Entertainment</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl lg">One Stop News</a>
        </div>


        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="text-lg" onClick={() => onCategoryClick("Tech")}>Tech</a>
            </li>
            <li>
              <a className="text-lg" onClick={() => onCategoryClick("Sports")}>Sports</a>
            </li>
            <li>
              <a className="text-lg" onClick={() => onCategoryClick("Politics")}>Politics</a>
            </li>
            <li>
              <a className="text-lg" onClick={() => onCategoryClick("Entertainment")}>Entertainment</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end flex ">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" id="searchInput" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={handleKeyPress}/>
          </div>


          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-72 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Header;
