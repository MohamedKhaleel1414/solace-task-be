import { Controller, Get, Patch, Req, Res, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';
import {
  IUser,
  ILocalizedName,
  INationalID,
  INationalities,
  IMaritalStatus,
} from './interfaces';

class User implements IUser {
  constructor(
    firstName: string,
    fatherName: string,
    grandfatherName: string,
    familyName: string,
    localizedName: ILocalizedName,
    nationalId: INationalID,
    nationalities: INationalities[],
    maritalStatus: IMaritalStatus,
    dependants: number,
  ) {
    this.firstName = firstName;
    this.fatherName = fatherName;
    this.familyName = familyName;
    this.grandfatherName = grandfatherName;
    this.dependants = dependants;
    this.localizedName = localizedName;
    this.maritalStatus = maritalStatus;
    this.nationalId = nationalId;
    this.nationalities = nationalities;
  }
  firstName: string;
  fatherName: string;
  grandfatherName: string;
  familyName: string;
  localizedName: ILocalizedName;
  nationalId: INationalID;
  nationalities: INationalities[];
  maritalStatus: IMaritalStatus;
  dependants: number;
}

let user = new User(
  'Zaria',
  'Edward',
  'Ernest',
  'Willie',
  {
    firstName: 'صفوان',
    fatherName: 'حمدان',
    grandfatherName: 'هشام',
    familyName: 'عباس',
  },
  {
    idNumber: '1c1f3fde-0581-4afb-8c7e-abacf3bc5875',
    expiryDate: '2024-07-24T22:45:29.864Z',
  },
  [
    {
      country: {
        id: '1016',
        name: 'Bolivia',
      },
      countryId: 1016,
    },
    {
      country: {
        id: '1117',
        name: 'Latvia',
      },
      countryId: 1117,
    },
    {
      country: {
        id: '1225',
        name: 'Virgin Islands, U.S.',
      },
      countryId: 1225,
    },
  ],
  {
    id: '27',
    name: 'Divorced',
  },
  60,
);

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('info')
export class EditInfo {
  @Get('get')
  getInfo(@Res() response: Response): any {
    return response.status(200).send({ user: user });
  }

  @Patch('edit')
  editInfo(@Body() body: IUser, @Res() response: Response): any {
    console.log("body: ", body);
    user = new User(
      body.firstName,
      body.fatherName,
      body.grandfatherName,
      body.familyName,
      body.localizedName,
      body.nationalId,
      body.nationalities,
      body.maritalStatus,
      body.dependants,
    );
    return response.status(200).send({ user: user });
  }
}
