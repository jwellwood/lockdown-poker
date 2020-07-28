import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import { useTheme } from '@material-ui/core';

const CustomDivider = ({ customBackground, variant }) => {
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

CustomDivider.propTypes = {
  customBackground: PropTypes.string,
  variant: PropTypes.string,
};

export default CustomDivider;
