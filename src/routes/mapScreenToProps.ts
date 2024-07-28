import {IconProps} from '@components';
import {AppTabBottomParamList} from '@routes';

export const mapScreenToProps: Record<
  keyof AppTabBottomParamList,
  {
    label: string;
    icon: {
      focused: IconProps['name'];
      unfocused: IconProps['name'];
    };
  }
> = {
  HomeScreen: {
    label: 'Início',
    icon: {
      focused: 'home',
      unfocused: 'home',
    },
  },
  CartScreen: {
    label: 'Carrinho',
    icon: {
      focused: 'cart',
      unfocused: 'cart',
    },
  },
  ContactScreen: {
    label: 'Contato',
    icon: {
      focused: 'contact',
      unfocused: 'contact',
    },
  },
};
