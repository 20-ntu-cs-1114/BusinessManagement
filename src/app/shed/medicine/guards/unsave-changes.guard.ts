import { CanDeactivateFn } from '@angular/router';

export const unsaveChangesGuard: CanDeactivateFn<unknown> = (component:any,route, state) => {
  // if()
  console.log(component)
  return false;
};
