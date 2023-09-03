import * as React from "react";
import { usePopover } from "../../hooks/usePopover";

export const PopoverContext = React.createContext(null);

export function Popover({children, modal = false, ...restOptions}) {
  // This can accept any props as options, e.g. `placement`,
  // or other positioning options.
  const popover = usePopover({ modal, ...restOptions });
  return (
    <PopoverContext.Provider value={popover}>
      {children}
    </PopoverContext.Provider>
  );
}
