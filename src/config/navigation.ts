import { NavigationConfig } from '@/types/navigation';

export const globalNavConfig: NavigationConfig = {
  navItems: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Creators',
      href: '/creators',
    },
    {
      title: 'Works',
      href: '/works',
    },
    {
      title: 'Contact',
      href: '/contact',
    },
  ],
};

export const ExploreNavConfig: NavigationConfig = {
  navItems: [
    {
      title: 'クリエイターを探す',
      href: '/creators',
    },
    {
      title: '作品を探す',
      href: '/works',
    },
  ],
};

export const AboutNavConfig: NavigationConfig = {
  navItems: [
    {
      title: 'リリースノート',
      href: '/release_notes',
    },
  ],
};

export const ContactNavConfig: NavigationConfig = {
  navItems: [
    {
      title: 'お問い合わせ',
      href: '/contact',
    },
  ],
};
