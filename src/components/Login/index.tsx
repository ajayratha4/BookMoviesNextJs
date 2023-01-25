import React, { useState } from "react";
import Button from "../Button";
import Modal from "../Modal";

interface Props {
  open: boolean;
  handleClose?: () => void;
  handleonSubmit?: (arg: { username: string; password: string }) => void;
}

const Login = ({ open, handleClose, handleonSubmit }: Props) => {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleForm =
    (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const handleLogin = () => {
    if (form.password && form.username) {
      handleonSubmit && handleonSubmit(form);
      handleClose && handleClose();
    }
  };

  return (
    <Modal open={open} handleClose={handleClose}>
      <div className="bg-white dark:bg-paper p-5 rounded w-2/5  ">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-left text-sm font-medium text-gray-900 dark:text-white">
              Username/Email
            </label>
            <input
              value={form.username}
              onChange={handleForm("username")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
              placeholder="John123"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-left text-sm font-medium text-gray-900 dark:text-white">
              Password
            </label>
            <input
              value={form.password}
              onChange={handleForm("password")}
              type="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
              placeholder="*****"
            />
          </div>
          <div className="flex justify-end gap-3">
            <Button>Cancel</Button>
            <Button onClick={handleLogin}>Login</Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Login;
