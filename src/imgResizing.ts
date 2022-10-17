import sharp from 'sharp'; //Import sharp middleware

//Resizing Image using Sharp middleware
const imgResize = async (
  inputPath: string,
  outputPath: string,
  width: number,
  height: number
) => {
  await sharp(inputPath).resize(width, height).toFile(outputPath);
  return;
};

export default imgResize;
