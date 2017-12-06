import {CREATED} from 'http-status-codes';
import {Next, Request, Response} from 'restify';
import {contacts, IContact} from './contacts';

export function post(req: Request, res: Response, next: Next): void {
  if (!req.body.id || !req.body.firstName || !req.body.lastName) {
    next();
  } else {
    const newCustomerId = parseInt(req.body.id);
    if (!newCustomerId) {
      next();
    } else {
      const newContact: IContact = { id: newCustomerId,
        firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email };
      contacts.push(newContact);
      res.send(CREATED, newContact, {Location: `${req.path()}/${req.body.id}`});
    }
  }
}