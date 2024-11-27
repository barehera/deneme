import { User, Settings, Box, Mail, File, Users } from 'lucide-react';

const ICON_SIZE = 48;

export const SHORTCUTS = [
  {
    icon: <User size={ICON_SIZE} />,
    label: 'Manage Account',
    href: '/',
  },
  {
    icon: <Settings size={ICON_SIZE} />,
    label: 'Manage Settings',
    href: '/',
  },
  {
    icon: <Box size={ICON_SIZE} />,
    label: 'Manage Orders',
    href: '/',
  },
  {
    icon: <Mail size={ICON_SIZE} />,
    label: 'Fill Contact Form',
    href: '/',
  },
  {
    icon: <File size={ICON_SIZE} />,
    label: 'Create Invoice',
    href: '/',
  },
  {
    icon: <Users size={ICON_SIZE} />,
    label: 'Manage Users',
    href: '/',
  },
];
