export const routes = {
  // Public routes
  home: '/',
  signIn: '/sign-in',
  signUp: '/sign-up',
  
  accounts: '/accounts',
  accountDetails: (slug: string) => `/accounts/${slug}`,
};
