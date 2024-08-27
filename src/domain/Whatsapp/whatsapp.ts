import {Linking} from 'react-native';

import {Contact, Item} from '@domain';

const formatPhoneForWhatsApp = (phone: string, countryCode = '55') => {
  const cleanedPhone = phone.replace(/\D/g, '');
  return `${countryCode}${cleanedPhone}`;
};

export function openWhatsApp(contacts: Contact, items: Item[]) {
  const phone = `${contacts.phone}`;

  const formatedPhone = formatPhoneForWhatsApp(phone);

  let message = 'Olá! Pode enviar a cotação para estes itens:\n';

  items.forEach(item => {
    message += `${item.quantity}-${item.brand} ${item.name} ${item.specification} ${item?.color} ${item.unit}\n`;
  });

  const encodedMessage = encodeURIComponent(message);

  const url = `https://wa.me/${formatedPhone}?text=${encodedMessage}`;

  Linking.openURL(url)
    .then(() => console.log('WhatsApp aberto com a mensagem'))
    .catch(err => console.error('Erro ao abrir o WhatsApp', err));
}
