export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

enum ModalActionType {
  OPEN_MODAL = "OPEN_MODAL",
  CLOSE_MODAL = "CLOSE_MODAL",
}

export const openModal = (modal, error = []) => {
  return {
    type: ModalActionType.OPEN_MODAL,
    modal,
    error,
  };
};

export const closeModal = () => {
  return {
    type: ModalActionType.CLOSE_MODAL,
  };
};
