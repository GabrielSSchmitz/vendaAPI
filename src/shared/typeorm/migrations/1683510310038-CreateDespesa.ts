import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateDespesa1683510310038 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'despesas',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()',
            },
            {
              name: 'descricao',
              type: 'varchar',
            },
            {
              name: 'valorTotal',
              type: 'int8',
            },
            {
              name: 'transferir',
              type: 'boolean',
            },
            {
              name: 'conta',
              type: 'uuid',
            },
            {
              name: 'transferirPara',
              type: 'uuid',
            },
            {
              name: 'usuario',
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
              name: 'Conta',
              referencedTableName: 'contas',
              referencedColumnNames: ['id'],
              columnNames: ['conta'],
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE',
            },
            {
              name: 'TransferirPara',
              referencedTableName: 'contas',
              referencedColumnNames: ['id'],
              columnNames: ['transferirPara'],
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE',
            },
            {
              name: 'Usuario',
              referencedTableName: 'users',
              referencedColumnNames: ['id'],
              columnNames: ['usuario'],
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE',
            },
          ],
        }),
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
