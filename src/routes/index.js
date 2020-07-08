import React from 'react';
import AppTabs from '~/routes/app.routes';
import AuthStack from '~/routes/auth.routes';

import { useAuth } from '~/contexts/auth';

const Routes = () => {
  const { signed, user } = useAuth();

  const Home = () => <AppTabs provider={user ? user.provider : false} />;
  const Auth = () => <AuthStack />;

  return signed ? Home() : Auth();
};

export default Routes;
