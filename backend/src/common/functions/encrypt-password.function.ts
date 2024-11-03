import * as bcrypt from 'bcrypt';

export const hashData = async (password: string) => bcrypt.hash(password, 10);
