import React from 'react';
import { I18nextProvider } from 'react-i18next';

import AppNav from '~/routers';
import i18n from '~/i18n';

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <AppNav />
    </I18nextProvider>
  );
}
