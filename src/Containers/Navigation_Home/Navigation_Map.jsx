import * as Icon from '../../Imports/icons';

export const navItems = {

  ADMIN: [
    { to: '/CE_Work_Space/Home', text: 'Home', icon: <Icon.Dashboard_Cubes /> },
  ],

  ADMIN: [
    {
      text: 'Programmer',
      icon: <Icon.Dashboard_Cubes />,
      dropdownItems: [
        { to: '/CE_Work_Space/Functions_Validations', text: 'Functions validations' },
        { to: '/CE_Work_Space/Brockers_Api', text: 'Brockers Api' },
      ],
    },
  ],
}; 