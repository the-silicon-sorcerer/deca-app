"use client";

import React from "react";

interface AlertProps {
  message: string;
  children: React.ReactNode;
}

const Alert = ({ message, children }: AlertProps) => {
  return <div onClick={() => alert(message)}>{children}</div>;
};

export default Alert;
