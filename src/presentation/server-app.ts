import { CreateTable } from '../domain/use-cases/create-table.use-case';
import { SaveFile } from '../domain/use-cases/save-file.use-case';

interface RunOptions {
  base: number;
  limit: number;
  showTable: boolean;
  fileDestination: string;
  fileName: string;
}

export class ServerApp {
  static run({
    base,
    limit,
    showTable,
    fileDestination,
    fileName,
  }: RunOptions) {
    console.log('Sever is running...');
    const table = new CreateTable().execute({ base, limit });
    const wasCreated = new SaveFile().execute({
      fileContent: table,
      destination: fileDestination,
      fileName,
    });

    if (showTable) console.log(table);

    wasCreated ? console.log('File Created') : console.log('Creation Failed');
  }
}
