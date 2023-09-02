import { forwardRef, isValidElement, cloneElement } from "react";

import {useMergeRefs} from "@floating-ui/react";
import { useTooltipContext } from "../../hooks/useTooltipContext";
import { TooltipContext } from "./Tooltip";

export const TooltipTrigger = forwardRef(function TooltipTrigger({ children, asChild = false, ...props }, propRef) {
  const context = useTooltipContext(TooltipContext);
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
      data-state={context.open ? "open" : "closed"} // The user can style the trigger based on the state
      {...context.getReferenceProps(props)}
    >
      {children}
    </span>
  );
});
