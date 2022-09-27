import { useState } from "react";

import {
  ChangePasswordModal,
  EditProfileForm,
  PageTitle,
  Modal,
} from "components";

const EditProfilePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <main>
      <PageTitle routes={["Profile", "Edit"]} />
      <div className="spacer-X"></div>
      <EditProfileForm
        modalOpener={() => {
          setIsModalOpen(true);
        }}
      />
      {isModalOpen && (
        <Modal>
          <ChangePasswordModal />
        </Modal>
      )}
    </main>
  );
};

export default EditProfilePage;
