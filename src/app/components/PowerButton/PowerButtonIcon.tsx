import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled, { useTheme } from 'styled-components';
import { selectedTheme } from '../../../features/uiStatusSlice';
import { useGlobalConnectingStatus } from '../../hooks/connectingStatus';
import DarkThemePowerOn from "./power_on.svg";
import DarkThemePowerOff from "./power_off.svg";
import LightThemePowerOn from "./power_on_white.svg";
import LightThemePowerOff from "./power_off_white.svg";

export const PowerButtonIcon = (): JSX.Element => {
  const globalStatus = useGlobalConnectingStatus();
  const theme = useTheme();
  const themeType = useSelector(selectedTheme);
  const [power_on, setPowerOn] = useState(false);

  return (
    <StyledPowerIcon onClick={() => setPowerOn(!power_on)}>
      {themeType === 'light' && <div>
      {power_on ? <img height="214" width="214" src={LightThemePowerOn} alt=""/> : <img height="214" width="214" src={LightThemePowerOff} alt=""/>}
        </div>}
        {themeType === 'dark' && <div>
        {power_on ? <img height="214" width="214" src={DarkThemePowerOn} alt=""/> : <img height="214" width="214" src={DarkThemePowerOff} alt=""/>}
        </div>}
      {/* {power_on ? <img height="214" width="214" src={DarkThemePowerOn} alt=""/> : <img height="214" width="214" src={DarkThemePowerOff} alt=""/>} */}
      
    </StyledPowerIcon>
  );
};

const StyledPowerIcon = styled.div<{}>``;
