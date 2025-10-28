import { useState } from "react";
import PageHeader from "../components/block/PageHeader";
import WorkItem from "../components/work/WorkItem";
import workData from "../data/workData";

const Work = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(workData.map(item => item.category))];

  const filteredWorks = workData.filter(work => {
    const matchesSearch = work.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || work.category.includes(selectedCategory);

    return matchesSearch && matchesCategory;
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
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
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