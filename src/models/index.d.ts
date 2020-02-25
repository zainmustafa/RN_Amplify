import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Employee {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly addresses?: Address[];
  readonly skills?: Skill[];
  constructor(init: ModelInit<Employee>);
  static copyOf(source: Employee, mutator: (draft: MutableModel<Employee>) => MutableModel<Employee> | void): Employee;
}

export declare class Address {
  readonly id: string;
  readonly addresses?: Employee;
  readonly line1: string;
  readonly line2?: string;
  readonly city?: string;
  readonly state?: string;
  readonly zipCode: string;
  constructor(init: ModelInit<Address>);
  static copyOf(source: Address, mutator: (draft: MutableModel<Address>) => MutableModel<Address> | void): Address;
}

export declare class Skill {
  readonly id: string;
  readonly name: string;
  readonly skills?: Employee;
  constructor(init: ModelInit<Skill>);
  static copyOf(source: Skill, mutator: (draft: MutableModel<Skill>) => MutableModel<Skill> | void): Skill;
}