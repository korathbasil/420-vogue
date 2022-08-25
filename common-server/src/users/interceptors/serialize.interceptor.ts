import {
  CallHandler,
  ExecutionContext,
  NestInterceptor,
  UseInterceptors,
} from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { map, Observable } from "rxjs";

export function UseSerializeInterceptor(Dto: any) {
  return UseInterceptors(new SerializeInterceptor(Dto));
}

export class SerializeInterceptor implements NestInterceptor {
  constructor(private readonly dto: any) {}
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map((responseData: any) => {
        if (responseData.email) {
          return plainToInstance(this.dto, responseData, {
            excludeExtraneousValues: true,
          });
        } else {
          return responseData;
        }
      })
    );
  }
}
