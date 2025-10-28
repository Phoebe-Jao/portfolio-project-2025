import { useState } from "react";
import PageHeader from "../components/block/PageHeader";
import WorkItem from "../components/work/WorkItem";
import workData from "../data/workData";

const Work = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  const allTags = ["All", ...new Set(workData.flatMap(work => work.tags))];

  const filteredWorks = workData.filter(work => {
    const matchesSearch = work.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesTag =
      selectedTag === "All" || work.tags.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

  return (
    <main className='siteContent workPage'>
      <section className="workSec">
        <PageHeader
            title='Work'
            subtitle='My Works'
          />
        <div className="workSec__inner">
          <div className="workSec__filter">
            <select
              className="workSec__filterDropdown"
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
            >
              {allTags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Search works..."
              className="workSec__filterSearch"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <ul className="workSec__list">
            {
              filteredWorks.length > 0 ? (
              filteredWorks.map((item, index) => (
                <WorkItem
                  key={index}
                  title={item.title}
                  date={item.date}
                  category={item.category}
                  image={item.image}
                  description={item.description}
                  url={item.url}
                />
              ))
            ) : (
              <p className="workSec__empty">No works found.</p>
            )}
          </ul>
        </div>
      </section>
    </main>
  )
}

export default Work;