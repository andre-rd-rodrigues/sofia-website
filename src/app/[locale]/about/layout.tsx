import { ReactNode } from 'react';

import { Metadata, MetadataProps, getMetadata } from '../../../../metadata';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params: { locale },
}: MetadataProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return getMetadata({
    title: t('aboutPageTitle'),
    description: t('description'),
  });
}

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return children;
}
