import { Modal } from "antd";
import SigninForm from "./form";

const SignIn = ({openin, setOpenin}) => {
  return (
    <>
      <Modal
        open={openin}
        onCancel={() => setOpenin(false)}
        footer={null}
        closable={false}
      >
        <div className="bg-gray-100  p-6">
          <SigninForm/>
        </div>
      </Modal>
    </>
  );
};
export default SignIn;
