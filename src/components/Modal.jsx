const Modal = ({ isOpen, onClose, children }) => {
  return (
    <div className={`modal ${isOpen ? "is-open" : ""}`}>
      <div className="modal__overlay" onClick={onClose}></div>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>
          ✕
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal;