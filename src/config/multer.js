import multer from "multer";
import { v4 } from "uuid";
import { extname, resolver } from 'node:path';

export default {
    storage: multer.diskStorage({
        destination: resolver(__dirname, '..', '..', 'uploads'), 
        filename: (request, file, callback) => callback(null, v4() + extname(file.originalname)),

    }),
};
