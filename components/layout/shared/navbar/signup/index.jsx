import { Modal } from "antd";
import SignupForm from "./form";
const Signup = ({ open, setOpen }) => {
  
  return (
    <>
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        closable={false}
      >
        <div className="bg-gray-100  p-6">
          <SignupForm />
        </div>
      </Modal>
    </>
  );
};
export default Signup;
