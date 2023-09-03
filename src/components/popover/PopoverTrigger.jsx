import {forwardRef, isValidElement, cloneElement} from "react";

import {useMergeRefs} from "@floating-ui/react";
import { usePopoverContext } from "../../hooks/usePopoverContext";
import { PopoverContext } from "./Popover";

export const PopoverTrigger = forwardRef(
  function PopoverTrigger({ children, asChild = false, ...props }, propRef) {
    const context = usePopoverContext(PopoverContext);
    const childrenRef = children.ref;
    const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

    // `asChild` allows the user to pass any element as the anchor
    if (asChild && isValidElement(children)) {
      return cloneElement(
        children,
        context.getReferenceProps({
          ref,
          ...props,
          ...children.props,
          "data-state": context.open ? "open" : "closed"
        })
      );
    }

    return (
      <span
        ref={ref}
        type="button"
        // The user can style the trigger based on the state
        data-state={context.open ? "open" : "closed"}
        {...context.getReferenceProps(props)}
      >
        {children}
      </span>
    );
  }
);