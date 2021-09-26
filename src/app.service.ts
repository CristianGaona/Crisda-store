import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Client } from 'pg';

@Injectable()
export class AppService {
  constructor(
    @Inject('PG') private clientPg: Client,
  ){}
  getHello(): string {
    return 'Hello World!';
  }

  getTask(){
    return new Promise((resolve, reject) => {
      this.clientPg.query('SELECT * FROM TASKS', (err, res) =>{
        if (err){
          reject(err);
        }
        resolve(res.rows);
    });   
});
  }
}
