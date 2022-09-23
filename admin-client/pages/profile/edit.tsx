import { EditProfileForm, PageTitle } from "components";

const EditProfilePage = () => {
  return (
    <main>
      <PageTitle routes={["Profile", "Edit"]} />
      <div className="spacer-X"></div>
      <EditProfileForm />
    </main>
  );
};

export default EditProfilePage;
