const PLANS = {
  arcade: {
    name: 'Arcade',
    price: {
      month: 9,
      year: 90,
    },
  },
  advanced: {
    name: 'Advanced',
    price: {
      month: 12,
      year: 120,
    },
  },
  pro: {
    name: 'Pro',
    price: {
      month: 15,
      year: 150,
    },
  },
}

const ADDONS_PRICES = {
  onlineService: {
    name: 'Online service',
    copy: 'Access to multiplayer games',
    mo: 1,
    yr: 10,
  },
  largerStorage: {
    name: 'Larger storage',
    copy: 'Extra 1TB of cloud save',
    mo: 2,
    yr: 20,
  },
  customizableProfile: {
    name: 'Customizable profile',
    copy: 'Custom theme on your profile',
    mo: 2,
    yr: 10,
  },
}

export { PLANS, ADDONS_PRICES }
