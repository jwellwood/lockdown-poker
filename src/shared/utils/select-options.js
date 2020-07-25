export const playerNameOptions = (players) => {
  const options = [{ text: '', value: '' }];
  players.forEach((player) => {
    options.push({ text: player.name, value: player.id });
  });
  return options;
};

export const finalPositionOptions = (players) => {
  const options = [{ text: '', value: '' }];
  for (let i = 0; i < players.length; i++) {
    options.push({ text: `${i + 1}`, value: i + 1 });
  }
  return options;
};

export const preferredPaymentOptions = () => {
  const list = ['Bank Transfer', 'Bizum', 'Paypal', 'Cash', 'Other'];
  const options = [{ text: '', value: '' }];
  list.forEach((el) => {
    options.push({ text: el, value: el });
  });
  return options;
};

export const tableNameOptions = () => {
  const list = ['PokerNow', 'PokerStars', 'Live Table', 'Other'];
  const options = [{ text: '', value: '' }];
  list.forEach((el) => {
    options.push({ text: el, value: el });
  });
  return options;
};

export const buyInOptions = () => {
  const options = [{ text: '', value: '' }];
  for (let i = 5; i < 30; i += 5) {
    options.push({ text: i, value: i });
  }
  return options;
};

export const buyBackOptions = () => {
  const options = [{ text: '', value: '' }];
  for (let i = 1; i < 6; i++) {
    options.push({ text: i, value: i });
  }
  return options;
};
