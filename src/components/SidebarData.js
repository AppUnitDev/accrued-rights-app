import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
// import * as TbIcons from "react-icons/tb";
// import * as BsIcons from "react-icons/bs";
import * as BiIcons from 'react-icons/bi';
import * as GiIcons from 'react-icons/gi';
// import * as GrIcons from "react-icons/gr";

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    // subNav: [
    //   {
    //     title: 'Users',
    //     path: '/dashboard/users',
    //     icon: <IoIcons.IoIosPaper />
    //   },
    //   {
    //     title: 'Quick Access',
    //     path: '/dashboard/quickaccess',
    //     icon: <IoIcons.IoIosPaper />
    //   }
    // ]
  },
  {
    title: 'Accrued Rights',
    path: '/',
    icon: <BiIcons.BiCoinStack />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Retiree',
        path: '/accrued-rights/retirees',
        icon: <GiIcons.GiTwoCoins />,
        // cName: 'sub-nav'
      },
      {
        title: 'Deceased',
        path: '/accrued-rights/deceased',
        icon: <GiIcons.GiTwoCoins />,
        // cName: 'sub-nav'
      },
      {
        title: 'Pension Increase',
        path: '/accrued-rights/pension-increase',
        icon: <GiIcons.GiTwoCoins />,
      },
    ],
  },
  {
    title: 'Death Benefit',
    path: '/',
    icon: <FaIcons.FaRegMoneyBillAlt />,

    subNav: [
      {
        title: 'PFA Submissions',
        path: '/death-benefit/pfa-submissions',
        icon: <FaIcons.FaUserSecret />,
      },
    ],
  },

  {
    title: 'Administration',
    path: '/',
    icon: <FaIcons.FaUserSecret />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Maintain Users',
        path: '/administration/maintain-user',
        icon: <FaIcons.FaUserSecret />,
      },
      {
        title: 'Manage Roles',
        path: '/administration/manage-roles',
        icon: <FaIcons.FaUserSecret />,
      },

      {
        title: 'Manage Privileges',
        path: '/administration/manage-privileges',
        icon: <FaIcons.FaUserSecret />,
      },

      {
        title: 'Map Privileges to Roles',
        path: '/administration/map-privileges-roles',
        icon: <FaIcons.FaUserSecret />,
      },

      {
        title: 'Reset Password',
        path: '/administration/reset-password',
        icon: <FaIcons.FaUserSecret />,
      },
    ],
  },
  {
    title: 'Reports',
    path: '/',
    icon: <AiIcons.AiFillSwitcher />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Consolidated Paid',
        path: '/reports/consolidated-paid',
        icon: <AiIcons.AiFillSwitcher />,
      },
      {
        title: 'Consolidated Accrued Rights',
        path: '/reports/consolidated-accrued-rights',
        icon: <AiIcons.AiFillSwitcher />,
      },
      {
        title: 'Accrued Rights Paid Per PFA',
        path: '/reports/accrued-rights-paid-per-pfa',
        icon: <AiIcons.AiFillSwitcher />,
      },
      {
        title: 'Pension Increase Paid Per PFA',
        path: '/reports/pension-increase-paid-per-pfa',
        icon: <AiIcons.AiFillSwitcher />,
      },
    ],
  },

  {
    title: 'MaintainPencomUsers',
    path: '/maintainpencomusers',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  }
  // {
  //   title: 'Reports',
  //   path: '/reports',
  //   icon: <AiIcons.AiFillSwitcher />
  // }
];
