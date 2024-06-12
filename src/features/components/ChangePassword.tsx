import { useToast } from "@providers";

import { Button, Modal } from "@shared/components";

import { AccountSettings } from "@aws-amplify/ui-react";

import { signOut } from "aws-amplify/auth";

type TChangePasswordProps = {
  visible: boolean;
  handleClose: () => void;
};

const components = (handleClose: { (): void; (): void }) => ({
  CurrentPasswordField: (props) => (
    <AccountSettings.ChangePassword.CurrentPasswordField
      {...props}
      label="Current password"
      placeholder="Current password"
      errorMessage="Asadasd"
    />
  ),
  NewPasswordField: (props) => (
    <AccountSettings.ChangePassword.NewPasswordField
      {...props}
      label="New password"
      placeholder="New password"
    />
  ),
  ConfirmPasswordField: (props) => (
    <AccountSettings.ChangePassword.ConfirmPasswordField
      {...props}
      label="New password"
      placeholder="New password"
    />
  ),
  SubmitButton: (props) => (
    <div
      className="flex w-full justify-content-between gap-5"
      style={{ padding: "2.5rem 0" }}
    >
      <Button
        variant="outlined"
        label="Cancel"
        rootClassname="w-full"
        onClick={() => {
          // This line
          handleClose();
        }}
      />
      <AccountSettings.ChangePassword.SubmitButton
        {...props}
        isFullWidth
        loadingText="laoding"
        className="bg-bluegray-500 text-white"
      />
    </div>
  ),
});

const ChangePassword = ({ visible, handleClose }: TChangePasswordProps) => {
  const { showToast } = useToast();

  const handleSuccess = () => {
    handleClose();
    showToast("success", "Password has be changed successfuly.");
    signOut({ global: true });
  };

  const content = (
    <AccountSettings.ChangePassword
      components={components(handleClose)}
      onSuccess={handleSuccess}
    />
  );

  return (
    <Modal
      visible={visible}
      onHide={handleClose}
      width="37rem"
      title="Change password"
      content={content}
    />
  );
};

export { ChangePassword };
