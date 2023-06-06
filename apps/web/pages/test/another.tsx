import { Button } from "primereact/button";
import { useSnapshot } from "valtio";
import { userStore } from "../../stores/user-store";

const Another = () => {
  const { count } = useSnapshot(userStore);

  console.log("another");
  return (
    <div>
      <Button
        onClick={() => {
          userStore.setUserName();
        }}
      >
        set user name
      </Button>
      <div>
        {count}
        <Button
          onClick={() => {
            userStore.addNumber();
          }}
        >
          user store add
        </Button>
      </div>
    </div>
  );
};

export default Another;
