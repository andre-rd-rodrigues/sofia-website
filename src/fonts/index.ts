import localFont from 'next/font/local';

const kumlien = localFont({
  src: [
    {
      path: './kumlien-pro-regular.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './kumlien-pro-italic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './kumlien-pro-medium.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './kumlien-pro-bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-kumlien',
});

const proximaNova = localFont({
  src: [
    {
      path: './proxima/proxima-nova-thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './proxima/proxima-nova-thin-italic.otf',
      weight: '100',
      style: 'italic',
    },
    {
      path: './proxima/proxima-nova-regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './proxima/proxima-nova-semibold.otf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-proxima-nova',
});

export { kumlien, proximaNova };
