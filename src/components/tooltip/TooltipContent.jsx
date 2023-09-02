import { forwardRef } from "react";

import {useMergeRefs, FloatingPortal} from "@floating-ui/react";
import { useTooltipContext } from "../../hooks/useTooltipContext";
import { TooltipContext } from "./Tooltip";

import './styles.css'

export const TooltipContent = forwardRef(
  function TooltipContent({ style, ...props }, propRef) {
    const context = useTooltipContext(TooltipContext);
    const ref = useMergeRefs([context.refs.setFloating, propRef]);

    if (!context.open) return null;

    return (
      <FloatingPortal>
        <div
          ref={ref}
          style={{...context.floatingStyles, ...style}}
          {...context.getFloatingProps(props)}
        />
      </FloatingPortal>
    );
  }
);