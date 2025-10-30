import { useState } from "react";
import PageHeader from "../components/block/PageHeader";
import WorkItem from "../components/works/WorkItem";
import workData from "../data/workData";

const Works = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(workData.map(item => item.category))];

  const filteredWorks = workData.filter(works => {
    const matchesSearch = works.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || works.category.includes(selectedCategory);

    return matchesSearch && matchesCategory;
  });

  const sortedWorks = [...filteredWorks].sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <main className='siteContent workPage'>
      <section className="workSec">
        <PageHeader
            title='Works'
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
              sortedWorks.length > 0 ? (
              sortedWorks.map((item, index) => (
                <WorkItem
                  key={index}
                  title={item.title}
                  date={item.date}
                  category={item.category}
                  image={item.image}
                  description={item.description}
                  url={item.url}
                  tags={item.tags}
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

export default Works;