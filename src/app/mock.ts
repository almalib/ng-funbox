import {FunboxCardContentInterface} from 's-funbox';

export const bgImage = 'https://i.ibb.co/nfMj0BY/Pattern.png';

export const pageTitle = 'Ты сегодня покормил кота?';

export const cardContent: FunboxCardContentInterface[] = [
  {
    id: 1,
    desc: 'Сказочное заморское яство',
    question: 'Котэ не одобряет?',
    title: 'Нямушка',
    menu: 'с фуа-гра',
    amount: '**10** порций',
    stock: 'мышь в подарок',
    weight: '0,5',
    kg: 'кг',
    info: 'Что сидишь? Порадуй котэ',
    disabledInfo: 'Печалька, с фуа-гра закончился',
    link: 'купи',
    img: 'https://i.ibb.co/QPLnC7z/Photo.png',
    inStock: true,
    selectedInfo: 'Печень утки разварная с артишоками.',
  },
  {
    id: 2,
    desc: 'Сказочное заморское яство',
    question: 'Котэ не одобряет?',
    title: 'Нямушка',
    menu: 'с рыбой',
    amount: '**40** порций',
    stock: '**2** мыши в подарок',
    weight: '2',
    kg: 'кг',
    info: 'Что сидишь? Порадуй котэ.',
    disabledInfo: 'Печалька, с рыбой закончился',
    img: 'https://i.ibb.co/QPLnC7z/Photo.png',
    inStock: true,
    selectedInfo: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
  },
  {
    id: 3,
    desc: 'Сказочное заморское яство',
    question: 'Котэ не одобряет?',
    title: 'Нямушка',
    menu: 'с курой',
    amount: '**100** порций',
    stock: '**5** мышей в подарок',
    review: 'Заказчик доволен',
    weight: '5',
    kg: 'кг',
    info: 'Что сидишь? Порадуй котэ',
    disabledInfo: 'Печалька, с курой закончился',
    img: 'https://i.ibb.co/QPLnC7z/Photo.png',
    inStock: false,
    selectedInfo: 'Филе из цыплят с трюфелями в бульоне.',
  },
];
