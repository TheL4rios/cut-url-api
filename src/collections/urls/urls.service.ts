import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UtilsService } from 'src/core/services/utils.service';
import { CreateUrlDto } from './dto/create-url.dto';
import { Url } from './entities/url.entity';

@Injectable()
export class UrlsService {

  constructor(
    @InjectModel(Url.name) private readonly urlModel: Model<Url>,
    private util: UtilsService
  ) { }

  async create(createUrlDto: CreateUrlDto) {
    const oldUrl = await this.findOneByUrl(createUrlDto.url);
    if (oldUrl) {
      return oldUrl.code;
    }

    const code = this.util.generateUID(8);
    const url = new this.urlModel({
      code,
      ...createUrlDto
    });
    await url.save();
    return code;
  }

  findOneByUrl(url: string) {
    return this.urlModel.findOne({ url }).exec();
  }

  async findOneByCode(code: string) {
    const urlObj = await this.urlModel.findOne({ code }).exec();

    if (!urlObj) {
      throw new NotFoundException('Url Not found');
    }

    return urlObj.url;
  }
}
