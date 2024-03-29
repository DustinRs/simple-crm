export class User {
  firstName: string;
  lastName: string;
  birthDate: number;
  street: string;
  zipCode: number;
  city: string;
  email: string;
  id: string;
  phone: string;

  constructor(obj?: any) {
    this.firstName = obj ? obj.firstName : ''; // if else
    this.lastName = obj ? obj.lastName : '';
    this.birthDate = obj ? obj.birthDate : '';
    this.street = obj ? obj.street : '';
    this.zipCode = obj ? obj.zipCode : '';
    this.city = obj ? obj.city : '';
    this.email = obj ? obj.city : '';
    this.id = obj ? obj.city : '';
    this.phone = obj ? obj.phone : '';
  }

  asJSON() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      birthDate: this.birthDate,
      street: this.street,
      zipCode: this.zipCode,
      city: this.city,
      email: this.email,
      id: this.id,
      phone: this.phone
    };
  }
}