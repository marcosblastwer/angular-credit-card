import { Component } from '@angular/core';

import {
  isValidCreditCardNumber,
  isValidSecurityNumber,
  isValidExpirationDate,
  isValidHolder
} from '../utils/validateCreditCard'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cardNumber: string = '';
  cardNumberValidation: string = '';
  cardHolder: string = '';
  cardHolderValidation: string = '';
  expires: string = '';
  expiresValidation: string = '';
  securityNumber: string = '';
  securityNumberValidation: string = '';
  isSecurityNumberFocused: boolean = false;

  handleSecurityNumberFocusOut(value: string) {
    this.setIsSecurityNumberFocused(false);
    this.validateSecurityNumber(value);
  }

  setCardNumber(value: string) {
    this.cardNumber = value;
    this.cardNumberValidation = '';
  }

  setCardHolder(value: string) {
    this.cardHolder = value;
    this.cardHolderValidation = '';
  }

  setExpires(value: string) {
    this.expires = value;
    this.expiresValidation = '';
  }

  setSecurityNumber(value: string) {
    this.securityNumber = value;
    this.securityNumberValidation = '';
  }

  setIsSecurityNumberFocused(value: boolean) {
    this.isSecurityNumberFocused = value;
  }

  validateCardNumber(value: string) {
    if (!isValidCreditCardNumber(value))
      this.cardNumberValidation = 'Credit card number is invalid.'
  }

  validateCardHolder(value: string) {
    if (!isValidHolder(value))
      this.cardHolderValidation = 'Cardholder\'s name is invalid.';
  }

  validateExpireDate(value: string) {
    if (!isValidExpirationDate(value))
      this.expiresValidation = 'Expiration date is invalid.';
  }

  validateSecurityNumber(value: string) {
    if (!isValidSecurityNumber(value))
      this.securityNumberValidation = 'Security code number is invalid.'
  }
}
