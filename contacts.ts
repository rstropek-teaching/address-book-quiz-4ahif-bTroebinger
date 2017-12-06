export interface IContact {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  }
  
  export const contacts: IContact[] = [
    {id: 1, firstName: 'Donald', lastName: 'Duck', email: 'donald.duck@duckburg.com'},
    {id: 2, firstName: 'Mickey', lastName: 'Mouse', email: 'mickey.mouse@duckburg.com'},
    {id: 3, firstName: 'Minnie', lastName: 'Mouse', email: 'minnie.mouse@duckburg.com'},
    {id: 4, firstName: 'Scrooge', lastName: 'McDuck', email: 'scrooge.mcduck@duckburg.com'}
  ];