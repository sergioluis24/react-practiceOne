"use client";

import { Button, Modal, ModalBody, ModalHeader } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { IconClose } from "./../icons/IconClose.jsx";

export function ModalError({ error, hidden }) {
  const [openModal, setOpenModal] = useState(hidden);

  return (
    <>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <ModalHeader />
        <div className="flex flex-row justify-end mr-6 ">
          <button onClick={() => setOpenModal(false)}>
            <IconClose classProp={"bg-red-500 rounded-full"} />
          </button>
        </div>
        <ModalBody>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              {error}
            </h3>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}
