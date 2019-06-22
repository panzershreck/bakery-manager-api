import { createParamDecorator, UnauthorizedException } from '@nestjs/common';

export const CurrenUser = createParamDecorator((data, req) => {
  return req.user;
});