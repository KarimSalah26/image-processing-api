import app from '../index';
import supertest from 'supertest';
import imgResize from '../imgResizing';
import dirsAndFiles from '../fileWork';

const request = supertest(app);

const FilePath1 = `thump/img2_300_200.jpg`;
const FilePath2 = `img/img2.jpg`;
const width = 200;
const height = 300;

const queryParams1 = {
  filename: 'img2',
  width: 200,
  height: 300,
};

const queryParams2 = {
  //filename: 'img2', missing file name.
  width: 200,
  height: 300,
};

const queryParams3 = {
  filename: 'img2',
  width: -200, //width takes negative value.
  height: 300,
};

describe('Test endpoints', () => {
  it('Tests image process response status', async () => {
    const response = await request.get(
      '/api/imageResize?filename=img3&width=400&height=400'
    );
    expect(response.status).toBe(200);
  });

  it('Test main route response status', async () => {
    const response = await request.get('/api');
    expect(response.text).toContain('Kindly use URL like this format');
  });
});

describe('Image resize function', () => {
  it('Tests image resize return', async () => {
    const result = await imgResize(FilePath2, FilePath1, width, height);
    expect(result).toBeUndefined();
  });
});

describe('Parameters provided', () => {
  it('should be true. all params provided and valid', () => {
    const result = dirsAndFiles.validateParams(queryParams1);
    expect(result).toBeTruthy();
  });

  it('should be false. Because file name is missing', () => {
    const result = dirsAndFiles.validateParams(queryParams2);
    expect(result).toBeFalsy();
  });

  it('should be false. Because width takes negative value', () => {
    const result = dirsAndFiles.validateParams(queryParams3);
    expect(result).toBeFalsy();
  });
});
