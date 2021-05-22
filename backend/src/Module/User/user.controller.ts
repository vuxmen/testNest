import { Controller } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('login')
export class UserController {
  constructor(private userService: UserService) {}
}
