import { useRef } from 'react';
import classNames from 'classnames';
import useOnClickOutside from 'components/hooks/useOnOutsideClick';

interface ModalProps {
  handleCloseModal: () => void;
  noCloseOutsideClick?: boolean;
  children: React.ReactNode;
  classes?: string;
}

export default function Modal(props: ModalProps) {
  const {
    handleCloseModal,
    noCloseOutsideClick = false,

    children,
    classes,
  } = props;

  const modalRef = useRef(null);

  useOnClickOutside(modalRef, () => handleCloseModal(), noCloseOutsideClick);

  return (
    <>
      <div
        role="dialog"
        id="dialog"
        aria-modal="true"
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none sm:my-6 mx-auto max-w-4xl"
      >
        <div
          ref={modalRef}
          className={classNames(
            `flex border-b border-solid border-slate-200 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none h-full sm:h-auto ${classes}`
          )}
        >
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-toggle="authentication-modal"
            onClick={handleCloseModal}
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          {children}
        </div>
      </div>
      <div className="opacity-50 fixed inset-0 z-40 bg-black" />
    </>
  );
}
