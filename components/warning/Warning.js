import React from "react";
import { Snackbar } from "react-native-paper";

const Warning = (props) => {
  const onDismissSnackBar = () => props.setVisible(false);

  return (
    <Snackbar
      visible={props.visible}
      onDismiss={onDismissSnackBar}
      action={{
        label: "x",
        onPress: () => {
          // Do something
        },
      }}
    >
      {props.message}
    </Snackbar>
  );
};

export default Warning;
