import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilsService {
    generateUID(len = 6): string {
        const realLen = Math.round(len / 2);
        
        const firstPart = (Math.random() * 46656) | 0;
        const secondPart = (Math.random() * 46656) | 0;
        const first = ("000" + firstPart.toString(36)).slice(-realLen);
        const second = ("000" + secondPart.toString(36)).slice(-realLen);
        return first + second;
    }
}
