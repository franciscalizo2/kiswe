import { useRef } from 'react';
import useOnClickOutside from 'components/hooks/useOnOutsideClick';

interface ModalProps {
  handleCloseModal: () => void;
  noCloseOutsideClick?: boolean;
}

export default function Modal(props: ModalProps) {
  const { handleCloseModal, noCloseOutsideClick = false } = props;

  const modalRef = useRef(null);

  useOnClickOutside(modalRef, () => handleCloseModal(), noCloseOutsideClick);

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none my-6 mx-auto max-w-3xl">
        <div
          ref={modalRef}
          className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
        >
          <h3 className="text-3xl font-semibold">Modal Title</h3>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black" />
    </>
  );
}
