import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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
}