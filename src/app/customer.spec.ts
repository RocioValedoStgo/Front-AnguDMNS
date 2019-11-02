import { Customer } from './interfaces/customer';

describe('Customer', () => {
  it('should create an instance', () => {
    expect(new Customer()).toBeTruthy();
  });
});
