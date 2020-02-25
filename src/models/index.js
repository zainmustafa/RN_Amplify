// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Employee, Address, Skill } = initSchema(schema);

export {
  Employee,
  Address,
  Skill
};