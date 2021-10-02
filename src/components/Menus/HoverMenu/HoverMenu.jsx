import React from "react";
import PopupState, { bindHover, bindMenu } from "material-ui-popup-state";
import Menu from "material-ui-popup-state/HoverMenu";

function HoverMenu({ Element, elementProps = {}, menuItems }) {
   return (
      <PopupState variant="popover">
         {(popupState) => (
            <div {...bindHover(popupState)}>
               <Element {...elementProps} />
               <Menu {...bindMenu(popupState)}>{menuItems}</Menu>
            </div>
         )}
      </PopupState>
   );
}

export default HoverMenu;
