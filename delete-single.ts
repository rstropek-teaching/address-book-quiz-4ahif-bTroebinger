import {Next, Request, Response} from 'restify';
import {BadRequestError, NotFoundError} from 'restify-errors';
import {contacts} from './contacts';

export function deleteSingle(req: Request, res: Response, next: Next): void {
  const id = parseInt(req.params.id);
  if (id) {
    const customerIndex = contacts.findIndex(c => c.id === id);
    if (customerIndex !== (-1)) {
      contacts.splice(customerIndex, 1);
      next();
    } else {
      next(new NotFoundError());
    }
  } else {
    next(new BadRequestError('Parameter id must be a number'));
  }
}