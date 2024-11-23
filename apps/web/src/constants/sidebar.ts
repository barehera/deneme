import {
  Home,
  User,
  Building,
  Users,
  Heart,
  PackageCheck,
  MessageCircle,
  Phone,
  Construction,
  Percent,
} from 'lucide-react';

export const SIDEBAR_ITEMS = {
  navMain: [
    {
      title: 'Overview',
      url: '#',
      icon: Home,
    },
    {
      title: 'Account',
      url: '#',
      icon: User,
    },
    {
      title: 'Company',
      url: '#',
      icon: Building,
    },
    {
      title: 'Users',
      url: '#',
      icon: Users,
      items: [
        {
          title: 'Overview',
          url: '#',
        },
        {
          title: 'Format',
          url: '#',
        },
      ],
    },
    {
      title: 'Wishlist',
      url: '#',
      icon: Heart,
      items: [
        {
          title: 'Overview',
          url: '#',
        },
        {
          title: 'Format',
          url: '#',
        },
      ],
    },
    {
      title: 'Orders',
      url: '#',
      icon: PackageCheck,
      items: [
        {
          title: 'Overview',
          url: '#',
        },
        {
          title: 'Format',
          url: '#',
        },
      ],
    },
    {
      title: 'Support',
      url: '#',
      icon: MessageCircle,
      items: [
        {
          title: 'Overview',
          url: '#',
        },
        {
          title: 'Format',
          url: '#',
        },
      ],
    },
    {
      title: 'Contact',
      url: '#',
      icon: Phone,
      items: [
        {
          title: 'Overview',
          url: '#',
        },
        {
          title: 'Format',
          url: '#',
        },
      ],
    },
    {
      title: 'Maintanence',
      url: '#',
      icon: Construction,
    },
    {
      title: 'Offers',
      url: '#',
      icon: Percent,
    },
  ],
};
