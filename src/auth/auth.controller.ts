import {
    Controller,
    Post,
    Body,
    HttpCode,
    HttpStatus,
    UseGuards,
    Request,
    Get,
  } from '@nestjs/common';
  import { AuthService } from './auth.service';
  import { LoginDto } from './../users/dto/login.dto';
  import { JwtAuthGuard } from './jwt-auth.guard';
  import { ApiTags, ApiBearerAuth, ApiOkResponse, ApiUnauthorizedResponse, ApiBadRequestResponse, ApiInternalServerErrorResponse } from '@nestjs/swagger';
  
  @ApiTags('auth')
  @Controller('auth')
  export class AuthController {
    constructor(private authService: AuthService) {}
  
    @Post('login')
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({ description: 'User successfully logged in.' })
    @ApiUnauthorizedResponse({ description: 'Invalid credentials.' })
    @ApiBadRequestResponse({description: 'Bad Request'})
    @ApiInternalServerErrorResponse({description:'Internal Server Error'})
    async login(@Body() loginDto: LoginDto) {
      return this.authService.login(loginDto);
    }
  
    @UseGuards(JwtAuthGuard)
    @Get('profile')
    @ApiBearerAuth()
    @ApiOkResponse({ description: 'User profile retrieved successfully.' })
    @ApiUnauthorizedResponse({ description: 'Unauthorized.' })
    getProfile(@Request() req) {
      return req.user;
    }
  }