import fs from 'fs'; //Import File system module

// Query params interface
interface queryParams {
  filename?: string;
  width?: number;
  height?: number;
}

class dirsAndFiles {
  static validateParams = (query: queryParams): boolean => {
    if (!query.filename || !query.height || !query.width) {
      return false;
    }
    if (query.height < 0 || query.width < 0) {
      return false;
    }
    return true;
  };

  static imgExists = (query: queryParams): boolean => {
    const inputFile = `./img/${query.filename}.jpg`;
    const fileExists = fs.existsSync(inputFile);
    if (!fileExists) {
      return false;
    }
    return true;
  };

  static thumpExists = (query: queryParams): boolean => {
    const outputFile = `./thump/${query.filename}_${query.width}_${query.height}.jpg`;
    const fileExists = fs.existsSync(outputFile);
    if (!fileExists) {
      return false;
    }
    return true;
  };
}
export default dirsAndFiles;
