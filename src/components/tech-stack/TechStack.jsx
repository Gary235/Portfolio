import React from "react";

import getTechIcon from "../../utils/getTechIcon";

import { Tooltip } from "../tooltip/Tooltip";
import { TooltipTrigger } from "../tooltip/TooltipTrigger";
import { TooltipContent } from "../tooltip/TooltipContent";

import { TechIcons } from "./styles";
import getTechVerbose from "../../utils/getTechVerbose";

const TechStack = ({stack, width = 24}) => {

  return (
    <TechIcons>
      {stack.map((tech) => (
        <Tooltip key={tech}>
          <TooltipTrigger>
            <img alt={tech} width={width} src={getTechIcon(tech)} />
          </TooltipTrigger>
          <TooltipContent className="Tooltip">{getTechVerbose(tech)}</TooltipContent>
        </Tooltip>
      ))}
    </TechIcons>
  )
}

export default TechStack;
