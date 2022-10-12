import { useUserStore } from "store";
import { AccountMenu, CHeader, MyAccountInfo } from "components";

const AccountPage = () => {
  const user = useUserStore((us) => us.user);
  return (
    <main>
      <CHeader />
      <div className="container page-start">
        {user && (
          <MyAccountInfo
            firstname={user.firstname}
            lastname={user.lastname}
            email={user.email}
            phone={user.phone}
          />
        )}
        <div style={{ marginTop: "1rem" }}>
          <AccountMenu />
        </div>
      </div>
    </main>
  );
};

export default AccountPage;
