import React, { memo } from "react";
import type { FC, ReactNode } from "react";

import COMPONENT_NAMEWrapper from "./style.ts";

interface IProps {
  children?: ReactNode;
}

const COMPONENT_NAME: FC<IProps> = () => {
  return <COMPONENT_NAMEWrapper>{COMPONENT_NAME}</COMPONENT_NAMEWrapper>;
};

export default memo(COMPONENT_NAME);
