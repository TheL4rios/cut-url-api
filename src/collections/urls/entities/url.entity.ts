import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'urls', timestamps: true })
export class Url extends Document {

    @Prop({
        required: true,
        unique: true
    })
    code: string;

    @Prop({
        required: true,
        unique: true
    })
    url: string;

}

export const UrlSchema = SchemaFactory.createForClass(Url);