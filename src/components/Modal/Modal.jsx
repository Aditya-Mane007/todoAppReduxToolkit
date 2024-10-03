import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { useDispatch, useSelector } from "react-redux"
import { closeModal } from "../../features/modalSlice"

function Modal({ open, children }) {
  const { updatingTodo } = useSelector((state) => state.todo)
  const { openModal } = useSelector((state) => state.modal)
  const dialogRef = useRef()
  const dispatch = useDispatch()
  const closeModalHandler = () => {
    if (dialogRef.current) {
      dialogRef.current.close()
    }
  }

  useEffect(() => {
    const handlerEscKey = (e) => {
      if (e.key === "Escape" && open) {
        dispatch(closeModal())
        closeModalHandler()
      }
    }

    if (openModal === "updateTodo" && updatingTodo.length < 1) {
      dispatch(closeModal())
      closeModalHandler()
    }
    if (open) {
      window.addEventListener("keydown", handlerEscKey)
    }

    return () => {
      window.removeEventListener("keydown", handlerEscKey)
    }
  }, [open, dispatch, updatingTodo])

  return createPortal(
    <dialog ref={dialogRef} open={open} onClose={closeModal} className="modal">
      <>{children}</>
    </dialog>,
    document.getElementById("modal")
  )
}

export default Modal
