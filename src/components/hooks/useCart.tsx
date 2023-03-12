import { ChangeEvent, useState } from 'react';

import { formatCardNumber, formatData, isExpiryInvalid } from '../utils/expiryHelper';
import placeholderImg from '../assets/svg/placeholder.svg';
import visaImg from '../assets/svg/visa.svg';
import masterImg from '../assets/svg/mastercard.svg';
import amexImg from '../assets/svg/amex.svg';

export const useCart = () => {
  const [isNameError, setIsNameError] = useState(false);
  const [isPhoneError, setIsPhoneError] = useState(false);
  const [isAddressError, setIsAddressError] = useState(false);
  const [isMailError, setIsMailError] = useState(false);
  const [isCardError, setIsCardError] = useState(false);
  const [isValidToError, setIsValidToError] = useState(false);
  const [printImage, setPrintImage] = useState(placeholderImg);
  const [errorCardValid, setErrorCardValid] = useState('');
  const [isCvvError, setIsCvvError] = useState(false);

  const [card, setCard] = useState('');
  const cardHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let newData = formatCardNumber(e.target.value);
    setCard(newData);
    const typeCard = newData.split('')[0];
    if (typeCard === '4') {
      setPrintImage(visaImg);
    }
    if (typeCard === '5') {
      setPrintImage(masterImg);
    }
    if (typeCard === '3') {
      setPrintImage(amexImg);
    }
    if (!typeCard) {
      setPrintImage(placeholderImg);
      setIsCardError(true);
    } else {
      setIsCardError(false);
    }
  };

  const [name, setName] = useState('');
  const nameHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const nameRegex = /\b[a-zA-Z]{3,}\b.\b[a-zA-Z]{3,}\b/;
    const isName = nameRegex.test(e.target.value);
    if (!isName) {
      setIsNameError(true);
      setName(e.target.value);
    } else {
      setIsNameError(false);
      setName(e.target.value);
    }
  };

  const [phone, setPhone] = useState('');
  const phoneHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const phoneRegex = /(\+)[0-9]\d{8}/;
    const isName = phoneRegex.test(e.target.value);
    if (!isName) {
      setIsPhoneError(true);
      setPhone(e.target.value);
    } else {
      setIsPhoneError(false);
      setPhone(e.target.value);
    }
  };

  const [address, setAddress] = useState('');
  const addressHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const addressRegex = /\b[a-zA-Z]{5,}\b.\b[a-zA-Z]{5,}\b.\b[a-zA-Z]{5,}\b/;
    const isName = addressRegex.test(e.target.value);
    if (!isName) {
      setIsAddressError(true);
      setAddress(e.target.value);
    } else {
      setIsAddressError(false);
      setAddress(e.target.value);
    }
  };

  const [email, setEmail] = useState('');
  const emailHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    const isName = emailRegex.test(e.target.value);
    if (!isName) {
      setIsMailError(true);
      setEmail(e.target.value);
    } else {
      setIsMailError(false);
      setEmail(e.target.value);
    }
  };

  const [cvv, setCvv] = useState('');
  const cvvHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const isCvvRegex = /^[0-9]\d{2}$/;
    const isName = isCvvRegex.test(e.target.value);
    if (!isName) {
      setIsCvvError(true);
      setCvv(e.target.value);
    } else {
      setIsCvvError(false);
      setCvv(e.target.value);
    }
  };

  const [validDataCard, setValidDataCard] = useState('');
  const validHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let formData = formatData(e.target.value);
    const isData = isExpiryInvalid(formData);
    setValidDataCard(formData);
    if (!isData) {
      setIsValidToError(false);
    } else {
      setErrorCardValid(isData);
      setIsValidToError(true);
    }
  };

  return {
    cardHandler,
    nameHandler,
    phoneHandler,
    addressHandler,
    emailHandler,
    cvvHandler,
    validHandler,
    isNameError,
    isPhoneError,
    isAddressError,
    isMailError,
    isCardError,
    isValidToError,
    printImage,
    errorCardValid,
    isCvvError,
    card,
    name,
    phone,
    address,
    email,
    cvv,
    validDataCard,
  };
};
