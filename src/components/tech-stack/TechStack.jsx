import React, {useState} from "react";

import getTechIcon from "../../utils/getTechIcon";
import getTechVerbose from "../../utils/getTechVerbose";
import getProjectLinks from "../../utils/getProjectLinks";

import { Tooltip } from "../tooltip/Tooltip";
import { TooltipTrigger } from "../tooltip/TooltipTrigger";
import { TooltipContent } from "../tooltip/TooltipContent";
import { Popover } from "../popover/Popover";
import { PopoverTrigger } from "../popover/PopoverTrigger";
import { PopoverContent } from "../popover/PopoverContent";

import { TechIcon, TechIcons } from "./styles";

const linkArrow = (
  <svg fill="none" stroke="currentColor" width={15} stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  	<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path>
  </svg>
)

const TechStack = ({stack, width = 24}) => {
  if (!stack) return null;

  const [open, setOpen] = useState(
    stack.reduce((acc, curr) => ({...acc, [curr]: false}), {})
  );

  const renderIcon = (tech) => {
    const isProject = ['flocabulary', 'unipyme', 'codilink'].includes(tech)
    const options = {
      component: isProject ? Popover : Tooltip,
      content: isProject ? PopoverContent : TooltipContent,
      contentClass: isProject ? 'project-tooltip' : 'regular-tooltip',
      onClick: isProject ? () => setOpen((v) => ({...v, [tech]: !v[tech]})) : () => {},
      onOpenChange: isProject ? setOpen : null,
      open: isProject ? open[tech] : null,
      trigger: isProject ? PopoverTrigger : TooltipTrigger,
    }

    const links = getProjectLinks(tech)

    return (
      <options.component key={tech} open={options.open} onOpenChange={options.onOpenChange}>
        <options.trigger onClick={options.onClick}>
          <TechIcon alt={tech} width={width} src={getTechIcon(tech)} isProject={isProject} />
        </options.trigger>
        <options.content className={options.contentClass}>
          <div dangerouslySetInnerHTML={{__html: getTechVerbose(tech)}} />
          {isProject && (
            <div style={{marginTop: '1rem', display: 'flex', gap: '1.5rem'}}>
              <a href={links[0]} target="_blank" className="link link--dark" style={{display: 'flex', gap: '2px'}}>
                Check site {linkArrow}
              </a>
              {tech === 'codilink' && (
                <a href={links[1]} target="_blank" className="link link--semidark" style={{display: 'flex', gap: '2px'}}>
                  Check contribution {linkArrow}
                </a>
              )}
            </div>
          )}
        </options.content>
      </options.component>
    )
  }

  return <TechIcons> {stack.map(renderIcon)} </TechIcons>
}

export default TechStack;
