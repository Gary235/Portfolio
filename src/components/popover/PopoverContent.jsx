import {forwardRef} from "react";

import {useMergeRefs, FloatingPortal, FloatingFocusManager} from "@floating-ui/react";
import { usePopoverContext } from "../../hooks/usePopoverContext";
import { PopoverContext } from "./Popover";

export const PopoverContent = forwardRef(
  function PopoverContent({ style, ...props }, propRef) {
    const { context: floatingContext, ...context } = usePopoverContext(PopoverContext);
    const ref = useMergeRefs([context.refs.setFloating, propRef]);

    if (!floatingContext.open) return null;

    return (
      <FloatingPortal>
        <FloatingFocusManager context={floatingContext} modal={context.modal}>
          <div
            ref={ref}
            style={{ ...context.floatingStyles, ...style }}
            aria-labelledby={context.labelId}
            aria-describedby={context.descriptionId}
            {...context.getFloatingProps(props)}
          >
            {props.children}
          </div>
        </FloatingFocusManager>
      </FloatingPortal>
    );
  }
);
