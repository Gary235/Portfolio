import {useContext} from "react";

export const usePopoverContext = (PopoverContext) => {
  const context = useContext(PopoverContext);

  if (context == null) {
    throw new Error("Popover components must be wrapped in <Popover />");
  }

  return context;
};
