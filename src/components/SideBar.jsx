import { useDispatch } from "react-redux";
import { saved, sorted } from "../features/filters/FiltersSlice";
import { useState } from "react";

export default function SideBar() {
  const [isSaved, setIsSaved] = useState(false);
  const dispatch = useDispatch();

  const handleSort = (e) => {
    dispatch(sorted(e.target.value));
  };

  return (
    <aside>
      <div className="sidebar-items">
        <div className="sidebar-content">
          <h4>Sort</h4>
          <select
            onChange={handleSort}
            name="sort"
            id="lws-sort"
            className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
          >
            <option value="">Default</option>
            <option value="newest">Newest</option>
            <option value="most_liked">Most Liked</option>
          </select>
        </div>
        <div className="sidebar-content">
          <h4>Filter</h4>
          <div className="radio-group">
            {/* <!-- handle filter on button click --> */}
            <div>
              <input
                type="radio"
                name="filter"
                id="lws-all"
                checked={!isSaved}
                onChange={() => {
                  setIsSaved(false);
                  dispatch(saved(false));
                }}
                className="radio"
              />
              <label htmlFor="lws-all">All</label>
            </div>
            <div>
              <input
                type="radio"
                name="filter"
                id="lws-saved"
                className="radio"
                checked={isSaved}
                onChange={() => {
                  setIsSaved(true);
                  dispatch(saved(true));
                }}
              />
              <label htmlFor="lws-saved">Saved</label>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
