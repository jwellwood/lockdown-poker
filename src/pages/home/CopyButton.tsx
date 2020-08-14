import React, { useState } from 'react';
import FileCopyRounded from '@material-ui/icons/FileCopyRounded';
import CopyToClipboard from 'react-copy-to-clipboard';
import IconButton from '@material-ui/core/IconButton';

interface Props {
  text: string;
}

const CopyButton: React.FC<Props> = ({ text }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const onCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };

  return (
    <CopyToClipboard onCopy={onCopy} text={text}>
      <IconButton>
        <FileCopyRounded
          style={{
            color: copied ? 'green' : 'default',
          }}
        />
      </IconButton>
    </CopyToClipboard>
  );
};

export default CopyButton;
