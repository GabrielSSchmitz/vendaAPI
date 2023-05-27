import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateParcela1683510019431 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'parcelas',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()',
            },
            {
              name: 'valor',
              type: 'int8',
            },
            {
              name: 'vencimento',
              type: 'date',
            },
            {
              name: 'status',
              type: 'boolean',
            },

            {
              name: 'despesa',
              type: 'uuid',
            },
            {
              name: 'created_at',
              type: 'timestamp with time zone',
              default: 'now()',
            },
            {
              name: 'updated_at',
              type: 'timestamp with time zone',
              default: 'now()',
            },
          ],
          foreignKeys: [
            {
              name: 'Despesa',
              referencedTableName: 'despesas',
              referencedColumnNames: ['id'],
              columnNames: ['despesa'],
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE',
            },
          ],
        }),
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('parcelas');
    }

}
