import { User } from '@/entities';

export const useAccountsPage = () => {
  const mockUsers: Partial<User>[] = [
    {
      slug: 'vladislav',
      name: 'Владислав',
      email: 'example@gmail.com',
      description: '',
      image: {
        id: '1',
        url: 'https://via.placeholder.com/150',
        width: '150',
        height: '150',
      },
      cover: {
        id: '1',
        url: '',
        width: '',
        height: '',
      },
    },
    {
      slug: 'evgeniy',
      name: 'Евгений',
      email: 'eugenearbatsky@yandex.ru',
      description: '',
    },
    {
      slug: 'andrey',
      name: 'Андрей',
      email: 'andrew1245@gmail.com',
      description: '',
    },
    {
      slug: 'anna',
      name: 'Анна',
      email: 'annadearmas1988@gmail.com',
      description: '',
      image: {
        id: '4',
        url: 'https://via.placeholder.com/150',
        width: '150',
        height: '150',
      },
    },
    {
      slug: 'mikhail',
      name: 'Михаил',
      email: 'miha1normalno@yandex.ru',
      description: '',
    },
    {
      slug: 'gleb',
      name: 'Глеб',
      email: 'gleb.fedorov@mail.com',
      description: '',
    },
    {
      slug: 'ivan',
      name: 'Иван',
      email: 'ivangold77@gmail.com',
      description: '',
    },
  ];

  return { mockUsers };
};
