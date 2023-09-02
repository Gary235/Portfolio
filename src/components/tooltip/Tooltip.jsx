import { createContext } from "react";

import { useTooltip } from "../../hooks/useTooltip";

export const TooltipContext = createContext(null);

export function Tooltip({children, ...options}) {
  // This can accept any props as options, e.g. `placement`, or other positioning options.
  const tooltip = useTooltip(options);

  return (
    <TooltipContext.Provider value={tooltip}>
      {children}
    </TooltipContext.Provider>
  );
}
