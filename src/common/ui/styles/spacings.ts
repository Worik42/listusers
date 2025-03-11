const unit = 4;

type Spacings = typeof spacings;

export type KeySpacings = keyof Spacings;

const spacings = {
  '2': unit / 2,
  '4': unit,
  '6': unit * 1.5,
  '8': unit * 2,
  '12': unit * 3,
  '16': unit * 4,
  '20': unit * 5,
  '24': unit * 6,
  '32': unit * 8,
};

export {spacings};
