import React, { useRef, useImperativeHandle } from "react";

import Form, { FormRef } from "./Form";

const AppHandler: React.FC = () => {
  const formRef = useRef<FormRef>(null);

  function handleSubmit() {
    formRef.current?.submit();
  }

  return <Form initialData={"data"} ref={formRef} />;
};

export default AppHandler;
