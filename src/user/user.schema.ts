import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, now } from 'mongoose';
export type UserDocument = User & Document;

@Schema({ _id: false })
export class Name {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  first: string;

  @Prop({ required: true })
  last: string;
}

@Schema({ _id: false })
export class Street {
  @Prop({ required: true })
  number: string;

  @Prop({ required: true })
  name: string;
}

@Schema({ _id: false })
export class Location {
  @Prop({ required: true })
  street: Street;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  country: string;

  @Prop({ required: true })
  state: string;
}

@Schema({ _id: false })
export class Picture {
  @Prop({ required: true })
  large: string;

  @Prop({ required: true })
  medium: string;

  @Prop({ required: true })
  thumbnail: string;
}

@Schema()
export class User {
  @Prop({ type: String })
  _id: string;

  @Prop({ required: true })
  name: Name;

  @Prop({ required: true })
  picture: Picture;

  @Prop({ required: true })
  location: Location;

  @Prop({ required: true })
  gender: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ default: now() })
  createdAt: Date;

  @Prop({ default: now() })
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
