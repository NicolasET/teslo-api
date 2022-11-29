import { v4 } from 'uuid';

export const fileNamer = (
  req: Express.Request,
  file: Express.Multer.File,
  callback: (error: Error, filename: string) => void,
) => {
  if (!file) return callback(new Error('File is empty'), '');
  const fileExtension = file.mimetype.split('/')[1];
  const fileName = `${v4()}.${fileExtension}`;
  callback(null, fileName);
};
