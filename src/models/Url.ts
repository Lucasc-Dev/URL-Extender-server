import { Expose } from "class-transformer";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

import urlConfig from '../configs/url';

@Entity('urls')
export default class Url {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    slug: string;
    
    @Column()
    original_url: string;

    @UpdateDateColumn()
    updated_at: Date;

    @CreateDateColumn()
    created_at: Date;

    @Expose({ name: 'custom_url' })
    get_custom_url(): string {
        return `${urlConfig.page_url}${this.slug}`;
    }
}