import { Knex } from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('enderecos', table => {
        table.increments('id').primary();
        table.string('cep').notNullable();
        table.string('logradouro').notNullable();
        table.string('complemento').notNullable();
        table.string('bairro').notNullable();
        table.string('localidade').notNullable();
        table.string('uf').notNullable();
        table.integer('ibge').notNullable();
        table.integer('gia').notNullable();
        table.integer('ddd').notNullable();
        table.integer('siafi').notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('enderecos')
}