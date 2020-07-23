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
