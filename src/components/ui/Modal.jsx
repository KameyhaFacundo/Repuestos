import { useEffect, useRef } from "react";
import { CloseIcon } from "./Icons";

// Diálogo accesible basado en <dialog>: foco atrapado, Esc y clic afuera para cerrar.
function Modal({ open, onClose, title, children }) {
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      className="modal"
      aria-label={title}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === ref.current) onClose();
      }}
    >
      {open && (
        <div className="modal__panel">
          <button type="button" className="modal__close" onClick={onClose} aria-label="Cerrar">
            <CloseIcon />
          </button>
          {children}
        </div>
      )}
    </dialog>
  );
}

export default Modal;
