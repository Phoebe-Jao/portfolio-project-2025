import { useState } from "react";
import Modal from "../Modal";

const WorkItem = ({ title, date, category, image, description, url }) => {
  const [isOpen, setIsOpen] = useState(false);
  const formattedDate = date.replace(/-/g, ".");
  const formattedDate02 = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  return (
    <>
      <li className="workSec__listItem" onClick={() => setIsOpen(true)}>
        <div className="workSec__listItemImgWrap">
          <figure>
            <img src={`/images/works/${image}`} alt={title} />
          </figure>
        </div>
        <div className="workSec__listItemMeta">
          <span className="workSec__listItemCateg">{category}
          </span>
          <span className="workSec__listItemTime">{formattedDate}</span>
        </div>
        <p className="workSec__listItemTtl">{title}</p>
      </li>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="modal__title">{title}</h2>
        <p className="modal__meta">
          {formattedDate} | {category}
        </p>
        <img src={`/images/works/${image}`} alt={title} className="modal__image" />
        <div className="modal__descriptionWrap">
          <p className="modal__description">{description}</p>
          <p className="modal__description"><span className="u-txtMedium">Date created:</span> {formattedDate02}</p>
        </div>
        <div className="modal__urlWrap">
          <span className="modal__urlLabel u-txtMedium">URL: </span>
          <a href={url && url} target="_blank">{url === '' ? '' : url}</a>
        </div>
      </Modal>
    </>
  )
}

export default WorkItem;