/* eslint-disable react/prop-types */
function Modal({ open, onClose, children }) {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex items-center justify-center transition-colors ${open ? "visible bg-black/20" : "invisible"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`rounded-xl bg-white p-6 shadow transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
