import React from 'react';
import Divider from '@material-ui/core/Divider';
import { useTheme } from '@material-ui/core';

interface Props {
  customBackground?: string;
  variant?: any;
}

const CustomDivider: React.FC<Props> = ({ customBackground, variant }) => {
  const theme = useTheme();
  return (
    <Divider
      variant={variant}
      style={{
        background:
          `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.common.white}` ||
          customBackground,
      }}
    />
  );
};

export default CustomDivider;
