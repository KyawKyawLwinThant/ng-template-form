export class Customer{

  public name:string;
  public age:number;
  public streetName:string;
  public state:string;
  public gender:Gender;


  constructor(name: string, age: number, streetName: string, state: string, gender: Gender) {
    this.name = name;
    this.age = age;
    this.streetName = streetName;
    this.state = state;
    this.gender = gender;
  }

}

export enum Gender{
  Male,
  Female
}
