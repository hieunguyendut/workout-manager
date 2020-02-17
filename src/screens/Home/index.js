import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

function Home({ t }) {
  return (
    <SafeAreaView>
      <Text>{t('home')}</Text>
    </SafeAreaView>
  );
}

Home.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['common'])(Home);
