import { Button } from "primereact/button";
import { useSnapshot } from "valtio";
import { userStore } from "../../stores/user-store";

const Another2 = () => {
  const { count2 } = useSnapshot(userStore);

  console.log("another2");
  return (
    <div>
      <div>
        {count2}
        <Button
          onClick={() => {
            userStore.add2();
          }}
        >
          add 2
        </Button>
      </div>
    </div>
  );
};

export default Another2;
