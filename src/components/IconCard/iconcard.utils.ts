export const getBgColor = (i: number) => {
  switch (i) {
    case 0:
      return 'bg-cyan';

    case 1:
      return 'bg-blue';

    default:
      return 'bg-white';
  }
};
