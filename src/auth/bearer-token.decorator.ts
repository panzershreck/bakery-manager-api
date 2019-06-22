import { createParamDecorator, UnauthorizedException } from '@nestjs/common';

export const BearerToken = createParamDecorator((data, req) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    throw new UnauthorizedException();
  }

  const [ type, token ] = authorization.split(' ');

  if (type === 'Bearer' && token) {
    return token;
  }

  throw new UnauthorizedException();
});