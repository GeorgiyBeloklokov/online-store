import { useCallback, useState } from 'react';
import { useClipboard } from 'use-clipboard-copy';
import { SERVICE_MESSAGES } from '../../utils/constants';
import { FilterButton } from './FilterButton';

export const FilterCopy = () => {
  const clipboard = useClipboard();
  let textBnt = SERVICE_MESSAGES.copyLink;
  let textBntCopied = SERVICE_MESSAGES.copied;
  const [state, setState] = useState(false);
  const handleCopy = useCallback(() => {
    const url = window.location.href;
    clipboard.copy(url);
  }, [clipboard.copy]);
  function toggle() {
    setState(!state);
    setTimeout(() => {
      setState(state);
    }, 500);
  }
  function handleClick() {
    handleCopy();
    toggle();
  }
  return (
    <FilterButton variant="outlined" onClick={handleClick}>
      {!state ? textBnt : textBntCopied}
    </FilterButton>
  );
};
